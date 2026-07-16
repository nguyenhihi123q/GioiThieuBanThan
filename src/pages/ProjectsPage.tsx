import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Code } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { cn } from '@/lib/utils'
import type { Project, ProjectCategory } from '@/types'

const categories: (ProjectCategory | 'all')[] = [
  'all',
  'ai',
  'edtech',
  'programming',
  'tech-solutions',
  'teaching-innovation',
]

/* Projects derived from research and skills in the markdown */
const projects: Project[] = [
  {
    id: 'ai-bot-learning',
    title: 'AI Bot Hỗ trợ Học tập Tin học Lớp 11',
    description:
      'Ứng dụng trí tuệ nhân tạo xây dựng chatbot hỗ trợ học sinh lớp 11 học tập môn Tin học, cá nhân hóa trải nghiệm học tập.',
    category: 'ai',
    techStack: ['Python', 'AI/ML', 'Chatbot', 'Web'],
    features: [
      'AI Chatbot hỏi đáp tự động',
      'Cá nhân hóa nội dung học tập',
      'Theo dõi tiến độ học sinh',
    ],
    results: 'Đạt Giải Nhì nghiên cứu khoa học sinh viên',
  },
  {
    id: 'bright-learning-buddy',
    title: 'Bright Learning Buddy',
    description:
      'Nền tảng hỗ trợ học tập cá nhân hóa sử dụng AI và phân tích dữ liệu để tối ưu hóa trải nghiệm học tập.',
    category: 'edtech',
    techStack: ['AI', 'Machine Learning', 'Web Platform', 'Data Analytics'],
    features: [
      'Phân tích dữ liệu học tập',
      'Đề xuất nội dung cá nhân hóa',
      'Dashboard theo dõi tiến trình',
    ],
    results: 'Đạt Giải Khuyến khích khoa học sinh viên',
  },
  {
    id: 'moodle-personalization',
    title: 'Hệ thống cá nhân hóa MOODLE',
    description:
      'Giải pháp toán học - công nghệ cho hệ thống cá nhân hóa học tập trên nền tảng MOODLE.',
    category: 'tech-solutions',
    techStack: ['MOODLE', 'Learning Analytics', 'Mathematics', 'Algorithm'],
    features: [
      'Thuật toán cá nhân hóa học tập',
      'Tích hợp MOODLE',
      'Phân tích hành vi người dùng',
    ],
    results: 'Đạt Giải Khuyến khích khoa học sinh viên',
  },
  {
    id: 'digital-teaching-app',
    title: 'Ứng dụng số trong dạy học',
    description:
      'Phát triển ứng dụng số hỗ trợ giảng dạy và giáo dục, đạt giải nhất cuộc thi cấp trường.',
    category: 'teaching-innovation',
    techStack: ['Web', 'Education Technology', 'Digital Tools'],
    features: [
      'Công cụ giảng dạy số',
      'Quản lý lớp học',
      'Tương tác sinh viên',
    ],
    results: 'Giải nhất cấp Trường ĐHSP Huế',
  },
  {
    id: 'digital-transformation',
    title: 'Dự án Chuyển đổi số Huế',
    description:
      'Tập huấn và triển khai chuyển đổi số cho các đơn vị trên địa bàn thành phố Huế.',
    category: 'tech-solutions',
    techStack: ['Microsoft Office', 'Digital Tools', 'Cloud', 'Training'],
    features: [
      'Đào tạo tin học văn phòng',
      'Triển khai công cụ số',
      'Hướng dẫn quy trình số hóa',
    ],
    results: 'Hỗ trợ nhiều đơn vị chuyển đổi số thành công',
  },
]

export default function ProjectsPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | 'all'
  >('all')

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('projects.page_title')}
            subtitle={t('projects.page_subtitle')}
          />
        </div>
      </section>

      {/* Projects */}
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
                {t(`projects.categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
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
                  {/* Thumbnail */}
                  <div className="-mx-6 -mt-6 mb-4">
                    <ImagePlaceholder
                      src={project.thumbnail}
                      alt={project.title}
                      aspectRatio="video"
                      placeholderIcon={<Code className="h-10 w-10" />}
                      className="rounded-t-lg rounded-b-none"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-2 inline-flex self-start rounded-full bg-brand/10 px-2.5 py-0.5 text-caption1 font-semibold text-brand">
                    {t(`projects.categories.${project.category}`)}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-subtitle2 font-semibold text-text-primary transition-colors group-hover:text-brand">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-body2 leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface-tertiary px-2 py-0.5 text-caption1 font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <p className="mb-4 text-caption1 font-medium text-status-success">
                    ✓ {project.results}
                  </p>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fluent-button-subtle text-caption1"
                      >
                        <GitFork className="h-3.5 w-3.5" />
                        {t('projects.source_code')}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fluent-button-subtle text-caption1"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t('projects.demo')}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
