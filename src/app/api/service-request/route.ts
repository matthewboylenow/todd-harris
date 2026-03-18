import { NextResponse } from 'next/server';
import { verifyTurnstile } from '@/lib/turnstile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, serviceType, urgency, description, turnstileToken } = body;

    if (!name || !email || !phone || !serviceType || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify Turnstile token
    if (process.env.TURNSTILE_SECRET_KEY) {
      const isValid = await verifyTurnstile(turnstileToken);
      if (!isValid) {
        return NextResponse.json({ error: 'Verification failed' }, { status: 400 });
      }
    }

    // Save to database if configured
    if (process.env.DATABASE_URL) {
      const { db } = await import('@/lib/db');
      const { serviceRequests } = await import('@/lib/db/schema');
      await db.insert(serviceRequests).values({
        name,
        email,
        phone,
        address: address || null,
        serviceType,
        urgency: urgency || null,
        description,
      });
    }

    // Send email notification if configured
    if (process.env.RESEND_API_KEY) {
      const { sendServiceRequestNotification } = await import('@/lib/email/send');
      await sendServiceRequestNotification({ name, email, phone, address, serviceType, urgency, description });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Service request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
