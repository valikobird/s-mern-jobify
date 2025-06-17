interface FormRowSelectProps {
  name: string;
  labelText: string;
  list: string[];
  defaultValue: string;
}

const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = '',
}: FormRowSelectProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
      >
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
