/**
 * Observability Layer
 * Provides interfaces for Error Monitoring, Performance Tracking, and Analytics.
 */

export const Logger = {
  info: (message: string, context?: any) => {
    if (import.meta.env.PROD) {
      // In production, ship logs to external observability service
      console.log(`[INFO] ${message}`, context || '');
    } else {
      console.log(`[INFO] ${message}`, context || '');
    }
  },
  error: (error: Error | string, context?: any) => {
    // Ship to error reporting service (e.g. Sentry)
    console.error(`[ERROR]`, error, context || '');
  },
  warn: (message: string, context?: any) => {
    console.warn(`[WARN] ${message}`, context || '');
  }
};

export const AnalyticsTracker = {
  trackEvent: (eventName: string, properties?: any) => {
    // Ship to product analytics (e.g. Mixpanel / PostHog)
    Logger.info(`[Event] ${eventName}`, properties);
  },
  trackPageView: (pageName: string) => {
    Logger.info(`[Page View] ${pageName}`);
  }
};

export const PerformanceMonitor = {
  startTimer: (label: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${label}-start`);
    }
  },
  endTimer: (label: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      const measure = performance.getEntriesByName(label).pop();
      if (measure) {
        Logger.info(`[Performance] ${label} took ${measure.duration.toFixed(2)}ms`);
      }
    }
  }
};
