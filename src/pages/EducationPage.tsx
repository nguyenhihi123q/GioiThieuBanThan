import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Star, BookOpen } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { education } from '@/constants/data'

export default function EducationPage() {
  const { t } = useTranslation()
  const edu = education[0]

  const milestones = [
    {
      icon: Star,
      title: 'Thủ khoa đầu ra 2026',
      titleEn: 'Valedictorian 2026',
      description: edu.achievements[0],
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-900/30',
    },
    {
      icon: Award,
      title: 'Học bổng KKHT 8/8 kỳ',
      titleEn: 'Scholarship 8/8 semesters',
      description: edu.achievements[1],
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: BookOpen,
      title: 'Học bổng Vallet 2025',
      titleEn: 'Vallet Scholarship 2025',
      description: edu.achievements[2],
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
    {
      icon: GraduationCap,
      title: 'Thực tập sư phạm 10/10',
      titleEn: 'Teaching Practicum 10/10',
      description: edu.achievements[3],
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('education.page_title')}
            subtitle={t('education.page_subtitle')}
          />
        </div>
      </section>

      {/* University Card */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0, 0, 0, 1] }}
            className="overflow-hidden rounded-2xl border border-border bg-surface-card shadow-fluent-8"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="bg-gradient-to-br from-brand/10 to-blue-500/10 p-8 lg:p-12">
                <ImagePlaceholder
                  alt="Đại học Sư phạm Huế"
                  aspectRatio="video"
                  className="rounded-xl"
                  placeholderIcon={
                    <GraduationCap className="h-12 w-12" />
                  }
                />
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 inline-flex self-start rounded-full bg-brand/10 px-3 py-1 text-caption1 font-semibold text-brand">
                  {edu.period}
                </div>

                <h2 className="mb-2 text-title2 font-bold text-text-primary">
                  {edu.institution}
                </h2>

                <p className="mb-6 text-subtitle1 font-medium text-text-secondary">
                  {t('education.major')}: {edu.major}
                </p>

                <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-900/20">
                  <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-body1 font-semibold text-amber-700 dark:text-amber-300">
                    {t('education.valedictorian')} — {edu.major}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle title={t('education.highlights')} />

          {/* Vertical timeline */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0, 0, 0, 1],
                  }}
                  className="relative mb-8 flex items-start last:mb-0 md:justify-center"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface ${milestone.bg}`}
                    >
                      <Icon className={`h-4 w-4 ${milestone.color}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-10 w-full md:ml-0 md:w-[44%] ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="fluent-card">
                      <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary">
                        {milestone.title}
                      </h3>
                      <p className="mb-3 text-body2 text-text-secondary">
                        {milestone.description}
                      </p>
                      <ImagePlaceholder
                        alt={`${milestone.title} - Certificate`}
                        aspectRatio="video"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competition Leadership */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="fluent-card text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-title3 font-semibold text-text-primary">
              Thủ lĩnh đội thi
            </h3>
            <p className="text-body1 leading-relaxed text-text-secondary">
              {edu.achievements[4]}
            </p>
            <div className="mt-6">
              <ImagePlaceholder
                alt="Competition Leadership"
                aspectRatio="video"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
