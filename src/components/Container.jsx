import React from 'react'

/**
 * Reusable layout container ensuring consistent max-width,
 * centered alignment, and horizontal padding across mobile (390px)
 * and desktop (1440px) without horizontal overflow.
 */
export default function Container({ 
  children, 
  className = '', 
  size = 'default', // 'narrow' | 'default' | 'wide' | 'full'
  as: Component = 'div',
  ...props 
}) {
  const sizeClasses = {
    narrow: 'max-w-3xl',
    default: 'max-w-5xl',
    wide: 'max-w-6xl',
    full: 'max-w-7xl',
  }

  return (
    <Component 
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size] || sizeClasses.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
