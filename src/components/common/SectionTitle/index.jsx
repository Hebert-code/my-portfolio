
const SectionTitle = ({title}) => {
    return (
        <div className="relative flex flex-col items-center mb-16">
          <h4 className="text-dourado-texto uppercase font-medium text-2xl tracking-[1px] relative z-10">
            {title}
          </h4>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-texto-secundario font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none opacity-10 max-w-full">
            {title}
          </h1>
        </div>
    );
}

export default SectionTitle