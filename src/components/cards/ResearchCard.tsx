import { motion } from 'framer-motion'
import { ArrowRight, Award, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Research } from '@/types'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'

interface ResearchCardProps {
  research: Research
  index?: number
}

export function ResearchCard({ research, index = 0 }: ResearchCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0, 0, 0, 1],
      }}
      className="group"
    >
      <div className="fluent-card flex h-full flex-col overflow-hidden transition-all duration-normal hover:-translate-y-1 hover:shadow-fluent-16">
        {/* Cover image */}
        <div className="-mx-6 -mt-6 mb-4">
          <ImagePlaceholder
            src={research.coverImage}
            alt={research.title}
            aspectRatio="video"
            placeholderIcon={<FlaskConical className="h-10 w-10" />}
            className="rounded-t-lg rounded-b-none"
          />
        </div>

        {/* Award badge */}
        <div className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-amber-100 px-2.5 py-1 text-caption1 font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          <Award className="h-3.5 w-3.5" />
          {research.award}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-subtitle2 font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand">
          {research.title}
        </h3>

        {/* Summary */}
        <p className="mb-4 flex-1 text-body2 leading-relaxed text-text-secondary">
          {research.summary}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {research.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-tertiary px-2 py-0.5 text-caption1 font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          to={`/research#${research.id}`}
          className="inline-flex items-center gap-1 text-body2 font-semibold text-brand transition-all duration-fast hover:gap-2"
        >
          {t('sections.view_detail')}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
