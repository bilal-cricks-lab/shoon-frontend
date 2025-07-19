import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Toaster } from 'react-hot-toast'

import "styles/globals.css"
import "styles/custom.css"
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
      <Toaster
  position="bottom-right"
  toastOptions={{
    success: {
      style: {
        background: "#333",
        color: "#fff",
        fontWeight: "bold",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#222",
      },
    },
    error: {
      style: {
        background: "#ff3333",
        color: "#fff",
      },
    },
    style: {
      border: "1px solid #ccc",
      padding: "12px",
      fontSize: "14px",
    },
  }}
/>

        <main className="relative">{props.children}</main>
        
      </body>
    </html>
  )
}
