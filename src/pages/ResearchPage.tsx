import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Award, Target, Wrench, TrendingUp, FlaskConical, FileText } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { research } from '@/constants/data'

export default function ResearchPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('research.page_title')}
            subtitle={t('research.page_subtitle')}
          />
        </div>
      </section>

      {/* Research Projects */}
      <section className="section-padding">
        <div className="container-wide space-y-16">
          {research.map((item) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0, 0, 0, 1] }}
              className="overflow-hidden rounded-2xl border border-border bg-surface-card shadow-fluent-4"
            >
              {/* Cover */}
              <div className="bg-gradient-to-r from-brand/5 to-blue-500/5 p-6 lg:p-8">
                <ImagePlaceholder
                  src={item.coverImage}
                  alt={item.title}
                  aspectRatio="video"
                  placeholderIcon={<FlaskConical className="h-12 w-12" />}
                  className="rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Award badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-body2 font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  <Award className="h-4 w-4" />
                  {item.award}
                </div>

                {/* Title */}
                <h2 className="mb-4 text-title2 font-bold leading-snug text-text-primary">
                  {item.title}
                </h2>

                {/* Summary */}
                <p className="mb-6 text-body1 leading-relaxed text-text-secondary">
                  {item.summary}
                </p>

                {/* Details grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Objectives */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-subtitle2 font-semibold text-text-primary">
                      <Target className="h-4 w-4 text-brand" />
                      {t('research.objectives')}
                    </div>
                    <ul className="space-y-1.5">
                      {item.objectives.map((obj) => (
                        <li
                          key={obj}
                          className="flex items-start gap-2 text-body2 text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand/40" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-subtitle2 font-semibold text-text-primary">
                      <Wrench className="h-4 w-4 text-brand" />
                      {t('research.technology')}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technology.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-surface-tertiary px-2.5 py-1 text-caption1 font-medium text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contribution */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-subtitle2 font-semibold text-text-primary">
                      <TrendingUp className="h-4 w-4 text-brand" />
                      {t('research.contribution')}
                    </div>
                    <p className="text-body2 text-text-secondary">
                      {item.contribution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-subtitle2 font-semibold text-text-primary">
                      <FileText className="h-4 w-4 text-brand" />
                      {t('research.results')}
                    </div>
                    <p className="text-body2 text-text-secondary">
                      {item.results}
                    </p>
                  </div>
                </div>

                {/* Gallery placeholders */}
                <div className="mt-8">
                  <h4 className="mb-3 text-subtitle2 font-semibold text-text-primary">
                    {t('research.gallery')}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {[1, 2, 3].map((n) => (
                      <ImagePlaceholder
                        key={n}
                        alt={`${item.title} - Image ${n}`}
                        aspectRatio="video"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
