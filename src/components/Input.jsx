/* eslint-disable react/prop-types */
export default function Input({ label, InputProps, onChange, value }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-base text-gray-800">
        {label}
      </label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        type="text"
        {...InputProps}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}
