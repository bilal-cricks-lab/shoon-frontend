import { NextRequest } from 'next/server'

const BACKEND_URL = process.env.MEDUSA_BACKEND_URL || 'http://16.170.238.1:8080'

export const runtime = 'edge'

async function proxyRequest(request: NextRequest, method: string) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  const queryString = request.url.split('?')[1] ? '?' + request.url.split('?')[1] : ''
  
  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || '',
    })

    // Forward relevant headers from the original request
    const forwardHeaders = ['authorization', 'cookie', 'user-agent']
    forwardHeaders.forEach(header => {
      const value = request.headers.get(header)
      if (value) headers.set(header, value)
    })

    const requestOptions: RequestInit = {
      method,
      headers,
    }

    // Add body for POST, PUT, PATCH requests
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      try {
        const body = await request.json()
        requestOptions.body = JSON.stringify(body)
      } catch {
        // If body is not JSON, try to get it as text
        const body = await request.text()
        if (body) {
          requestOptions.body = body
          headers.set('Content-Type', request.headers.get('content-type') || 'application/json')
        }
      }
    }

    const response = await fetch(`${BACKEND_URL}/${path}${queryString}`, requestOptions)
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json()
      return Response.json(data, { status: response.status })
    } else {
      // Handle non-JSON responses
      const text = await response.text()
      console.error('Backend returned non-JSON response:', text.substring(0, 200))
      return Response.json(
        { error: 'Backend returned invalid response format' }, 
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Proxy error:', error)
    return Response.json({ error: 'Backend request failed' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return proxyRequest(request, 'GET')
}

export async function POST(request: NextRequest) {
  return proxyRequest(request, 'POST')
}

export async function PUT(request: NextRequest) {
  return proxyRequest(request, 'PUT')
}

export async function PATCH(request: NextRequest) {
  return proxyRequest(request, 'PATCH')
}

export async function DELETE(request: NextRequest) {
  return proxyRequest(request, 'DELETE')
} 