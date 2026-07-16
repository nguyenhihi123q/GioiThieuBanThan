import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, Building2, UserCheck } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { activities } from '@/constants/data'

export default function ActivitiesPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('activities.page_title')}
            subtitle={t('activities.page_subtitle')}
          />
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />

            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0, 0, 0, 1],
                }}
                className="relative mb-12 ml-12 last:mb-0 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 flex h-6 w-6 items-center justify-center md:-left-20 md:h-8 md:w-8">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand bg-surface md:h-8 md:w-8">
                    <UserCheck className="h-3 w-3 text-brand md:h-4 md:w-4" />
                  </div>
                </div>

                {/* Card */}
                <div className="fluent-card">
                  {/* Banner image */}
                  <div className="-mx-6 -mt-6 mb-4">
                    <ImagePlaceholder
                      src={activity.image}
                      alt={activity.organization}
                      aspectRatio="video"
                      className="rounded-t-lg rounded-b-none"
                    />
                  </div>

                  {/* Period badge */}
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-caption1 font-semibold text-brand">
                    <Calendar className="h-3.5 w-3.5" />
                    {activity.period}
                  </div>

                  {/* Role */}
                  <h3 className="mb-1 text-title3 font-semibold text-text-primary">
                    {activity.role}
                  </h3>

                  {/* Organization */}
                  <div className="mb-3 flex items-center gap-2 text-body2 text-text-secondary">
                    <Building2 className="h-4 w-4" />
                    {activity.organization}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-body1 leading-relaxed text-text-secondary">
                    {activity.description}
                  </p>

                  {/* Achievements list */}
                  <ul className="mb-4 space-y-1.5">
                    {activity.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start gap-2 text-body2 text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand/40" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Gallery */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((n) => (
                      <ImagePlaceholder
                        key={n}
                        alt={`${activity.role} - Photo ${n}`}
                        aspectRatio="square"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
