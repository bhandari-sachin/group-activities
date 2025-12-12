const FormInput = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="border rounded w-full py-2 px-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default FormInput;
