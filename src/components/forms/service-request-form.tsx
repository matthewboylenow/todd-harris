'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TurnstileWidget } from './turnstile-widget';
import { SERVICE_REQUEST_TYPES, URGENCY_OPTIONS, COMPANY } from '@/lib/constants';

export function ServiceRequestForm() {
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
      address: formData.get('address'),
      serviceType: formData.get('serviceType'),
      urgency: formData.get('urgency'),
      description: formData.get('description'),
      turnstileToken,
    };

    try {
      const res = await fetch('/api/service-request', {
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
        <p className="text-lg font-serif text-navy">We got your request.</p>
        <p className="mt-2 text-gray-medium">
          Someone will reach out within one business day to schedule your service call. For urgent issues, call us directly at{' '}
          <a href={COMPANY.phone.mainTel} className="text-copper hover:text-copper-dark">{COMPANY.phone.main}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="sr-name">Name *</Label>
          <Input id="sr-name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="sr-email">Email *</Label>
          <Input id="sr-email" name="email" type="email" required className="mt-1" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="sr-phone">Phone *</Label>
          <Input id="sr-phone" name="phone" type="tel" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="sr-address">Service address</Label>
          <Input id="sr-address" name="address" className="mt-1" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="sr-serviceType">Service type *</Label>
          <Select name="serviceType" required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a service type" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_REQUEST_TYPES.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="sr-urgency">Urgency</Label>
          <Select name="urgency">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="How urgent?" />
            </SelectTrigger>
            <SelectContent>
              {URGENCY_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="sr-description">Description of the issue *</Label>
        <Textarea id="sr-description" name="description" required rows={5} className="mt-1" />
      </div>

      <TurnstileWidget onSuccess={setTurnstileToken} />

      <Button
        type="submit"
        size="lg"
        disabled={status === 'submitting'}
        className="bg-copper hover:bg-copper-dark text-white font-sans w-full sm:w-auto px-8"
      >
        {status === 'submitting' ? 'Submitting...' : 'Request Service'}
      </Button>

      {status === 'error' && (
        <p className="text-alert text-sm">Something went wrong. Please try again or call us directly.</p>
      )}
    </form>
  );
}
