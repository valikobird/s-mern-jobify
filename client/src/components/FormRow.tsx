import type { ChangeEvent } from 'react';

type FormRowProps = {
  type: string;
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent) => void;
};

const FormRow = ({ type, name, labelText, defaultValue, onChange, required }: FormRowProps) => {
  if (typeof required === 'undefined') {
    required = true;
  }

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormRow;
