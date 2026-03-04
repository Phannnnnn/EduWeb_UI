const StepBadge = ({ label }) => {
  return (
    <div className="flex items-center justify-center bg-[#237A37] text-white h-6 w-6 sm:w-8 sm:h-8 lg:min-w-10 lg:min-h-10 rounded-xl shadow-sm">
      <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold leading-none">
        {label}
      </span>
    </div>
  );
};

export default StepBadge;
