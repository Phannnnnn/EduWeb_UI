import SideBar from "../../component/common/SideBar";
import curriculum_img_1 from "../../assets/curriculum/curriculum-img-1.png";
import curriculum_img_2 from "../../assets/curriculum/curriculum-img-2.png";
import curriculum_img_3 from "../../assets/curriculum/curriculum-img-3.png";
import curriculum_img_4 from "../../assets/curriculum/curriculum-img-4.png";
import curriculum_img_5 from "../../assets/curriculum/curriculum-img-5.png";
import curriculum_img_6 from "../../assets/curriculum/curriculum-img-6.png";
import { formatVND } from "../../types/utils/fomatters/vndFomatter";
import Pagination from "../../component/common/Pagination";
import { Link } from "react-router-dom";

const sideBarItems = [
  { label: "25 BÀI NGHE HIỂU SƠ CẤP - TẬP 1" },
  { label: "BẢN DỊCH & GIẢI THÍCH NGỮ PHÁP 1" },
  { label: "BẢN DỊCH & GIẢI THÍCH NGỮ PHÁP 2" },
  { label: "NHẬT NGỮ SƠ CẤP - BÀI TẬP Q I" },
  { label: "25 BÀI NGHE HIỂU SƠ CẤP- TẬP 2" },
];

const dataCurriculumpage = [
  {
    id: 1,
    label: "N5 – Bản dịch và giải thích ngữ pháp",
    img: curriculum_img_1,
    oldPrice: 75000,
    newPrice: 52000,
    tag: "Giáo trình N5",
  },
  {
    id: 2,
    label: "N5 – Choukai Nghe hiểu",
    img: curriculum_img_2,
    oldPrice: 95000,
    newPrice: 52000,
    tag: "Giáo trình N5",
  },
  {
    id: 3,
    label: "N5 – Hyoujun Bài tập",
    img: curriculum_img_3,
    oldPrice: 40000,
    newPrice: 34000,
    tag: "Giáo trình N5",
  },
  {
    id: 4,
    label: "N5 – Quyển chính",
    img: curriculum_img_4,
    oldPrice: 95000,
    newPrice: 62000,
    tag: "Giáo trình N5",
  },
  {
    id: 5,
    label: "N5 – Shokyuu Đọc hiểu",
    img: curriculum_img_5,
    oldPrice: 70000,
    newPrice: 50000,
    tag: "Giáo trình N5",
  },
  {
    id: 6,
    label: "Trọn bộ giáo trình N5 (5 quyển)",
    img: curriculum_img_6,
    oldPrice: 375000,
    newPrice: 250000,
    tag: "Giáo trình N5",
  },
];

const CurriculumPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-6 sm:py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-7/12">
          <div className="py-4">
            <span className="font-bold text-2xl md:text-3xl">
              Giáo trình N5
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {dataCurriculumpage.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-col justify-center">
                  <Link to={`/detail/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-auto"
                    />
                  </Link>
                  <div className="text-[#565E64] font-medium mt-2">
                    <span className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M4 7H20M4 4V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4Z"
                          stroke="#565E64"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-1">{item.tag}</span>
                    </span>
                  </div>
                  <div className="mt-1 min-h-14">
                    <Link to={`/detail/${item.id}`}>
                      <span className="text-[#000000] font-semibold text-lg md:text-xl">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-4 font-medium">
                    <span className="text-[#4F4B5C] line-through">
                      {formatVND(item.oldPrice)}
                    </span>
                    <span className="text-[#DC3545]">
                      {formatVND(item.newPrice)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <button className="bg-[#237A37] text-[#FFFFFF] font-semibold text-base md:text-lg px-3 py-2 rounded-lg cursor-pointer w-full sm:w-auto">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <aside className="w-full lg:flex-1">
          <SideBar label={"Sách bán chạy"} sideBarItems={sideBarItems} />
        </aside>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};
export default CurriculumPage;
