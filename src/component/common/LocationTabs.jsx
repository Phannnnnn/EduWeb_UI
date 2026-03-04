import { useState } from "react";

const LocationTabs = ({
  items = [
    { label: "Lớp online" },
    { label: "Hà Nội" },
    { label: "Hải Phòng" },
  ],
}) => {
  const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);

  const handleSelectItemsIndex = (index) => {
    setSelectedItemsIndex(index);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 bg-[#F3F3F4] rounded-2xl">
      {items.map((item, index) => {
        const isActive = index === selectedItemsIndex;
        return (
          <div
            key={item.label}
            className={`${isActive ? "bg-[#237A37] text-white" : "text-[#8D8A95] cursor-pointer"} flex px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base`}
            onClick={() => handleSelectItemsIndex(index)}
          >
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LocationTabs;
