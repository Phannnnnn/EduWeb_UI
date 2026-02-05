import { useEffect, useRef, useState } from "react";

const courtItems = [
  { label: "Khóa N1" },
  { label: "Khóa N2" },
  { label: "Khóa N3" },
  { label: "Khóa N4" },
  { label: "Khóa N5" },
];

const SelectionInput = ({ id, label, items }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCourtIndex, setSelectedCourtIndex] = useState(0);
  const dropdownRef = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleSelectCourtIndex = (index) => {
    setSelectedCourtIndex(index);
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <label
        className="text-[#141619] flex items-center gap-1 font-semibold text-xl"
        htmlFor={id}
      >
        {label}
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.56832 6.54581L2.65922 4.04581L0.545588 5.38672L0.000133216 4.43217L2.22741 3.27308L0.000133216 2.11399L0.545588 1.15945L2.65922 2.50035L2.56832 0.000354767H3.65922L3.56832 2.50035L5.68195 1.15945L6.22741 2.11399L4.00013 3.27308L6.22741 4.43217L5.68195 5.38672L3.56832 4.04581L3.65922 6.54581H2.56832Z"
            fill="#DC3545"
          />
        </svg>
      </label>
      <div
        onClick={handleOpenMenu}
        className="flex justify-between items-center text-[#000000] border-[#899197] border rounded-lg w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer transition-colors duration-200 "
      >
        <span>{courtItems[selectedCourtIndex].label}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.72468 6.64107C3.94657 6.41918 4.29379 6.39901 4.53847 6.58055L4.60857 6.64107L9.99996 12.0322L15.3914 6.64107C15.6132 6.41918 15.9605 6.39901 16.2051 6.58055L16.2752 6.64107C16.4971 6.86295 16.5173 7.21017 16.3357 7.45485L16.2752 7.52495L10.4419 13.3583C10.22 13.5802 9.87279 13.6003 9.62812 13.4188L9.55802 13.3583L3.72468 7.52495C3.48061 7.28087 3.48061 6.88514 3.72468 6.64107Z"
            fill="#6C757D"
          />
        </svg>
      </div>
      {openMenu && (
        <div className="absolute bg-white z-50 flex flex-col gap-1 mt-1 text-[#000000] border-[#899197] border rounded-lg w-full px-3 sm:px-4 py-1 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer transition-colors duration-200">
          {courtItems.map((item, index) => {
            const isActive = index === selectedCourtIndex;
            return (
              <span
                key={item.label}
                onClick={() => handleSelectCourtIndex(index)}
                className={`${isActive ? "bg-[#D9D9D9]" : "hover:bg-[#D9D9D9]"} py-2 px-1 rounded-lg`}
              >
                {item.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectionInput;
