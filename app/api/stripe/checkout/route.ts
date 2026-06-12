export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  
  try {
    const body = await req.json()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: body.line_items,
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    })
    
    return NextResponse.json({ url: session.url })
  } catch (err) {
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 })
  }
}