import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Clock, Tag, ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { cn } from '@/lib/utils'
import { blogPosts } from '@/constants/data'

const allCategories = ['all', ...new Set(blogPosts.map((p) => p.category))]

export default function BlogPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('blog.page_title')}
            subtitle={t('blog.page_subtitle')}
          />
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Main content */}
            <div>
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
                  <input
                    type="text"
                    placeholder={t('sections.search_placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-body1 text-text-primary placeholder:text-text-tertiary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    aria-label="Search blog posts"
                  />
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {filtered.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="fluent-card flex flex-col gap-4 sm:flex-row transition-all hover:-translate-y-0.5 hover:shadow-fluent-16">
                      {/* Thumbnail */}
                      <div className="w-full flex-shrink-0 sm:w-48">
                        <ImagePlaceholder
                          src={post.coverImage}
                          alt={post.title}
                          aspectRatio="video"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        <div className="mb-2 flex items-center gap-3 text-caption1 text-text-tertiary">
                          <span className="font-medium text-brand">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.publishDate}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} {t('blog.reading_time')}
                          </span>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                          <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary transition-colors group-hover:text-brand">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="mb-3 flex-1 text-body2 leading-relaxed text-text-secondary">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-3">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="flex items-center gap-1 rounded-md bg-surface-tertiary px-2 py-0.5 text-caption2 font-medium text-text-tertiary"
                              >
                                <Tag className="h-2.5 w-2.5" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="ml-auto flex items-center gap-1 text-body2 font-semibold text-brand transition-all duration-fast hover:gap-2"
                          >
                            {t('sections.read_more')}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="py-20 text-center text-body1 text-text-tertiary">
                  {t('sections.no_results')}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Categories */}
              <div className="fluent-card">
                <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
                  {t('blog.categories')}
                </h3>
                <div className="space-y-1">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        'w-full rounded-md px-3 py-2 text-left text-body2 font-medium transition-all duration-fast',
                        activeCategory === cat
                          ? 'bg-brand/10 text-brand'
                          : 'text-text-secondary hover:bg-surface-tertiary hover:text-text-primary'
                      )}
                    >
                      {cat === 'all' ? t('sections.all') : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="fluent-card">
                <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
                  {t('blog.tags')}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[...new Set(blogPosts.flatMap((p) => p.tags))].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-tertiary px-2.5 py-1 text-caption1 font-medium text-text-secondary transition-colors hover:bg-brand/10 hover:text-brand cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
