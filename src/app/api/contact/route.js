import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const clinicMessage = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,  // Same Gmail for forwarding (clinic's inbox)
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const autoReply = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Aarogya Skin Clinic!',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Aarogya Skin Clinic. We have received your message and will get back to you shortly.</p>
        <p>Warm regards,<br/>Aarogya Skin Clinic</p>
      `,
    };

    await transporter.sendMail(clinicMessage); 
    await transporter.sendMail(autoReply);  

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Something went wrong.' }), {
      status: 500,
    });
  }
}
