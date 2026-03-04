import { Link, useParams } from "react-router-dom";
import curriculum_img_1 from "../../assets/curriculum/curriculum-img-1.png";
import curriculum_img_2 from "../../assets/curriculum/curriculum-img-2.png";
import curriculum_img_3 from "../../assets/curriculum/curriculum-img-3.png";
import curriculum_img_4 from "../../assets/curriculum/curriculum-img-4.png";
import curriculum_img_5 from "../../assets/curriculum/curriculum-img-5.png";
import curriculum_img_6 from "../../assets/curriculum/curriculum-img-6.png";
import { formatVND } from "../../types/utils/fomatters/vndFomatter";
import { useEffect, useState } from "react";
import SideBar from "../../component/common/SideBar";

const sideBarItems = [
  { label: "25 BÀI NGHE HIỂU SƠ CẤP - TẬP 1" },
  { label: "BẢN DỊCH & GIẢI THÍCH NGỮ PHÁP 1" },
  { label: "BẢN DỊCH & GIẢI THÍCH NGỮ PHÁP 2" },
  { label: "NHẬT NGỮ SƠ CẤP - BÀI TẬP Q I" },
  { label: "25 BÀI NGHE HIỂU SƠ CẤP- TẬP 2" },
];

const dataCurriculumpage = [
  {
    id: "1",
    label: "N5 – Bản dịch và giải thích ngữ pháp",
    img: curriculum_img_1,
    oldPrice: 75000,
    newPrice: 52000,
    tag: "Giáo trình N5",
  },
  {
    id: "2",
    label: "N5 – Choukai Nghe hiểu",
    img: curriculum_img_2,
    oldPrice: 95000,
    newPrice: 52000,
    tag: "Giáo trình N5",
  },
  {
    id: "3",
    label: "N5 – Hyoujun Bài tập",
    img: curriculum_img_3,
    oldPrice: 40000,
    newPrice: 34000,
    tag: "Giáo trình N5",
  },
  {
    id: "4",
    label: "N5 – Quyển chính",
    img: curriculum_img_4,
    oldPrice: 95000,
    newPrice: 62000,
    tag: "Giáo trình N5",
  },
  {
    id: "5",
    label: "N5 – Shokyuu Đọc hiểu",
    img: curriculum_img_5,
    oldPrice: 70000,
    newPrice: 50000,
    tag: "Giáo trình N5",
  },
  {
    id: "6",
    label: "Trọn bộ giáo trình N5 (5 quyển)",
    img: curriculum_img_6,
    oldPrice: 375000,
    newPrice: 250000,
    tag: "Giáo trình N5",
  },
];

const Detail = () => {
  const [dataDetailCurriculum, setDataCurriculum] = useState([]);
  const { id } = useParams();
  const [quanSelected, setQuanSelected] = useState(1);

  useEffect(() => {
    if (!id) return;

    const getDataDetailCurriculum = () => {
      const res = dataCurriculumpage.find((item) => item.id === id);
      setDataCurriculum(res);
    };

    getDataDetailCurriculum();
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-6 sm:py-8 md:py-12">
      <div className="w-full lg:w-7/12">
        <div className="py-4">
          <span className="font-bold text-2xl md:text-3xl">
            {dataDetailCurriculum.label}
          </span>
        </div>
        <div
          key={dataDetailCurriculum.id}
          className="flex flex-col items-center lg:items-start sm:flex-row gap-4 md:gap-6"
        >
          <div className="w-full sm:w-1/2">
            <img
              src={dataDetailCurriculum.img}
              alt={dataDetailCurriculum.label}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-[#565E64] font-medium">
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
                <span className="ml-1">{dataDetailCurriculum.tag}</span>
              </span>
            </div>
            <div className="mt-1">
              <span className="text-[#000000] font-semibold text-base sm:text-lg md:text-xl">
                {dataDetailCurriculum.label}
              </span>
            </div>
            <div className="flex gap-2 mt-2 font-medium">
              <span className="text-[#4F4B5C] line-through">
                {formatVND(dataDetailCurriculum.oldPrice)}
              </span>
              <span className="text-[#DC3545]">
                {formatVND(dataDetailCurriculum.newPrice)}
              </span>
            </div>

            <div className="flex w-32 justify-between border-[#000000] border gap-4 font-semibold text-base rounded-lg px-3 py-2 mt-3">
              <button
                className="flex cursor-pointer"
                onClick={() => {
                  if (quanSelected === 0) return;
                  setQuanSelected((prev) => prev - 1);
                }}
              >
                -
              </button>
              <span>{quanSelected}</span>
              <button
                className="cursor-pointer"
                onClick={() => setQuanSelected((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="mt-4">
              <button className="bg-[#237A37] text-[#FFFFFF] font-semibold text-base md:text-lg px-3 py-2 rounded-lg cursor-pointer w-full sm:w-auto">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>

        <div className="text-[#000000] flex flex-col text-sm sm:text-base md:text-lg pt-4 md:pt-6">
          <span className="font-bold text-xl md:text-2xl">
            Bộ giáo trình Minna no nihongo Trình độ N5 gồm:
          </span>

          <span className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl py-4">
            1. Shokyuu Đọc hiểu
          </span>

          <span className="">
            Sách luyện đọc hiểu tương ứng với giáo trình Minna no Nihongo.
          </span>

          <span className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl py-4">
            2. Choukai Nghe hiểu
          </span>

          <span className="">
            Các bài nghe phù hợp với trình độ sơ cấp, có kèm theo lời thoại cho
            các bài nghe ở cuối sách.
          </span>

          <span className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl py-4">
            3. Hyoujun Bài tập
          </span>

          <span className="">
            Bài tập phong phú và đa dạng.Mỗi bài ngữ pháp sẽ có phần luyện tập
            tương ứng, và có thêm phần tổng hợp chung.
          </span>

          <span className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl py-4">
            4. Bản dịch
          </span>

          <span className="">
            Từ vựng: Liệt kê các từ mới liên quan đến nội dung và chủ đề của bài
            học.Phần dịch: Dịch các phần mẫu câu, ví dụ và hội thoại trong quyển
            chính sang tiếng Việt.Giải thích ngữ pháp: giải thích cấu trúc, cách
            sử dụng của các mẫu ngữ pháp có trong bài, kèm ví dụ chi tiết, dễ
            hiểu.
          </span>

          <span className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl py-4">
            5. N5 Quyển chính
          </span>

          <span className="">
            Tóm tắt các cấu trúc ngữ pháp đã học.Các đoạn hội thoại, bài tập
            đọc, nghe, viết sử dụng cấu trúc ngữ pháp đã học.
          </span>
          <span className="mt-4">
            Bộ giáo trình Minna no nihongo Trình độ N5 là bộ sách tiếng Nhật cần
            thiết dành cho các bạn đã hoàn thành xong 2 bảng chữ cái Hiragana,
            Katakana và muốn học tiếng Nhật lâu dài. Tất cả các bài tập trong
            sách đều đi kèm đáp án, do đó đây là bộ sách hiệu quả giúp bạn tự
            học tại nhà.
          </span>
        </div>

        <div>
          <div className="pt-6 md:pt-8 pb-4">
            <span className="font-bold text-2xl md:text-3xl">
              Sản phẩm tương tự
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-8">
            {dataCurriculumpage.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-col">
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
                      <span className="text-[#000000] font-semibold text-base sm:text-lg md:text-xl">
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
      </div>
      <div className="w-full lg:flex-1 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <SideBar label={"Sách bán chạy"} sideBarItems={sideBarItems} />
      </div>
    </div>
  );
};

export default Detail;
