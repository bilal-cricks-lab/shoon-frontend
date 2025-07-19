import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_name } = body

    console.log('Webhook received:', event_name)

    // Revalidate based on the event type
    switch (event_name) {
      case 'product.created':
      case 'product.updated':
      case 'product.deleted':
        revalidateTag('products')
        console.log('Revalidated products')
        break

      case 'product_category.created':
      case 'product_category.updated':
      case 'product_category.deleted':
        revalidateTag('categories')
        console.log('Revalidated categories')
        break

      case 'collection.created':
      case 'collection.updated':
      case 'collection.deleted':
        revalidateTag('collections')
        console.log('Revalidated collections')
        break

      case 'region.created':
      case 'region.updated':
      case 'region.deleted':
        revalidateTag('regions')
        console.log('Revalidated regions')
        break

      case 'order.created':
      case 'order.updated':
      case 'order.deleted':
        revalidateTag('orders')
        console.log('Revalidated orders')
        break

      case 'cart.created':
      case 'cart.updated':
      case 'cart.deleted':
        revalidateTag('carts')
        console.log('Revalidated carts')
        break

      default:
        // For any other event, revalidate all
        revalidateTag('products')
        revalidateTag('categories')
        revalidateTag('collections')
        revalidateTag('regions')
        console.log('Revalidated all data')
    }

    return NextResponse.json({ 
      success: true, 
      message: `Revalidated data for event: ${event_name}`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Webhook endpoint for Medusa admin portal',
    endpoint: '/api/webhooks/medusa',
    method: 'POST'
  })
} 