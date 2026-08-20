declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
