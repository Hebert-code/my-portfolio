import { useTheme } from "../../../contexts/ThemeContext";

const InputField = ({ type, placeholder, required, ariaLabel, name }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mb-5">
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
        className={`w-full p-4 border rounded-xl focus:outline-none input-glow transition-all duration-300 ${
          isDark
            ? "text-slate-200 bg-white/5 border-white/10 placeholder:text-slate-500 hover:border-white/20"
            : "text-slate-700 bg-black/5 border-black/10 placeholder:text-slate-400 hover:border-black/20"
        }`}
      />
    </div>
  );
};

export default InputField;
