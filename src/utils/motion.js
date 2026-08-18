/**
 * Motion System for SIGNAL
 * 
 * Restrained, purposeful animation presets respecting prefers-reduced-motion.
 * Avoids bouncy spring physics in favor of crisp, editorial transitions.
 */

export const TRANSITIONS = {
  instant: { duration: 0.1, ease: [0.16, 1, 0.3, 1] },
  quick: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  smooth: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  editorial: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: TRANSITIONS.quick 
  }
}

export const FADE_UP = {
  hidden: { opacity: 0, y: 8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: TRANSITIONS.smooth 
  }
}

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
}
