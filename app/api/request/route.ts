import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const address = formData.get('address');
    const services = formData.getAll('services');
    const description = formData.get('description');
    
    if (!firstName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">🚀 New Lead: Apex Smart Home</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Customer:</td><td>${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${address}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Services:</td><td>${services.join(', ')}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Description:</td><td>${description}</td></tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: 'Apex Smart Home <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'your-email@gmail.com'],
      subject: `New Request: ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Request submitted successfully!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
