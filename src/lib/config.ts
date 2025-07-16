import Medusa from "@medusajs/js-sdk"

// Use proxy in production to avoid mixed content issues
// Use direct connection in development for better debugging
let MEDUSA_BACKEND_URL = process.env.NODE_ENV === "production" 
  ? "/api/medusa" 
  : "http://16.170.238.1:8080"

// Allow override via environment variable
if (process.env.MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
})
