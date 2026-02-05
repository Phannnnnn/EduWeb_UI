const CounterCard = ({ image, value, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <img
        src={image}
        alt="icon"
        className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
      />
      <span className="text-[#237A37] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {value}
      </span>
      <p className="leading-relaxed break-words text-center text-[#000000] font-semibold text-xs sm:text-sm md:text-base">
        {label}
      </p>
    </div>
  );
};

export default CounterCard;
