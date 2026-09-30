// The former chat integration is retired in favor of direct contact options.
export async function POST() {
  return Response.json({ message: 'Please use the contact form or book a consultation.', contactUrl: '/contact' }, { status: 410 });
}
