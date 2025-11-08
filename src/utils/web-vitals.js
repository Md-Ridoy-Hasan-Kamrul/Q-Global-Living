/**
 * Production-grade Web Vitals Monitoring
 *
 * Features:
 * - Monitor Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
 * - Send metrics to analytics
 * - Performance budgets and warnings
 * - Real User Monitoring (RUM)
 */

/**
 * Report Web Vitals to analytics
 * @param {Object} metric - Web Vital metric
 */
export function reportWebVitals(metric) {
  const { name, value, id, rating } = metric;

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      rating,
      id,
    });
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', name, {
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_id: id,
        metric_value: value,
        metric_delta: metric.delta,
        metric_rating: rating,
      });
    }

    // Custom analytics endpoint
    if (navigator.sendBeacon) {
      const body = JSON.stringify({
        name,
        value,
        rating,
        id,
        url: window.location.href,
        timestamp: Date.now(),
      });

      navigator.sendBeacon('/api/analytics/vitals', body);
    }
  }

  // Performance budgets - warn if exceeded
  checkPerformanceBudget(name, value, rating);
}

/**
 * Check if metric exceeds performance budget
 * @param {string} name - Metric name
 * @param {number} value - Metric value
 * @param {string} rating - Metric rating
 */
function checkPerformanceBudget(name, value, rating) {
  const budgets = {
    FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
    LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
    FID: { good: 100, poor: 300 }, // First Input Delay
    INP: { good: 200, poor: 500 }, // Interaction to Next Paint
    CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
    TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  };

  const budget = budgets[name];
  if (!budget) return;

  if (rating === 'poor' && process.env.NODE_ENV === 'development') {
    console.warn(
      `⚠️ ${name} exceeded performance budget:`,
      `${value > 1 ? Math.round(value) : value.toFixed(3)}ms`,
      `(Budget: ${budget.poor}ms)`
    );
  }
}

/**
 * Measure page load performance
 */
export function measurePageLoadPerformance() {
  if (typeof window === 'undefined') return;

  // Wait for page to fully load
  if (document.readyState === 'complete') {
    getPerformanceMetrics();
  } else {
    window.addEventListener('load', getPerformanceMetrics);
  }
}

/**
 * Get detailed performance metrics
 */
function getPerformanceMetrics() {
  if (!window.performance || !window.performance.timing) return;

  const timing = window.performance.timing;
  const navigation = window.performance.navigation;

  const metrics = {
    // Page load metrics
    pageLoadTime: timing.loadEventEnd - timing.navigationStart,
    domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
    domInteractive: timing.domInteractive - timing.navigationStart,

    // Network metrics
    dnsLookup: timing.domainLookupEnd - timing.domainLookupStart,
    tcpConnection: timing.connectEnd - timing.connectStart,
    serverResponse: timing.responseEnd - timing.requestStart,

    // Resource timing
    resourceLoadTime: timing.loadEventEnd - timing.domContentLoadedEventEnd,

    // Navigation type
    navigationType: getNavigationType(navigation.type),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('[Performance Metrics]', metrics);
  }

  return metrics;
}

/**
 * Get navigation type string
 * @param {number} type - Navigation type code
 * @returns {string} Navigation type
 */
function getNavigationType(type) {
  const types = {
    0: 'navigate',
    1: 'reload',
    2: 'back_forward',
    255: 'reserved',
  };
  return types[type] || 'unknown';
}

/**
 * Monitor long tasks (TBT - Total Blocking Time)
 */
export function monitorLongTasks() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window))
    return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          // Long task threshold
          if (process.env.NODE_ENV === 'development') {
            console.warn(
              `⚠️ Long Task detected: ${Math.round(entry.duration)}ms`,
              entry
            );
          }

          // Send to analytics
          if (window.gtag && process.env.NODE_ENV === 'production') {
            window.gtag('event', 'long_task', {
              value: Math.round(entry.duration),
              task_name: entry.name,
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch (e) {
    // PerformanceLongTaskTiming not supported
  }
}

/**
 * Monitor resource loading performance
 */
export function monitorResourceTiming() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window))
    return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Check for slow resources (> 2 seconds)
      if (entry.duration > 2000) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `⚠️ Slow Resource: ${entry.name}`,
            `${Math.round(entry.duration)}ms`
          );
        }
      }
    }
  });

  observer.observe({ entryTypes: ['resource'] });
}

/**
 * Get connection info for adaptive performance
 * @returns {Object} Connection information
 */
export function getConnectionInfo() {
  if (typeof navigator === 'undefined' || !navigator.connection) {
    return { effectiveType: '4g', saveData: false };
  }

  const connection = navigator.connection;
  return {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  };
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Lazy load images with Intersection Observer
 * @param {string} selector - Image selector
 */
export function lazyLoadImages(selector = 'img[data-src]') {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window))
    return;

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  document.querySelectorAll(selector).forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Prefetch critical resources
 * @param {Array} urls - URLs to prefetch
 */
export function prefetchResources(urls) {
  if (typeof window === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  measurePageLoadPerformance();
  monitorLongTasks();
  monitorResourceTiming();

  // Log connection info
  if (process.env.NODE_ENV === 'development') {
    const connection = getConnectionInfo();
    console.log('[Connection Info]', connection);

    if (connection.saveData) {
      console.log('📊 Data Saver mode enabled');
    }
  }
}
