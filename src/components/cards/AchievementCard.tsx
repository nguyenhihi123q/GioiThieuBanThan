import { motion } from 'framer-motion'
import { Award, Trophy, Users, Lightbulb, Star, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Achievement, AchievementCategory } from '@/types'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'

const categoryConfig: Record<
  AchievementCategory,
  { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }
> = {
  academic: { icon: Award, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  competition: { icon: Trophy, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  leadership: { icon: Star, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  community: { icon: Heart, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  startup: { icon: Lightbulb, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  award: { icon: Users, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
}

interface AchievementCardProps {
  achievement: Achievement
  index?: number
}

export function AchievementCard({ achievement, index = 0 }: AchievementCardProps) {
  const config = categoryConfig[achievement.category]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0, 0, 0, 1],
      }}
      className="group"
    >
      <div className="fluent-card flex h-full flex-col transition-all duration-normal hover:-translate-y-1 hover:shadow-fluent-16">
        {/* Image placeholder */}
        {achievement.image && (
          <div className="-mx-6 -mt-6 mb-4">
            <ImagePlaceholder
              src={achievement.image}
              alt={achievement.title}
              aspectRatio="video"
              className="rounded-t-lg rounded-b-none"
            />
          </div>
        )}

        {/* Category badge & year */}
        <div className="mb-3 flex items-center justify-between">
          <div
            className={cn(
              'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-caption1 font-medium',
              config.bg,
              config.color
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {achievement.category}
          </div>
          <span className="text-caption1 font-medium text-text-tertiary">
            {achievement.year}
          </span>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary transition-colors group-hover:text-brand">
          {achievement.title}
        </h3>
        <p className="flex-1 text-body2 leading-relaxed text-text-secondary">
          {achievement.description}
        </p>

        {/* Certificate placeholder */}
        {achievement.certificate && (
          <div className="mt-4">
            <ImagePlaceholder
              src={achievement.certificate}
              alt={`Chứng nhận - ${achievement.title}`}
              aspectRatio="video"
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
