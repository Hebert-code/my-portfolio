
const InputField = ({ type, placeholder, required, ariaLabel }) => (
    <div className="mb-5">
      <input
        required={required}
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        className="w-full text-gray-300 p-3 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-dourado-texto transition-all"
      />
    </div>
);

export default InputField;
  