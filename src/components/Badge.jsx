import React from 'react'

/**
 * Reusable Badge / Eyebrow component.
 * Used for demo labels ("Interactive demo · Example workspace"), status indicators, and section tags.
 */
export default function Badge({
  children,
  variant = 'signal', // 'signal' | 'neutral' | 'success' | 'warning' | 'outline'
  isMono = true,
  dot = true,
  className = '',
  ...props
}) {
  const variantStyles = {
    signal: 'bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]',
    neutral: 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    success: 'bg-[var(--color-status-success-subtle)] text-[var(--color-status-success)] border border-emerald-200',
    warning: 'bg-[var(--color-status-warning-subtle)] text-[var(--color-status-warning)] border border-amber-200',
    outline: 'bg-transparent text-[var(--text-muted)] border border-[var(--border-subtle)]',
  }

  const dotStyles = {
    signal: 'bg-[var(--accent-signal)]',
    neutral: 'bg-[var(--text-muted)]',
    success: 'bg-emerald-600',
    warning: 'bg-amber-600',
    outline: 'bg-[var(--text-faint)]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs leading-5 font-medium select-none ${isMono ? 'font-mono tracking-tight' : 'tracking-normal'} ${variantStyles[variant] || variantStyles.neutral} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {variant === 'signal' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-signal)] opacity-75" />
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotStyles[variant] || dotStyles.neutral}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  )
}
