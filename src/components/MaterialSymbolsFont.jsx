'use client';

import { useEffect } from 'react';

/**
 * Optimized Material Symbols font loading component
 * Loads font asynchronously without blocking render
 */
export default function MaterialSymbolsFont() {
  useEffect(() => {
    // Preconnect to Google Fonts domains
    const preconnectLink1 = document.createElement('link');
    preconnectLink1.rel = 'preconnect';
    preconnectLink1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectLink1);

    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://fonts.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectLink2);

    // Load Material Symbols font asynchronously
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';
    fontLink.media = 'print';
    fontLink.onload = function () {
      this.media = 'all';
    };

    // Fallback for browsers without JS
    const noscript = document.createElement('noscript');
    const fallbackLink = fontLink.cloneNode();
    fallbackLink.media = 'all';
    noscript.appendChild(fallbackLink);

    document.head.appendChild(fontLink);
    document.head.appendChild(noscript);

    return () => {
      // Cleanup on unmount
      if (preconnectLink1.parentNode) {
        preconnectLink1.parentNode.removeChild(preconnectLink1);
      }
      if (preconnectLink2.parentNode) {
        preconnectLink2.parentNode.removeChild(preconnectLink2);
      }
      if (fontLink.parentNode) {
        fontLink.parentNode.removeChild(fontLink);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, []);

  return null;
}
