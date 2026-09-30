export type ContactData = {
  name: string;
  email: string;
  message: string;
  service: string;
  city: string;
};

const serviceIds = ['residential', 'commercial', 'outdoor', 'evaluation', 'permit', 'construction', 'not-sure', ''];

export function validateContact(value: unknown): ContactData | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const data = value as Record<string, unknown>;
  const read = (key: string) => typeof data[key] === 'string' ? (data[key] as string).trim() : null;
  const name = read('name');
  const email = read('email');
  const message = read('message');
  const service = data.service === undefined ? '' : read('service');
  const city = data.city === undefined ? '' : read('city');
  if (!name || name.length > 100 || /[\r\n]/.test(name)) return null;
  if (!email || email.length > 254 || !/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(email)) return null;
  if (!message || message.length > 5000) return null;
  if (service === null || !serviceIds.includes(service)) return null;
  if (city === null || city.length > 100 || /[\r\n]/.test(city)) return null;
  return { name, email, message, service, city };
}
