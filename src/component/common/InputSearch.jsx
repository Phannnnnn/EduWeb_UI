const InputSearch = () => {
  return (
    <div className="flex items-center py-2 px-5 gap-3 bg-[#B3B1B8]/30 rounded-lg border border-transparent focus-within:border-[#237A37]">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className=" text-[#B3B1B8] leading-6 outline-none font-semibold text-sm"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
          stroke="#237A37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default InputSearch;
