export interface InternetPlan {
  title: string;
  id: string;
  price: InternetPlanPrice;
  speed: InternetPlanSpeed;
  options?: InternetPlanOption[];
}

interface InternetPlanOption {
  id: string;
  title: string;
}

export interface InternetPlanPrice {
  value: number;
  currency: InternetPriceCurrency;
}

export interface InternetPlanSpeed {
  downloadSpeed: number;
  uploadSpeed: number;
}

export type InternetPriceCurrency = 'USD' | 'EUR';
