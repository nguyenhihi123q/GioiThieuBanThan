import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'
import type { TimelineItem } from '@/types'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

      {items.map((item, index) => (
        <TimelineEntry key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const [ref, isInView] = useInView()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        'relative mb-8 flex items-start last:mb-0',
        'md:justify-center'
      )}
    >
      {/* Dot on timeline */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute left-4 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
      >
        <div className="h-3 w-3 rounded-full border-2 border-brand bg-surface" />
        <div className="absolute h-3 w-3 animate-ping rounded-full bg-brand/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -30 : 30,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0, 0, 0, 1] }}
        className={cn(
          'ml-10 w-full md:ml-0 md:w-[45%]',
          isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        )}
      >
        <div className="fluent-card">
          {/* Date badge */}
          <div className="mb-3 inline-flex rounded-full bg-brand/10 px-3 py-1 text-caption1 font-semibold text-brand">
            {item.date}
          </div>

          <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary">
            {item.title}
          </h3>

          <p className="text-body2 leading-relaxed text-text-secondary">
            {item.description}
          </p>

          {item.image && (
            <div className="mt-4">
              <ImagePlaceholder
                src={item.image}
                alt={item.title}
                aspectRatio="video"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
