import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from './TextField';
import { CONTACT_FIELDS, CONTACT_FORM, contactSchema, type ContactValues } from '../data/contact';
import { FOOTER_CONTACT_INFO } from '../data/profile';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

const SENT_COPY = 'Message sent — thanks for reaching out.';
const FAILED_COPY = `Something went wrong. Please try again, or email me at ${FOOTER_CONTACT_INFO.email}.`;

function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const send = handleSubmit(async (_values, event) => {
    // `target`, never `currentTarget`: react-hook-form awaits the resolver
    // before it calls us, and React has already nulled currentTarget by then.
    const form = event?.target as HTMLFormElement | null;
    if (!form || status === 'sending') return;

    setStatus('sending');
    try {
      // The body is read from the form, not from the validated values, so the
      // scripted path posts exactly what a browser with JavaScript off would.
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        setStatus('failed');
        return;
      }
      reset();
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  });

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section" tabIndex={-1}>
      <div className="section-head">
        <h2 id="contact-heading" className="section-title">
          Get in Touch
        </h2>
        <p className="lead measure">
          Feel free to contact if you want to collaborate!
          <br />
          <br />
          Let's talk about future projects and how we can work together 😉
          <br />
        </p>
      </div>

      <form
        action={CONTACT_FORM.endpoint}
        method="post"
        noValidate
        className="section-body max-w-[var(--measure-form)]"
        onSubmit={send}
      >
        <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />
        <input type="hidden" name="subject" value={CONTACT_FORM.subject} />
        <input type="hidden" name="from_name" value={CONTACT_FORM.fromName} />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="stack">
          {CONTACT_FIELDS.map((field) => (
            <TextField key={field.name} field={field} register={register} error={errors[field.name]?.message} />
          ))}
        </div>

        <p
          className="form-status"
          role="status"
          data-status={status === 'sent' || status === 'failed' ? status : undefined}
        >
          {status === 'sent' ? SENT_COPY : status === 'failed' ? FAILED_COPY : ''}
        </p>

        <button type="submit" className="btn btn-primary mt-2" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
