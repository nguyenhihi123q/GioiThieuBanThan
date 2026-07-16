import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { personalInfo, socialLinks } from '@/constants/data'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(1, 'name_required'),
  email: z.string().min(1, 'email_required').email('email_invalid'),
  subject: z.string().min(1, 'subject_required'),
  message: z.string().min(1, 'message_required'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactForm) => {
    // Simulate submission delay (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-surface-secondary">
        <div className="container-wide">
          <SectionTitle
            title={t('contact.page_title')}
            subtitle={t('contact.page_subtitle')}
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-title2 font-bold text-text-primary">
                {t('contact.info')}
              </h2>

              <div className="mb-8 space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="fluent-card flex items-center gap-4 transition-all hover:-translate-y-0.5 hover:shadow-fluent-16"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-caption1 text-text-tertiary">Email</p>
                    <p className="text-body1 font-medium text-text-primary">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="fluent-card flex items-center gap-4 transition-all hover:-translate-y-0.5 hover:shadow-fluent-16"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-caption1 text-text-tertiary">
                      Phone
                    </p>
                    <p className="text-body1 font-medium text-text-primary">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="fluent-card flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-caption1 text-text-tertiary">
                      Address
                    </p>
                    <p className="text-body1 font-medium text-text-primary">
                      {personalInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-subtitle2 font-semibold text-text-primary">
                  Social
                </h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target={link.url.startsWith('http') || link.url.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-1.5 rounded-xl border border-border px-3 text-body2 font-medium text-text-secondary transition-all duration-fast hover:border-brand hover:bg-brand/10 hover:text-brand"
                      aria-label={link.platform}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <div className="flex aspect-video items-center justify-center bg-surface-tertiary">
                  <div className="text-center text-text-disabled">
                    <MapPin className="mx-auto mb-2 h-8 w-8" />
                    <p className="text-body2">Google Maps</p>
                    <p className="text-caption1">Kim Long, Huế</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="fluent-card">
                <h2 className="mb-6 text-title3 font-semibold text-text-primary">
                  {t('contact.form_title')}
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-800 dark:bg-emerald-900/20"
                  >
                    <CheckCircle className="h-5 w-5 text-status-success" />
                    <p className="text-body2 font-medium text-emerald-700 dark:text-emerald-300">
                      {t('contact.success')}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-body2 font-medium text-text-primary"
                    >
                      {t('contact.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register('name')}
                      className={cn(
                        'w-full rounded-lg border bg-surface px-4 py-2.5 text-body1 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors',
                        errors.name
                          ? 'border-status-error focus:border-status-error'
                          : 'border-border focus:border-brand'
                      )}
                      placeholder={t('contact.name')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-caption1 text-status-error">
                        {t(`contact.${errors.name.message}`)}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-body2 font-medium text-text-primary"
                    >
                      {t('contact.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register('email')}
                      className={cn(
                        'w-full rounded-lg border bg-surface px-4 py-2.5 text-body1 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors',
                        errors.email
                          ? 'border-status-error focus:border-status-error'
                          : 'border-border focus:border-brand'
                      )}
                      placeholder={t('contact.email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-caption1 text-status-error">
                        {t(`contact.${errors.email.message}`)}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-body2 font-medium text-text-primary"
                    >
                      {t('contact.subject')}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      {...register('subject')}
                      className={cn(
                        'w-full rounded-lg border bg-surface px-4 py-2.5 text-body1 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors',
                        errors.subject
                          ? 'border-status-error focus:border-status-error'
                          : 'border-border focus:border-brand'
                      )}
                      placeholder={t('contact.subject')}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-caption1 text-status-error">
                        {t(`contact.${errors.subject.message}`)}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-body2 font-medium text-text-primary"
                    >
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register('message')}
                      className={cn(
                        'w-full resize-none rounded-lg border bg-surface px-4 py-2.5 text-body1 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors',
                        errors.message
                          ? 'border-status-error focus:border-status-error'
                          : 'border-border focus:border-brand'
                      )}
                      placeholder={t('contact.message')}
                    />
                    {errors.message && (
                      <p className="mt-1 text-caption1 text-status-error">
                        {t(`contact.${errors.message.message}`)}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="fluent-button-primary w-full"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {t('contact.send')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
