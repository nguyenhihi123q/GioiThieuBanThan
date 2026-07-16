import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, FileDown, User, FlaskConical } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { Statistics } from '@/components/sections/Statistics'
import { AchievementCard } from '@/components/cards/AchievementCard'
import { ResearchCard } from '@/components/cards/ResearchCard'
import { statistics, achievements, research } from '@/constants/data'
import avatarImg from '@/assets/homepage/avatar.jpg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function HomePage() {
  const { t } = useTranslation()

  const featuredAchievements = achievements.slice(0, 4)
  const featuredResearch = research.slice(0, 3)

  return (
    <>
      {/* ============================================================ */}
      {/* HERO SECTION                                                  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-blue-500/5" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-3xl" />
        </div>

        <div className="container-wide flex min-h-[calc(100vh-3.5rem)] items-center">
          <div className="grid w-full gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* Text content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={itemVariants}
                className="mb-2 text-body1 font-medium text-brand"
              >
                {t('hero.greeting')}
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="mb-4 text-hero-xl font-bold leading-tight text-text-primary sm:text-hero-2xl"
              >
                <span className="gradient-text">{t('hero.name')}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mb-4 text-subtitle1 font-semibold text-text-secondary"
              >
                {t('hero.title')}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mb-8 max-w-lg text-body1 leading-relaxed text-text-tertiary"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <Link to="/about" className="fluent-button-primary">
                  <User className="h-4 w-4" />
                  {t('hero.cta_about')}
                </Link>
                <Link to="/research" className="fluent-button-secondary">
                  <FlaskConical className="h-4 w-4" />
                  {t('hero.cta_research')}
                </Link>
                <button className="fluent-button-subtle">
                  <FileDown className="h-4 w-4" />
                  {t('hero.cta_cv')}
                </button>
              </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0, 0, 0, 1] }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/20 via-transparent to-blue-400/20 blur-2xl" />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-card shadow-fluent-16">
                  <ImagePlaceholder
                    src={avatarImg}
                    alt="Trần Võ Hoàng Nguyên — Profile"
                    aspectRatio="square"
                    className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                    placeholderIcon={
                      <User className="h-16 w-16 text-text-disabled" />
                    }
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-surface-card px-4 py-2 shadow-fluent-8"
                >
                  <p className="text-caption1 font-semibold text-brand">
                    🎓 Thủ khoa 2026
                  </p>
                </motion.div>

                {/* Second floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-3 -top-3 rounded-xl border border-border bg-surface-card px-4 py-2 shadow-fluent-8"
                >
                  <p className="text-caption1 font-semibold text-amber-600 dark:text-amber-400">
                    🏆 MOS Champion
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATISTICS SECTION                                            */}
      {/* ============================================================ */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <Statistics items={statistics} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED ACHIEVEMENTS                                         */}
      {/* ============================================================ */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionTitle
            title={t('sections.featured_achievements')}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAchievements.map((item, index) => (
              <AchievementCard
                key={item.id}
                achievement={item}
                index={index}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/achievements"
              className="fluent-button-secondary"
            >
              {t('sections.view_all')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED RESEARCH                                             */}
      {/* ============================================================ */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('sections.featured_research')}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResearch.map((item, index) => (
              <ResearchCard
                key={item.id}
                research={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA SECTION                                                   */}
      {/* ============================================================ */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0, 0, 0, 1] }}
          >
            <h2 className="mb-4 text-title1 font-bold text-text-primary sm:text-hero-lg">
              {t('contact.page_subtitle')}
            </h2>
            <p className="mb-8 text-body1 text-text-secondary">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="fluent-button-primary">
                {t('nav.contact')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="fluent-button-secondary">
                {t('hero.cta_about')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
