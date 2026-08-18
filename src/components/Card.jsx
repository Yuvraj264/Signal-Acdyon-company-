import React from 'react'

/**
 * Reusable Card component for SIGNAL design system.
 * Restrained borders, crisp surface, minimal elevation.
 */
export default function Card({
  children,
  className = '',
  variant = 'surface', // 'surface' | 'subtle' | 'outline' | 'elevated'
  interactive = false,
  as: Component = 'div',
  ...props
}) {
  const variantStyles = {
    surface: 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs',
    subtle: 'bg-[var(--bg-subtle)] border border-[var(--border-subtle)]',
    outline: 'bg-transparent border border-[var(--border-subtle)]',
    elevated: 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm',
  }

  const interactiveStyles = interactive
    ? 'transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-sm cursor-pointer'
    : ''

  return (
    <Component
      className={`rounded-lg p-5 sm:p-6 ${variantStyles[variant] || variantStyles.surface} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
