import type { ContactField } from '../data/contact';

interface TextFieldProps {
  field: ContactField;
}

function TextField({ field }: TextFieldProps) {
  const id = field.name;

  return (
    <p>
      <label htmlFor={id}>{field.label}</label>
      {field.multiline ? (
        <textarea
          id={id}
          name={field.name}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          required={field.required}
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
        />
      )}
    </p>
  );
}

export default TextField;
