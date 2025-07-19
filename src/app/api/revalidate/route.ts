import { NextRequest, NextResponse } from 'next/server'
import { revalidateAllData } from '@lib/util/revalidate'

export async function POST(request: NextRequest) {
  try {
    // Revalidate all data
    await revalidateAllData()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data revalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Use POST to trigger revalidation',
    endpoint: '/api/revalidate'
  })
} 