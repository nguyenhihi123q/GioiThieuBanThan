import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  className?: string
  placeholderIcon?: React.ReactNode
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
}

/**
 * Image component with graceful fallback.
 * Shows a styled placeholder when the image is missing or fails to load.
 * This ensures the layout never breaks with missing images.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  placeholderIcon,
  aspectRatio = 'video',
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  }

  if (!src || hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-lg border border-border bg-surface-tertiary',
          aspectClasses[aspectRatio],
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-text-disabled">
          {placeholderIcon || <ImageOff className="h-8 w-8" />}
          <span className="text-caption1">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-surface-tertiary',
        aspectClasses[aspectRatio],
        className
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-brand" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-normal',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}
