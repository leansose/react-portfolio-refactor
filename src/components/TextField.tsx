import type { UseFormRegister } from 'react-hook-form';
import type { ContactField, ContactValues } from '../data/contact';

interface TextFieldProps {
  field: ContactField;
  register: UseFormRegister<ContactValues>;
  error?: string;
}

const INPUT_CLASS = 'field mt-1';

function TextField({ field, register, error }: TextFieldProps) {
  const hintId = `${field.name}-hint`;
  const errorId = `${field.name}-error`;
  const showHint = Boolean(field.hint) && !error;
  const describedBy = [showHint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ');

  return (
    <p>
      <label htmlFor={field.name} className="eyebrow block">
        {field.label}
      </label>
      {field.multiline ? (
        <textarea
          id={field.name}
          rows={5}
          className={INPUT_CLASS}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          autoComplete={field.autocomplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          {...register(field.name)}
        />
      ) : (
        <input
          id={field.name}
          type={field.type}
          className={INPUT_CLASS}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          autoComplete={field.autocomplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          {...register(field.name)}
        />
      )}
      {showHint && (
        <span id={hintId} className="field-hint">
          {field.hint}
        </span>
      )}
      {error && (
        <span id={errorId} className="field-error">
          {error}
        </span>
      )}
    </p>
  );
}

export default TextField;
