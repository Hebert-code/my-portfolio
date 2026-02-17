import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SwiperNavigation = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute top-1/2 -left-2 xl:-left-6 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-dourado-texto hover:border-dourado-texto/30 transition-all duration-300 cursor-pointer"
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <button
        onClick={onNext}
        className="absolute top-1/2 -right-2 xl:-right-6 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-dourado-texto hover:border-dourado-texto/30 transition-all duration-300 cursor-pointer"
        aria-label="Próximo"
      >
        <FaChevronRight className="text-sm" />
      </button>
    </>
  );
};

export default SwiperNavigation;
