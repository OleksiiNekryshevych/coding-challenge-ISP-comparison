export interface InternetPlan {
  title: string
  id: string
  price: InternetPlanPrice
  speed: InternetPlanSpeed
  options: unknown[]
}

export interface InternetPlanPrice {
  value: number
  currency: InternetPriceCurrency
}

export interface InternetPlanSpeed {
  downloadSpeed: number
  uploadSpeed: number
}

export type InternetPriceCurrency = 'USD' | 'EUR'
