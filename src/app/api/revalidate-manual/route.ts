import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, secret } = body

    // Optional: Add a secret for security
    if (secret && secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    console.log('Manual revalidation requested for:', type)

    // Revalidate based on type
    switch (type) {
      case 'products':
        revalidateTag('products')
        break
      case 'categories':
        revalidateTag('categories')
        break
      case 'collections':
        revalidateTag('collections')
        break
      case 'regions':
        revalidateTag('regions')
        break
      case 'orders':
        revalidateTag('orders')
        break
      case 'carts':
        revalidateTag('carts')
        break
      case 'all':
        revalidateTag('products')
        revalidateTag('categories')
        revalidateTag('collections')
        revalidateTag('regions')
        revalidateTag('orders')
        revalidateTag('carts')
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json({ 
      success: true, 
      message: `Revalidated ${type}`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Manual revalidation error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Manual revalidation endpoint',
    usage: 'POST with { "type": "products|categories|collections|regions|orders|carts|all" }',
    endpoint: '/api/revalidate-manual'
  })
} 