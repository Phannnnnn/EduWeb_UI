import { useEffect, useRef, useState } from "react";

const dropDownItems = [
  { label: "5" },
  { label: "10" },
  { label: "15" },
  { label: "20" },
];

const DropDownPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedDropDownItemIndex, setSelectedDropDownItemIndex] = useState(0);
  const dropdownRef = useRef(null);

  const handleOpenMenu = () => setOpenMenu((prev) => !prev);

  const handleSelectDropDownItemIndex = (index) => {
    setSelectedDropDownItemIndex(index);
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-20">
      <div className="relative">
        {openMenu && (
          <div className="absolute bottom-0 left-0 z-50 bg-white border border-[#ECECED] w-full rounded-lg shadow-sm">
            <div className="flex flex-col">
              {dropDownItems.map((item, index) => {
                const isActive = index === selectedDropDownItemIndex;
                return (
                  <div
                    key={index}
                    onClick={() => handleSelectDropDownItemIndex(index)}
                    className={`px-3 py-2 cursor-pointer transition-colors
                      ${isActive ? "bg-[#6C757D] text-white" : "text-[#141619] hover:bg-[#ECECED]"}
                      border-b border-[#ECECED] last:border-none`}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div
          onClick={handleOpenMenu}
          className="flex justify-between items-center text-[#141619] border border-[#ECECED] rounded-lg w-full px-3 py-2 bg-white cursor-pointer"
        >
          <span className="">
            {dropDownItems[selectedDropDownItemIndex].label}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99983 13.3257L3.83691 8.16274L5.16274 6.83691L8.99983 10.674L12.8369 6.83691L14.1627 8.16274L8.99983 13.3257Z"
              fill="#4F4B5C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDownPage;
