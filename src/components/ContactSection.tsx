import TextField from './TextField';
import { CONTACT_FIELDS, CONTACT_FORM } from '../data/contact';

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-[1200px] px-[clamp(16px,5vw,48px)] py-[clamp(64px,12vh,120px)]"
    >
      <h2 id="contact-heading" className="section-title text-accent">
        Get in Touch
      </h2>
      <p className="lead measure mt-4">
        Feel free to contact if you want to collaborate!
        <br />
        <br />
        Let's talk about future projects and how we can work together 😉
        <br />
      </p>

      <form action={CONTACT_FORM.endpoint} method="post" className="mt-8 max-w-[560px]">
        <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />
        <input type="hidden" name="subject" value={CONTACT_FORM.subject} />
        <input type="hidden" name="from_name" value={CONTACT_FORM.fromName} />

        <div className="space-y-4">
          {CONTACT_FIELDS.map((field) => (
            <TextField key={field.name} field={field} />
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 rounded-full bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-on-accent transition-colors hover:bg-accent-hover"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
