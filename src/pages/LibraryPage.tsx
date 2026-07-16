import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, Download, BookOpen, FileText, Presentation, File } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { cn } from '@/lib/utils'
import type { LibraryResource, ResourceCategory } from '@/types'

const categories: (ResourceCategory | 'all')[] = [
  'all',
  'book',
  'teaching-material',
  'slide',
  'document',
  'pdf',
]

const categoryIcons: Record<ResourceCategory, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  'teaching-material': FileText,
  slide: Presentation,
  document: FileText,
  pdf: File,
}

/* Placeholder resources — to be replaced with real data */
const resources: LibraryResource[] = [
  {
    id: 'resource-1',
    title: 'Giáo trình Tin học 11',
    description: 'Tài liệu giảng dạy Tin học lớp 11 theo chương trình mới.',
    category: 'teaching-material',
  },
  {
    id: 'resource-2',
    title: 'Slide bài giảng AI cơ bản',
    description: 'Bộ slide bài giảng về trí tuệ nhân tạo dành cho học sinh THPT.',
    category: 'slide',
  },
  {
    id: 'resource-3',
    title: 'Tài liệu Python cơ bản',
    description: 'Hướng dẫn lập trình Python từ cơ bản đến nâng cao.',
    category: 'document',
  },
  {
    id: 'resource-4',
    title: 'Hướng dẫn sử dụng Microsoft Office',
    description: 'Tài liệu hướng dẫn Word, Excel, PowerPoint cho người mới bắt đầu.',
    category: 'pdf',
  },
  {
    id: 'resource-5',
    title: 'Sách Chuyển đổi số trong Giáo dục',
    description: 'Tổng hợp kiến thức về chuyển đổi số trong lĩnh vực giáo dục.',
    category: 'book',
  },
  {
    id: 'resource-6',
    title: 'Template bài giảng tương tác',
    description: 'Mẫu bài giảng tương tác cho giáo viên Tin học.',
    category: 'teaching-material',
  },
]

export default function LibraryPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('library.page_title')}
            subtitle={t('library.page_subtitle')}
          />
        </div>
      </section>

      {/* Library */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Search */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
              <input
                type="text"
                placeholder={t('sections.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-body1 text-text-primary placeholder:text-text-tertiary focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                aria-label="Search resources"
              />
            </div>
          </div>

          {/* Categories */}
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
                {t(`library.categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource, index) => {
              const Icon = categoryIcons[resource.category] || FileText
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="fluent-card flex h-full flex-col transition-all duration-normal hover:-translate-y-1 hover:shadow-fluent-16">
                    <div className="-mx-6 -mt-6 mb-4">
                      <ImagePlaceholder
                        src={resource.thumbnail}
                        alt={resource.title}
                        aspectRatio="video"
                        placeholderIcon={<Icon className="h-10 w-10" />}
                        className="rounded-t-lg rounded-b-none"
                      />
                    </div>

                    <div className="mb-2 inline-flex self-start rounded-full bg-brand/10 px-2.5 py-0.5 text-caption1 font-semibold text-brand">
                      {t(`library.categories.${resource.category}`)}
                    </div>

                    <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary transition-colors group-hover:text-brand">
                      {resource.title}
                    </h3>

                    <p className="mb-4 flex-1 text-body2 leading-relaxed text-text-secondary">
                      {resource.description}
                    </p>

                    <button className="fluent-button-secondary w-full text-caption1">
                      <Download className="h-3.5 w-3.5" />
                      {t('sections.download')}
                    </button>
                  </div>
                </motion.div>
              )
            })}
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
