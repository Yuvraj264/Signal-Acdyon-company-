import React from 'react'

/**
 * Reusable Button component for SIGNAL design system.
 * High-contrast, restrained motion, accessible focus states.
 */
export default function Button({
  children,
  variant = 'primary', // 'primary' | 'accent' | 'secondary' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = '',
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  const baseStyles = 'group inline-flex items-center justify-center font-medium tracking-tight transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-signal)]'

  const variantStyles = {
    primary: 'bg-[var(--text-primary)] text-white hover:bg-[#2A2A28] active:bg-[#000000] border border-transparent shadow-xs',
    accent: 'bg-[var(--accent-signal)] text-white hover:bg-[var(--accent-signal-hover)] active:bg-[#CC3E00] border border-transparent shadow-xs',
    secondary: 'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-subtle)] active:bg-[var(--bg-base)] shadow-xs',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] active:bg-[var(--border-subtle)]',
  }

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-4 py-2 rounded-md gap-2',
    lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5 font-medium',
  }

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`}
      disabled={disabled}
      {...props}
    >
      {IconLeft && (
        <IconLeft className={`transition-transform duration-150 group-hover:-translate-x-0.5 ${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      )}
      <span>{children}</span>
      {IconRight && (
        <IconRight className={`transition-transform duration-150 group-hover:translate-x-0.5 ${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      )}
    </Component>
  )
}
