export interface ContactField {
  label: string;
  name: string;
  type?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
  multiline?: boolean;
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
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    autocomplete: 'email',
    placeholder: 'Your email',
    required: true,
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    autocomplete: 'tel',
    placeholder: 'e.g. 9123456789',
    title: 'Please enter a 9-digit phone number.',
    pattern: '[0-9]{9}',
    required: true,
  },
  { label: 'Message', name: 'message', placeholder: 'Your message', maxLength: 500, multiline: true, required: true },
];
