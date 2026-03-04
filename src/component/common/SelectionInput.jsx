import { useEffect, useRef, useState } from "react";

const courtItems = [
  { label: "N5 (Dành cho người bắt đầu)" },
  { label: "N4" },
  { label: "N3" },
  { label: "N2" },
  { label: "Khóa học giao tiếp" },
  { label: "Đăng ký thi thử tiếng Nhật đề chuẩn JLPT" },
];

const SelectionInput = ({ id, label = "Số điện thoại" }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCourtIndex, setSelectedCourtIndex] = useState(0);
  const dropdownRef = useRef(null);

  const handleOpenMenu = () => setOpenMenu((prev) => !prev);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full max-w-[600px]">
      <label className="text-[#000000] flex items-center gap-1 font-bold text-[18px] mb-2">
        {label} <span className="text-[#DC3545]">*</span>
      </label>

      <div className="relative">
        {/* Menu danh sách - Hiển thị đè lên phía trên theo ảnh mẫu */}
        {openMenu && (
          <div className="absolute bottom-0 left-0 z-50 w-full bg-white border border-[#899197] rounded-lg shadow-sm">
            <div className="flex flex-col">
              {courtItems.map((item, index) => {
                const isActive = index === selectedCourtIndex;
                return (
                  <div
                    key={index}
                    onClick={() => handleSelectCourtIndex(index)}
                    className={`px-4 py-3 text-[16px] cursor-pointer transition-colors
                      ${isActive ? "bg-[#6C757D] text-white" : "text-[#141619] hover:bg-[#899197]"}
                      border-b border-[#899197] last:border-none`}
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
          className="flex justify-between items-center text-[#141619] border border-[#899197] rounded-lg w-full px-4 py-3 bg-white cursor-pointer"
        >
          <span className="text-[16px]">
            {courtItems[selectedCourtIndex].label}
          </span>
          <svg
            className={`transition-transform duration-200 ${openMenu ? "rotate-180" : ""}`}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21l-12-18h24z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectionInput;
