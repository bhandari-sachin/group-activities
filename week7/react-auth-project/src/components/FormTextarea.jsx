const FormTextarea = ({
  label,
  id,
  rows = 3,
  placeholder,
  value,
  onChange,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">{label}</label>
    <textarea
      id={id}
      rows={rows}
      className="border rounded w-full py-2 px-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormTextarea;
