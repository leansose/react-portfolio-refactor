import TextField from './TextField';
import { CONTACT_FIELDS, CONTACT_FORM } from '../data/contact';

function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in Touch</h2>
      <p>
        Feel free to contact if you want to collaborate!
        <br />
        <br />
        Let's talk about future projects and how we can work together 😉
        <br />
      </p>

      <form action={CONTACT_FORM.endpoint} method="post">
        <input type="hidden" name="access_key" value={CONTACT_FORM.accessKey} />
        <input type="hidden" name="subject" value={CONTACT_FORM.subject} />
        <input type="hidden" name="from_name" value={CONTACT_FORM.fromName} />

        <div>
          {CONTACT_FIELDS.map((field) => (
            <TextField key={field.name} field={field} />
          ))}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
