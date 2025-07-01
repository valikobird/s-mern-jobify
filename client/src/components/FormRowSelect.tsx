import type { ChangeEvent } from 'react';

interface FormRowSelectProps {
  name: string;
  labelText: string;
  list: string[];
  defaultValue: string;
  onChange: (e: ChangeEvent) => void;
}

const FormRowSelect = ({ name, labelText, list, defaultValue = '', onChange }: FormRowSelectProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select name={name} id={name} className="form-select" defaultValue={defaultValue} onChange={onChange}>
        {list.map((jobStatus) => {
          const status = jobStatus as string;
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
