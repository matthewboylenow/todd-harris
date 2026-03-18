'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TurnstileWidget } from './turnstile-widget';
import { SERVICE_TYPES, COMPANY } from '@/lib/constants';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceType: formData.get('serviceType'),
      message: formData.get('message'),
      turnstileToken,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-success/10 border border-success/20 p-8 text-center">
        <p className="text-lg font-serif text-navy">Thanks. We got your message.</p>
        <p className="mt-2 text-gray-medium">
          We&apos;ll get back to you shortly. If you need immediate help, call us at{' '}
          <a href={COMPANY.phone.mainTel} className="text-copper hover:text-copper-dark">{COMPANY.phone.main}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required className="mt-1" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="serviceType">Service type</Label>
          <Select name="serviceType">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a service type" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_TYPES.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1" />
      </div>

      <TurnstileWidget onSuccess={setTurnstileToken} />

      <Button
        type="submit"
        size="lg"
        disabled={status === 'submitting'}
        className="bg-copper hover:bg-copper-dark text-white font-sans w-full sm:w-auto px-8"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'error' && (
        <p className="text-alert text-sm">Something went wrong. Please try again or call us directly.</p>
      )}
    </form>
  );
}
