// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', 'G-DB7J0EKM8D', {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track CTA button clicks
export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', 'engagement', location);
};

// Track feature interactions
export const trackFeatureInteraction = (feature: string) => {
  trackEvent('feature_interaction', 'engagement', feature);
};