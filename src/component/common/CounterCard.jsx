const CounterCard = ({ image, value, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <img src={image} alt="icon" className="object-contain" />
      <span className="text-[#237A37] text-xl font-semibold">{value}</span>
      <p className="leading-relaxed break-words text-center text-[#000000] font-semibold text-base">
        {label}
      </p>
    </div>
  );
};

export default CounterCard;
