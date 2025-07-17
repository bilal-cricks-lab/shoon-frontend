import { NextRequest, NextResponse } from 'next/server'

// Set Node.js to ignore SSL certificate errors for self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const BACKEND_URL = process.env.MEDUSA_BACKEND_URL || 'https://13.62.11.100'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params
  const path = resolvedParams.path.join('/')
  const url = new URL(request.url)
  const queryString = url.search
  
  try {
    const response = await fetch(`${BACKEND_URL}/${path}${queryString}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || '',
        ...Object.fromEntries(request.headers.entries())
      },
    })
    
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json({ error: 'Backend request failed' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params
  const path = resolvedParams.path.join('/')
  const body = await request.json()
  
  try {
    const response = await fetch(`${BACKEND_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || '',
        ...Object.fromEntries(request.headers.entries())
      },
      body: JSON.stringify(body),
    })
    
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json({ error: 'Backend request failed' }, { status: 500 })
  }
} 