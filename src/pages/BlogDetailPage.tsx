import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import { blogPosts } from '@/constants/data'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { personalInfo } from '@/constants/data'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="container-narrow py-20 text-center">
        <h2 className="text-title1 font-bold text-text-primary mb-4">
          {t('sections.no_results')}
        </h2>
        <button
          onClick={() => navigate('/blog')}
          className="fluent-button-primary inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('common.back')}
        </button>
      </div>
    )
  }

  // Find related posts in the same category (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen pb-16">
      {/* Header Banner */}
      <section className="bg-surface-secondary py-12 border-b border-border">
        <div className="container-narrow">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-body2 font-semibold text-brand hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')}
          </Link>

          <div className="flex items-center gap-3 text-caption1 text-text-tertiary mb-3">
            <span className="font-medium text-brand bg-brand-light dark:bg-brand-dark/20 dark:text-blue-300 px-2 py-0.5 rounded">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime} {t('blog.reading_time')}
            </span>
          </div>

          <h1 className="text-title1 font-bold text-text-primary leading-tight sm:text-hero-lg mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-body2 text-text-secondary">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              N
            </div>
            <div>
              <p className="font-medium text-text-primary">{personalInfo.name}</p>
              <p className="text-caption1 text-text-tertiary">{t('footer.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-narrow py-12">
        <div className="fluent-card bg-surface-card p-6 sm:p-10">
          {/* Cover image if available */}
          <div className="mb-8">
            <ImagePlaceholder
              src={post.coverImage}
              alt={post.title}
              aspectRatio="video"
              className="rounded-xl"
            />
          </div>

          {/* Render Markdown Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-text-primary leading-relaxed space-y-6">
            <ReactMarkdown
              components={{
                h1: ({ node: _node, ...props }) => <h1 className="text-title1 font-bold text-text-primary mt-8 mb-4 border-b border-border pb-2" {...props} />,
                h2: ({ node: _node, ...props }) => <h2 className="text-title2 font-bold text-text-primary mt-6 mb-3" {...props} />,
                h3: ({ node: _node, ...props }) => <h3 className="text-title3 font-bold text-text-primary mt-4 mb-2" {...props} />,
                p: ({ node: _node, ...props }) => <p className="text-body1 text-text-secondary leading-relaxed mb-4" {...props} />,
                ul: ({ node: _node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-text-secondary" {...props} />,
                ol: ({ node: _node, ...props }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-text-secondary" {...props} />,
                li: ({ node: _node, ...props }) => <li className="text-body1 text-text-secondary" {...props} />,
                blockquote: ({ node: _node, ...props }) => (
                  <blockquote className="border-l-4 border-brand bg-surface-secondary px-4 py-3 italic rounded text-text-secondary mb-4" {...props} />
                ),
                code: ({ node: _node, ...props }) => (
                  <code className="bg-surface-tertiary text-text-primary px-1.5 py-0.5 rounded font-mono text-body2" {...props} />
                ),
                pre: ({ node: _node, ...props }) => (
                  <pre className="bg-surface-tertiary text-text-primary p-4 rounded-lg overflow-x-auto font-mono text-body2 border border-border mb-4" {...props} />
                ),
                hr: ({ node: _node, ...props }) => <hr className="border-border my-6" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-surface-tertiary px-3 py-1 text-caption1 font-medium text-text-secondary"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-secondary py-12 border-t border-border">
          <div className="container-narrow">
            <h3 className="text-title3 font-bold text-text-primary mb-6">
              {t('blog.related_posts')}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/blog/${rPost.slug}`}
                  className="fluent-card bg-surface-card hover:-translate-y-0.5 hover:shadow-fluent-8 transition-all duration-fast"
                >
                  <p className="text-caption1 text-brand font-medium mb-1">
                    {rPost.category}
                  </p>
                  <h4 className="text-body1 font-semibold text-text-primary mb-2 line-clamp-2">
                    {rPost.title}
                  </h4>
                  <p className="text-caption1 text-text-tertiary">
                    {rPost.publishDate}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
