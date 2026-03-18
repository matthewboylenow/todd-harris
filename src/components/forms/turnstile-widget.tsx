'use client';

import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
}

export function TurnstileWidget({ onSuccess }: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="rounded border border-dashed border-concrete-dark p-4 text-center text-sm text-gray-medium">
        Turnstile verification (configure NEXT_PUBLIC_TURNSTILE_SITE_KEY)
      </div>
    );
  }

  return (
    <Turnstile
      siteKey={siteKey}
      onSuccess={onSuccess}
      options={{ theme: 'light' }}
    />
  );
}
