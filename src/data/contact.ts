import { z } from 'zod';

/* Typed separators are noise, not information, so the rule reads the number
   the visitor meant: strip them, fold the old 00 prefix into a plus, then ask
   for E.164 without pinning it to one country. What gets posted stays exactly
   what was typed — this only decides whether the number is plausible. */
const phone = z
  .string()
  .trim()
  .transform((raw) => raw.replace(/[\s().-]/g, '').replace(/^00/, '+'))
  .refine(
    (value) => value === '' || /^\+?[1-9]\d{6,14}$/.test(value),
    'Enter a reachable number, e.g. +351 912 345 678',
  );

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(30, 'Keep the name under 30 characters'),
  email: z.string().trim().email('Enter a valid email address'),
  phone,
  message: z
    .string()
    .trim()
    .min(1, 'Write a message')
    .max(500, 'Keep the message under 500 characters'),
});

export type ContactValues = z.infer<typeof contactSchema>;

export interface ContactField {
  label: string;
  name: keyof ContactValues;
  type?: string;
  autocomplete?: string;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  hint?: string;
}

export const CONTACT_FORM = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '9dc0027d-0c50-4278-89ca-c63cbfd0ed3f',
  subject: 'New Portfolio Contact',
  fromName: 'Leandro Sousa Portfolio',
} as const;

export const CONTACT_FIELDS: ContactField[] = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    autocomplete: 'name',
    placeholder: 'Your name',
    maxLength: 30,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    autocomplete: 'email',
    placeholder: 'Your email',
  },
  {
    label: 'Phone (optional)',
    name: 'phone',
    type: 'tel',
    autocomplete: 'tel',
    placeholder: 'e.g. +351 912 345 678',
    hint: 'Spaces, brackets and a country code all read fine.',
    maxLength: 20,
  },
  {
    label: 'Message',
    name: 'message',
    placeholder: 'Your message',
    maxLength: 500,
    multiline: true,
  },
];
