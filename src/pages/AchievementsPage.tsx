import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/common/SectionTitle'
import { AchievementCard } from '@/components/cards/AchievementCard'
import { achievements } from '@/constants/data'
import { cn } from '@/lib/utils'
import type { AchievementCategory } from '@/types'

const categories: (AchievementCategory | 'all')[] = [
  'all',
  'competition',
  'award',
  'leadership',
  'community',
  'startup',
]

export default function AchievementsPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<
    AchievementCategory | 'all'
  >('all')

  const filtered =
    activeCategory === 'all'
      ? achievements
      : achievements.filter((a) => a.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('achievements.page_title')}
            subtitle={t('achievements.page_subtitle')}
          />
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-body2 font-medium transition-all duration-fast',
                  activeCategory === cat
                    ? 'bg-brand text-white shadow-fluent-4'
                    : 'bg-surface-tertiary text-text-secondary hover:bg-surface-card hover:text-text-primary'
                )}
              >
                {t(`achievements.categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <AchievementCard
                key={item.id}
                achievement={item}
                index={index}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-body1 text-text-tertiary">
              {t('sections.no_results')}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
