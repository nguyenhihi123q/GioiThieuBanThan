import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Cpu,
  Sparkles,
  GraduationCap,
  Award,
  Users,
  Code,
} from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { Timeline } from '@/components/sections/Timeline'
import { personalInfo, skills } from '@/constants/data'
import type { TimelineItem } from '@/types'
import aboutProfileImg from '@/assets/homepage/about-profile.jpg'
import teachingPhilosophyImg from '@/assets/homepage/teaching-philosophy.jpg'
import techPhilosophyImg from '@/assets/homepage/tech-philosophy.jpg'

const coreValues = [
  { icon: Sparkles, label: 'Đổi mới sáng tạo', labelEn: 'Innovation' },
  { icon: Heart, label: 'Tận tâm', labelEn: 'Dedication' },
  { icon: Users, label: 'Hợp tác', labelEn: 'Collaboration' },
  { icon: BookOpen, label: 'Học hỏi suốt đời', labelEn: 'Lifelong Learning' },
  { icon: Code, label: 'Ứng dụng công nghệ', labelEn: 'Technology-driven' },
  { icon: GraduationCap, label: 'Chuyên môn cao', labelEn: 'Excellence' },
]

const careerTimeline: TimelineItem[] = [
  {
    id: 'university-start',
    date: '2022',
    title: 'Bắt đầu Đại học',
    description:
      'Nhập học ngành Sư phạm Tin học tại Đại học Sư phạm, Đại học Huế.',
  },
  {
    id: 'scholarship-streak',
    date: '2022 - 2026',
    title: 'Chuỗi 8 kỳ học bổng',
    description:
      'Đạt học bổng Khuyến khích học tập liên tục 8/8 kỳ trong suốt 4 năm đại học.',
  },
  {
    id: 'mos-champion',
    date: '2024',
    title: 'Vô địch MOS Tỉnh',
    description:
      'Giải nhất cuộc thi vô địch tin học văn phòng MOS Tỉnh Thừa Thiên Huế.',
  },
  {
    id: 'sao-thang-gieng',
    date: '2024',
    title: 'Sao Tháng Giêng',
    description:
      'Đạt danh hiệu Sao Tháng Giêng 2 năm liên tiếp cấp Đại học Huế.',
  },
  {
    id: 'deputy-secretary',
    date: '2024 - 2025',
    title: 'Phó Bí thư LCĐ Khoa Tin học',
    description:
      'Được tín nhiệm giữ vị trí Phó Bí thư Liên chi đoàn Khoa Tin học.',
  },
  {
    id: 'party-member',
    date: '22/09/2025',
    title: 'Đảng viên',
    description:
      'Vinh dự đứng vào hàng ngũ của Đảng Cộng sản Việt Nam.',
  },
  {
    id: 'vallet-scholarship',
    date: '2025',
    title: 'Học bổng Vallet',
    description: 'Đạt Học bổng Vallet năm 2025.',
  },
  {
    id: 'valedictorian',
    date: '2026',
    title: 'Thủ khoa đầu ra',
    description:
      'Tốt nghiệp Thủ khoa ngành Sư phạm Tin học, Đại học Sư phạm Huế.',
  },
  {
    id: 'english-degree-2',
    date: '09/2026',
    title: 'Văn bằng 2 Ngôn ngữ Anh',
    description:
      'Học văn bằng 2 ngành Ngôn ngữ Anh tại Trường Đại học Ngoại ngữ, Đại học Huế để nâng cao năng lực ngoại ngữ và hội nhập quốc tế.',
  },
  {
    id: 'master-information-systems',
    date: '09/2026',
    title: 'Thạc sĩ Hệ thống thông tin',
    description:
      'Theo học chương trình Thạc sĩ chuyên ngành Hệ thống thông tin tại Trường Đại học Sư phạm, Đại học Huế nhằm nghiên cứu chuyên sâu về công nghệ và hệ thống dữ liệu.',
  },
]

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor: Cpu,
  Globe: Eye,
  FileSpreadsheet: Award,
  Code: Code,
  Users: Users,
}

export default function AboutPage() {
  const { t, i18n } = useTranslation()
  const isVi = i18n.language === 'vi'

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('about.page_title')}
          />
        </div>
      </section>

      {/* Who Am I */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0, 0, 0, 1] }}
            >
              <h2 className="mb-4 text-title2 font-bold text-text-primary">
                {t('about.who_am_i')}
              </h2>
              <p className="mb-6 text-body1 leading-relaxed text-text-secondary">
                {t('about.who_am_i_content')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-surface-secondary p-4">
                  <p className="text-caption1 text-text-tertiary">Email</p>
                  <p className="text-body2 font-medium text-text-primary break-all">
                    {personalInfo.email}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface-secondary p-4">
                  <p className="text-caption1 text-text-tertiary">
                    {isVi ? 'Địa chỉ' : 'Location'}
                  </p>
                  <p className="text-body2 font-medium text-text-primary">
                    {personalInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0, 0, 0, 1] }}
            >
              <ImagePlaceholder
                src={aboutProfileImg}
                alt="Trần Võ Hoàng Nguyên"
                aspectRatio="square"
                className="mx-auto max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0, 0, 0, 1] }}
              className="fluent-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-title3 font-semibold text-text-primary">
                {t('about.mission')}
              </h3>
              <p className="text-body1 leading-relaxed text-text-secondary">
                {t('about.mission_content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0, 0, 0, 1] }}
              className="fluent-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-title3 font-semibold text-text-primary">
                {t('about.vision')}
              </h3>
              <p className="text-body1 leading-relaxed text-text-secondary">
                {t('about.vision_content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionTitle title={t('about.core_values')} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {coreValues.map(({ icon: Icon, label, labelEn }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0, 0, 0, 1],
                }}
                className="fluent-card flex flex-col items-center p-5 text-center"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-body2 font-medium text-text-primary">
                  {isVi ? label : labelEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Tech Philosophy */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="fluent-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-title3 font-semibold text-text-primary">
                {t('about.teaching_philosophy')}
              </h3>
              <p className="text-body1 leading-relaxed text-text-secondary">
                {t('about.teaching_philosophy_content')}
              </p>
              <div className="mt-4">
                <ImagePlaceholder
                  src={teachingPhilosophyImg}
                  alt="Teaching Philosophy"
                  aspectRatio="video"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="fluent-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-title3 font-semibold text-text-primary">
                {t('about.tech_philosophy')}
              </h3>
              <p className="text-body1 leading-relaxed text-text-secondary">
                {t('about.tech_philosophy_content')}
              </p>
              <div className="mt-4">
                <ImagePlaceholder
                  src={techPhilosophyImg}
                  alt="Technology Philosophy"
                  aspectRatio="video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionTitle title={t('about.professional_summary')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.icon] || Code
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="fluent-card"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-subtitle2 font-semibold text-text-primary">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-body2 text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle title={t('about.career_journey')} />
          <Timeline items={careerTimeline} />
        </div>
      </section>
    </>
  )
}
