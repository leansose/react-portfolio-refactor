import TextField from './TextField';
import { CONTACT_FIELDS, CONTACT_FORM } from '../data/contact';

function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section">
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

      <form action={CONTACT_FORM.endpoint} method="post" className="section-body max-w-[var(--measure-form)]">
        <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />
        <input type="hidden" name="subject" value={CONTACT_FORM.subject} />
        <input type="hidden" name="from_name" value={CONTACT_FORM.fromName} />

        <div className="stack">
          {CONTACT_FIELDS.map((field) => (
            <TextField key={field.name} field={field} />
          ))}
        </div>

        <button type="submit" className="btn btn-primary mt-6">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
