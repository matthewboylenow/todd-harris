import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'sales@toddharris.com';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message: string;
}

interface ServiceRequestData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  serviceType: string;
  urgency?: string;
  description: string;
}

export async function sendContactNotification(data: ContactData) {
  await resend.emails.send({
    from: 'Todd Harris Website <noreply@toddharris.com>',
    to: notificationEmail,
    replyTo: data.email,
    subject: `New contact form: ${data.name}${data.serviceType ? ` - ${data.serviceType}` : ''}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.serviceType ? `<p><strong>Service Type:</strong> ${data.serviceType}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  });
}

export async function sendServiceRequestNotification(data: ServiceRequestData) {
  await resend.emails.send({
    from: 'Todd Harris Website <noreply@toddharris.com>',
    to: notificationEmail,
    replyTo: data.email,
    subject: `Service request: ${data.name} - ${data.serviceType}${data.urgency === 'Urgent' ? ' [URGENT]' : ''}`,
    html: `
      <h2>New Service Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ''}
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      ${data.urgency ? `<p><strong>Urgency:</strong> ${data.urgency}</p>` : ''}
      <p><strong>Description:</strong></p>
      <p>${data.description.replace(/\n/g, '<br>')}</p>
    `,
  });
}
