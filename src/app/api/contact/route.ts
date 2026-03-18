import { NextResponse } from 'next/server';
import { verifyTurnstile } from '@/lib/turnstile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, message, turnstileToken } = body;

    if (!name || !email || !message) {
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
      const { contactSubmissions } = await import('@/lib/db/schema');
      await db.insert(contactSubmissions).values({
        name,
        email,
        phone: phone || null,
        serviceType: serviceType || null,
        message,
      });
    }

    // Send email notification if configured
    if (process.env.RESEND_API_KEY) {
      const { sendContactNotification } = await import('@/lib/email/send');
      await sendContactNotification({ name, email, phone, serviceType, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
