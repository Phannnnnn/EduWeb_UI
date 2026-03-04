import { useState } from "react";
import DropDownPage from "./DropdownPage";

const pages = 5;

const Pagination = () => {
  const [currenPage, setCurrentPage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
      <div className="flex gap-2 sm:gap-4 items-center">
        <div>
          <button
            disabled={currenPage === 1}
            className="bg-white text-[#4F4B5C] border border-[#ECECED] cursor-pointer rounded-lg p-2 sm:p-2.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
          >
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
                d="M7.32548 8.99983L11.1626 5.16274L9.83674 3.83691L4.67383 8.99983L9.83674 14.1627L11.1626 12.8369L7.32548 8.99983Z"
                fill="#4F4B5C"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-1">
          {[...Array(pages)].map((_, index) => {
            const isActive = currenPage === index + 1;

            return (
              <span
                key={index}
                className={`${isActive ? "bg-[#237A37] text-white" : "hover:bg-[#237A37] hover:text-white cursor-pointer"} text-[#4F4B5C] font-semibold rounded-lg px-2 sm:px-3 py-2 min-w-8 sm:min-w-10 h-8 sm:h-10 text-center text-sm sm:text-base flex items-center justify-center`}
                onClick={() => {
                  if (isActive) {
                    return;
                  }
                  handleChangePage(index + 1);
                }}
              >
                {index + 1}
              </span>
            );
          })}
        </div>

        <div>
          <button
            disabled={currenPage === pages}
            className="bg-white text-[#4F4B5C] border cursor-pointer border-[#ECECED] rounded-lg p-2 sm:p-2.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
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
                d="M10.674 8.99983L6.83691 5.16274L8.16274 3.83691L13.3257 8.99983L8.16274 14.1627L6.83691 12.8369L10.674 8.99983Z"
                fill="#4F4B5C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden sm:block border-r-2 border-[#F3F3F4] h-6"></div>
      <div className="flex flex-col sm:flex-row items-center font-semibold text-sm sm:text-base text-[#4F4B5C] gap-2 sm:gap-4">
        <span className="whitespace-nowrap">Kết quả mỗi trang:</span>
        <DropDownPage />
      </div>
    </div>
  );
};

export default Pagination;
