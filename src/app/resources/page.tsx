import { redirect } from 'next/navigation';

// Resources page hidden per client direction. Redirecting to preventative maintenance.
export default function ResourcesPage() {
  redirect('/preventative-maintenance');
}
