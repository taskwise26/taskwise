export async function onRequestPost(context) {
  const { RESEND_API_KEY } = context.env;

  if (!RESEND_API_KEY) {
    return Response.json({ ok: false, error: 'Server misconfiguration' }, { status: 500 });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const { name, email, phone, company, message } = body;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'TaskWise <no_reply@taskwise.sg>',
      to: 'info@taskwise.sg',
      reply_to: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        company ? `Company: ${company}` : null,
        ``,
        message,
      ].filter(Boolean).join('\n'),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return Response.json({ ok: false, error: err }, { status: 502 });
  }

  return Response.json({ ok: true });
}
