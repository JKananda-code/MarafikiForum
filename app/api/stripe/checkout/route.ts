import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { priceId, userId } = await req.json()
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/premium/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/premium`,
    client_reference_id: userId
  })
  return NextResponse.json({ url: session.url })
}
