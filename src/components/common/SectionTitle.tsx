import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0, 0, 0, 1] }}
        className="text-title1 font-bold text-text-primary sm:text-hero-lg"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0, 0, 0, 1] }}
          className="mt-3 text-body1 text-text-secondary sm:text-subtitle2 sm:font-normal"
        >
          {subtitle}
        </motion.p>
      )}
      {align === 'center' && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0, 0, 0, 1] }}
          className="mx-auto mt-4 h-1 w-16 origin-center rounded-full bg-brand"
        />
      )}
    </div>
  )
}
