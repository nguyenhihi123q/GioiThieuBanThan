import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { cn } from '@/lib/utils'
import type { GalleryItem, GalleryCategory } from '@/types'

const categories: (GalleryCategory | 'all')[] = [
  'all',
  'teaching',
  'research',
  'events',
  'community',
  'certificates',
]

/* Placeholder gallery items */
const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Giảng dạy trên lớp', category: 'teaching', image: '', alt: 'Teaching in classroom' },
  { id: 'g2', title: 'Thực tập sư phạm', category: 'teaching', image: '', alt: 'Teaching practicum' },
  { id: 'g3', title: 'Nghiên cứu AI Bot', category: 'research', image: '', alt: 'AI Bot Research' },
  { id: 'g4', title: 'Nghiên cứu MOODLE', category: 'research', image: '', alt: 'MOODLE Research' },
  { id: 'g5', title: 'Giải MOS 2024', category: 'events', image: '', alt: 'MOS Championship 2024' },
  { id: 'g6', title: 'Sao Tháng Giêng', category: 'events', image: '', alt: 'January Star Award' },
  { id: 'g7', title: 'Tập huấn chuyển đổi số', category: 'community', image: '', alt: 'Digital Transformation Training' },
  { id: 'g8', title: 'Hoạt động Đoàn', category: 'community', image: '', alt: 'Youth Union Activities' },
  { id: 'g9', title: 'Chứng nhận MOS', category: 'certificates', image: '', alt: 'MOS Certificate' },
  { id: 'g10', title: 'Chứng nhận SV5T', category: 'certificates', image: '', alt: '5-Good Student Certificate' },
  { id: 'g11', title: 'Hội nghị khoa học', category: 'research', image: '', alt: 'Scientific Conference' },
  { id: 'g12', title: 'Lễ tốt nghiệp', category: 'events', image: '', alt: 'Graduation Ceremony' },
]

export default function GalleryPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('gallery.page_title')}
            subtitle={t('gallery.page_subtitle')}
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filter */}
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
                {t(`gallery.categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="mb-4 cursor-pointer break-inside-avoid"
                onClick={() => setSelectedItem(item)}
              >
                <div className="group overflow-hidden rounded-lg border border-border bg-surface-card transition-all duration-normal hover:shadow-fluent-8">
                  <ImagePlaceholder
                    src={item.image}
                    alt={item.alt}
                    aspectRatio={index % 3 === 0 ? 'portrait' : index % 2 === 0 ? 'square' : 'video'}
                  />
                  <div className="p-3">
                    <p className="text-body2 font-medium text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-caption1 text-text-tertiary">
                      {t(`gallery.categories.${item.category}`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-3xl overflow-hidden rounded-2xl bg-surface shadow-fluent-64"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label={t('common.close')}
              >
                <X className="h-5 w-5" />
              </button>

              <ImagePlaceholder
                src={selectedItem.image}
                alt={selectedItem.alt}
                aspectRatio="auto"
                className="max-h-[60vh] w-full"
              />

              <div className="p-4">
                <h3 className="text-subtitle2 font-semibold text-text-primary">
                  {selectedItem.title}
                </h3>
                <p className="text-body2 text-text-secondary">
                  {t(`gallery.categories.${selectedItem.category}`)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
