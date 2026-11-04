import type { ContactField } from '../data/contact';

interface TextFieldProps {
  field: ContactField;
}

const INPUT_CLASS =
  'mt-1 w-full rounded border border-rule bg-bg-raised px-3 py-2 text-base text-ink placeholder:text-ink-faint';

function TextField({ field }: TextFieldProps) {
  const id = field.name;

  return (
    <p>
      <label htmlFor={id} className="eyebrow block">
        {field.label}
      </label>
      {field.multiline ? (
        <textarea
          id={id}
          name={field.name}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          required={field.required}
          rows={5}
          className={INPUT_CLASS}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          minLength={field.minLength}
          maxLength={field.maxLength}
          pattern={field.pattern}
          title={field.title}
          required={field.required}
          className={INPUT_CLASS}
        />
      )}
    </p>
  );
}

export default TextField;
