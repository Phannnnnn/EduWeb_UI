const ButtonSecond = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center uppercase bg-[#237A37] text-white rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-bold text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:bg-[#1a5c29] transition-colors duration-200 w-full sm:w-auto"
    >
      {label}
    </button>
  );
};

export default ButtonSecond;
