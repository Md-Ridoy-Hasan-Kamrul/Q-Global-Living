'use client';

import { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * TransitionWrapper Component - Production Grade
 *
 * Prevents visual "shaking" during language switches by:
 * 1. Detecting transition state from React 18 useTransition
 * 2. Applying smooth opacity transitions
 * 3. Preserving layout integrity with GPU acceleration
 * 4. Zero layout shift (CLS = 0)
 *
 * Used by: All major page sections
 * Performance: Optimized with React.memo, GPU-accelerated
 */
function TransitionWrapper({ children, className = '' }) {
  const { isPending } = useLanguage();

  return (
    <div
      className={`language-transition ${className}`}
      style={{
        opacity: isPending ? 0.97 : 1,
        transition: 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'translateZ(0)', // Force GPU acceleration
        willChange: isPending ? 'opacity' : 'auto',
      }}
      data-transitioning={isPending}
    >
      {children}
    </div>
  );
}

export default memo(TransitionWrapper);
