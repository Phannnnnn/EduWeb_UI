import Pagination from "../../component/common/Pagination";
import SideBar from "../../component/common/SideBar";
import knowledge_page_1 from "../../assets/knowledge/knowledge-page-1.png";
import knowledge_page_2 from "../../assets/knowledge/knowledge-page-2.png";
import knowledge_page_3 from "../../assets/knowledge/knowledge-page-3.png";
import knowledge_page_4 from "../../assets/knowledge/knowledge-page-4.png";
import knowledge_page_5 from "../../assets/knowledge/knowledge-page-5.png";

const sideBarItems = [
  { label: "Từ vựng tiếng Nhật chủ đề mùa đông" },
  { label: "Từ vựng tiếng Nhật chủ đề Giáng sinh" },
  { label: " Những mẫu câu giao tiếp tiếng Nhật phổ biến trong lớp học" },
  { label: "Khóa học – Luyện thi N2 cấp tốc cam kết đầu ra tại Jellyfish" },
  { label: "Cuộc thi Nét bút tri ân Mừng ngày nhà giáo Việt Nam" },
];

const dataKnowledge = [
  {
    id: "1",
    img: knowledge_page_1,
    title: "10 TIÊU CHÍ ĐÁNH GIÁ TRUNG TÂM DU HỌC NHẬT BẢN UY TÍN",
    date: "22/09/2023",
    content:
      "Làm thế nào để chọn được trung tâm du học Nhật Bản uy tín hẳn là câu hỏi của rất nhiều bạn đang ấp ủ giấc mơ du học Nhật. Đã có rất nhiều trường hợp vì chọn sai công ty du học mà rơi vào tình huống dở khóc dở cười: Tốn tiền, tốn […]...",
  },
  {
    id: "2",
    img: knowledge_page_2,
    title: "HỌC BỔNG 100% NGÀNH ĐIỀU DƯỠNG TỈNH FUKUI 2023 – 2024",
    date: "22/09/2023",
    content:
      "Chương trình học bổng 100% ngành điều dưỡng của tỉnh Fukui hiện là một trong những học bổng tốt nhất năm 2023 – 2024. Học bổng hỗ trợ toàn bộ học phí trong suốt 4 năm học và chỉ yêu cầu tiếng Nhật ở trình độ N5. [...]...",
  },
  {
    id: "3",
    img: knowledge_page_3,
    title: "TRƯỜNG NHẬT NGỮ FIRST STUDY OSAKA",
    date: "22/09/2023",
    content:
      "Trường Nhật ngữ First Study nằm tại thành phố Osaka, được đánh giá là một trong những trường Nhật ngữ có khả năng hỗ trợ học sinh tốt nhất Nhật Bản. Với triết lý giáo dục Đào tạo các du học sinh nước ngoài ưu tú lên trình độ tiếng Nhật ...",
  },
  {
    id: "4",
    img: knowledge_page_4,
    title: "TỔNG CHI PHÍ DU HỌC NHẬT BẢN LÀ BAO NHIÊU?",
    date: "22/09/2023",
    content:
      "Chi phí du học Nhật Bản là một trong những vấn đề được quan tâm hàng đầu khi đi du học và cũng là mồi câu của nhiều cơ sở du học lừa đảo. Để giúp các bạn DHS và phụ huynh có cái nhìn chính xác, rõ ràng và chi tiết về các khoả...",
  },
  {
    id: "5",
    img: knowledge_page_5,
    title: "HỌC BỔNG TOÀN PHẦN NGÀNH ĐIỀU DƯỠNG TẠI HOKKAIDO – KỲ 4/2024",
    date: "22/09/2023",
    content:
      "Học bổng toàn phần ngành điều dưỡng của tỉnh Hokkaido hiện là học bổng du học điều dưỡng có giá trị nhất hiện nay. Chương trình tuyển sinh kỳ tháng 4/2024, chi trả toàn bộ học phí 3 năm tại trường Nhật ngữ, trường chuyên môn và phí ...",
  },
];

const KnowledgePage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-6 sm:py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-7/12">
          <div className="py-4">
            <span className="font-bold text-2xl md:text-3xl">
              Kiến thức hữu ích
            </span>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {dataKnowledge.map((item) => {
              return (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-7/12">
                    <img
                      src={item.img}
                      alt={"image"}
                      className="h-auto object-contain w-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-base md:text-lg">
                        {item.title}
                      </span>
                      <span className="flex gap-2 items-center text-sm md:text-base">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M2.25 6.625C2.25 4.41586 4.04086 2.625 6.25 2.625H11.75C13.9591 2.625 15.75 4.41586 15.75 6.625V12.5C15.75 14.7091 13.9591 16.5 11.75 16.5H6.25C4.04086 16.5 2.25 14.7091 2.25 12.5V6.625Z"
                            stroke="#8D8A95"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M2.25 6.75H15.75"
                            stroke="#8D8A95"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6 1.5L6 3.75"
                            stroke="#8D8A95"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 1.5V3.75"
                            stroke="#8D8A95"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="9" cy="11.25" r="0.75" fill="#8D8A95" />
                          <circle cx="12" cy="11.25" r="0.75" fill="#8D8A95" />
                          <circle cx="6" cy="11.25" r="0.75" fill="#8D8A95" />
                        </svg>
                        {item.date}
                      </span>
                      <span className="text-sm md:text-base line-clamp-3 sm:line-clamp-none">
                        {item.content}
                      </span>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 cursor-pointer bg-[#D8EEDD] text-[#237A37] rounded-lg px-3 py-2 text-sm md:text-base font-medium">
                        Xem thêm
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M10.5 6L13.5 9M13.5 9L10.5 12M13.5 9L4.5 9"
                            stroke="#237A37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:flex-1 flex flex-col gap-8 md:gap-12 lg:gap-16">
          <SideBar label={"Sách bán chạy"} sideBarItems={sideBarItems} />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default KnowledgePage;
