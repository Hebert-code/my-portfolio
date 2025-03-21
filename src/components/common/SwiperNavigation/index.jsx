import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SwiperNavigation = ({ onPrev, onNext  }) => {
  return (
    <>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 z-10">
        <FaChevronLeft
          className="text-white text-3xl cursor-pointer opacity-80 hover:opacity-100 transition duration-300"
          onClick={onPrev}
        />
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 z-10">
        <FaChevronRight
          className="text-white text-3xl cursor-pointer opacity-80 hover:opacity-100 transition duration-300"
          onClick={onNext}
        />
      </div>
    </>
  );
};

export default SwiperNavigation;
