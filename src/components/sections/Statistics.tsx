import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'
import type { StatItem } from '@/types'
import {
  Trophy,
  FlaskConical,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Code,
  Star,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  FlaskConical,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Code,
  Star,
}

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  isInView: boolean
}

function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  isInView,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out decelerate curve
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress >= 1) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

interface StatisticsProps {
  items: StatItem[]
  className?: string
}

export function Statistics({ items, className }: StatisticsProps) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = iconMap[item.icon] || Trophy
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0, 0, 0, 1],
            }}
            className="fluent-card flex flex-col items-center text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-title2 font-bold text-text-primary">
              <AnimatedCounter
                target={item.value}
                suffix={item.suffix}
                isInView={isInView}
              />
            </div>
            <div className="mt-1 text-caption1 text-text-secondary">
              {item.label}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
