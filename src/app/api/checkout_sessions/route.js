import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'
import { auth } from '@/lib/auth'

export async function POST(request) {

  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const users= await auth.api.getSession({
      headers: await headers()
    })
    const user=users?.user
    
    const formData=await request.formData()
    const price=formData.get('price')
    const title=formData.get('title')
    const productId=formData.get("productId")
    const productImage=formData.get('image')
    const status=formData.get('status')


    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email:user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data:{
            currency:'usd',
            unit_amount:Number(price)*100,
            product_data:{
              name: title
            }
          },
          quantity: 1,
        },
      ],
      metadata:{
        price:Number(price),
        userEmail: user?.email,
        userId:user?.id,
        userName:user?.name,
        productName: title,
        productId: productId,  
        productImage:productImage,
        status:status     
      },
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}