import React from 'react'
import Badge from './Badge'

/**
 * Reusable Section Heading component.
 * Ensures consistent editorial typography rhythm and max-width.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowVariant = 'signal',
  title,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
  ...props
}) {
  const isCenter = align === 'center'

  return (
    <div 
      className={`space-y-3 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}
      {...props}
    >
      {eyebrow && (
        <div className={isCenter ? 'flex justify-center' : ''}>
          {typeof eyebrow === 'string' ? (
            <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
          ) : (
            eyebrow
          )}
        </div>
      )}
      
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--text-primary)] text-balance-editorial">
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance-editorial ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
