const InputText = ({ id, label, ...props }) => {
  return (
    <div className="text-[#000000] w-full">
      <label
        className="text-[#141619] flex items-center gap-1 font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1.5 sm:mb-2"
        htmlFor={id}
      >
        {label}
        <svg
          width="5"
          height="5"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[6px] sm:h-[6px] md:w-[7px] md:h-[7px] flex-shrink-0"
        >
          <path
            d="M2.56832 6.54581L2.65922 4.04581L0.545588 5.38672L0.000133216 4.43217L2.22741 3.27308L0.000133216 2.11399L0.545588 1.15945L2.65922 2.50035L2.56832 0.000354767H3.65922L3.56832 2.50035L5.68195 1.15945L6.22741 2.11399L4.00013 3.27308L6.22741 4.43217L5.68195 5.38672L3.56832 4.04581L3.65922 6.54581H2.56832Z"
            fill="#DC3545"
          />
        </svg>
      </label>
      <input
        type="text"
        {...props}
        id={id}
        className="text-[#000000] border-[#899197] border rounded-lg w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg lg:text-xl outline-none focus:border-black transition-colors duration-200"
      />
    </div>
  );
};

export default InputText;
