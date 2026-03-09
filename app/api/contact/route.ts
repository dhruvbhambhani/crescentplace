import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, interest, message } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Crescent Place Website" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Inquiry from ${firstName} ${lastName} - Crescent Place`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #1e293b; padding-bottom: 10px;">
            New Contact Form Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Interested In:</td>
              <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${interest || 'Not specified'}</td>
            </tr>
          </table>
          ${message ? `
            <div style="margin-top: 20px;">
              <p style="color: #64748b; margin-bottom: 8px;">Message:</p>
              <div style="background: #f1f5f9; padding: 16px; border-left: 4px solid #1e293b; color: #334155;">
                ${message}
              </div>
            </div>
          ` : ''}
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="color: #94a3b8; font-size: 12px; margin-top: 10px;">
            This inquiry was submitted via the Crescent Place website contact form.
          </p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
