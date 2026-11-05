import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(30, 'Keep the name under 30 characters'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(/^[0-9]{9}$/, 'Enter the 9 digits, no spaces or country code'),
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
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    autocomplete: 'tel',
    placeholder: 'e.g. 9123456789',
    hint: 'Nine digits, no spaces or country code.',
    maxLength: 9,
  },
  {
    label: 'Message',
    name: 'message',
    placeholder: 'Your message',
    maxLength: 500,
    multiline: true,
  },
];
