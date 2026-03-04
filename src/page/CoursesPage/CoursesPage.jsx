import { Link } from "react-router-dom";
import court_banner from "../../assets/img/court-banner.png";
import SideBar from "../../component/common/SideBar";

const sideBarItems = [
  { label: "Từ vựng tiếng Nhật chủ đề mùa đông" },
  { label: "Từ vựng tiếng Nhật chủ đề Giáng sinh" },
  { label: " Những mẫu câu giao tiếp tiếng Nhật phổ biến trong lớp học" },
  { label: "Khóa học – Luyện thi N2 cấp tốc cam kết đầu ra tại Jellyfish" },
  { label: "Cuộc thi “Nét bút tri ân” Mừng ngày nhà giáo Việt Nam" },
];

const CoursesPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex flex-col lg:flex-row py-6 sm:py-8 md:py-12 gap-6 md:gap-12 lg:gap-16 xl:gap-24">
      <div className="w-full lg:w-7/12 flex flex-col text-[#000000] text-sm sm:text-base md:text-lg">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Khóa Học – Luyện Thi JLPT cấp tốc N5, N4, N3, N2
          </h1>
          <span className="text-[#565E64] font-medium text-sm sm:text-base md:text-lg">
            02/07/2021
          </span>

          <div className="border-b-2 border-[#41464B]"></div>

          <p className="font-semibold text-base sm:text-lg md:text-xl p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg">
            Đăng ký khóa học – luyện thi JLPT cấp tốc tại Jellyfish Việt Nam
            ngay để không bỏ lỡ cơ hội nhận bằng JLPT sắp tới.
          </p>

          <p className="leading-relaxed">
            Kỳ thi JLPT đang đến rất gần. Đây chính là thời điểm phù hợp nhất để
            bắt tay vào học và luyện thi chuẩn bị cho kỳ thi tiếng Nhật quan
            trọng này. Để đáp ứng nhu cầu học nhanh – thi tốt – lấy bằng JLPT
            ngay của các bạn học viên, Jellyfish Education tổ chức các lớp học,
            luyện thi dành cho mọi trình độ N5, N4, N3, N2.
          </p>
        </div>

        <div className="w-full py-6 sm:py-8">
          <img
            src={court_banner}
            alt="court-banner"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h2 className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl">
            1. Nội dung khóa học
          </h2>
          <div className="leading-relaxed space-y-2">
            <p>
              - Ôn lại kiến thức cũ - Bám sát nội dung chương trình tương ứng
              N5, N4, N3, N2: Ngữ pháp, Từ vựng, Kanji
            </p>
            <p>
              - Luyện giao tiếp nâng cao với giáo viên người Nhật - Phổ biến nội
              dung thi và các dạng bài trong kỳ thi JLPT
            </p>
            <p>- Luyện đề thi JLPT trình độ N5, N4, N3, N2</p>
            <p>- Tổng hợp các tips, lưu ý làm bài thi JLPT hiệu quả</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h2 className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl">
            2. Thời lượng, học phí và lịch khai giảng
          </h2>
          <div className="leading-relaxed space-y-2">
            <p>
              - Khóa học – luyện thi cấp tốc rút ngắn thời gian học còn 1/2 so
              với khóa học thông thường.
            </p>
            <p>
              - Học phí: liên hệ trực tiếp đến hotline 096.110.6466 để biết
              thông tin học phí chi tiết.
            </p>
            <p>
              - Xem chi tiết lịch khai giảng tại đây:{" "}
              <Link
                to={"/schedule"}
                className="font-semibold underline underline-offset-4"
              >
                LỊCH KHAI GIẢNG CÁC LỚP TIẾNG NHẬT
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h2 className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl">
            3. Tại sao nên đăng ký khóa học – luyện thi cấp tốc tại Jellyfish
            Việt Nam?
          </h2>
          <div className="leading-relaxed space-y-2">
            <p>
              - Khóa học cam kết học viên nắm vững các kiến thức ngữ pháp, từ
              vựng, kanji để vượt qua kỳ thi (tương ứng N5, N4, N3, N2).
            </p>
            <p>
              - Tối ưu thời gian: Với khóa học – luyện thi cấp tốc, thời gian
              học và ôn thi rút ngắn còn 1/2 so với các khóa học thông thường.
            </p>
            <p>
              - Đội ngũ giáo viên chất lượng: Các giáo viên có trình độ chuyên
              môn cao được tuyển chọn kỹ lưỡng. Giáo viên Nhật Bản sau khi được
              tuyển chọn trực tiếp tại Nhật sẽ được đào tạo và thực tập tại Học
              viện giáo dục quốc tế Tochigi. Giáo viên Việt Nam có trình độ N1,
              N2 tốt nghiệp từ các trường đại học nổi tiếng, có kinh nghiệm
              giảng dạy và kinh nghiệm sống, làm việc tại Nhật Bản.
            </p>
            <p>
              - Giáo trình giảng dạy được chuẩn hóa: Giáo trình giảng dạy được
              các cố vấn chuyên môn Nhật Bản và Việt Nam xây dựng dựa trên yêu
              cầu và đặc trưng riêng của các học viên người Việt.
            </p>
            <p>
              - Quy mô lớp học tiêu chuẩn: Các lớp học luôn được đảm bảo số học
              viên dưới 15 người để tối ưu sự tương tác giữa học viên và giáo
              viên. Trung tâm tiếng Nhật của Jellyfish Việt Nam được thiết kế mô
              phỏng khuôn viên của các trường Nhật ngữ tại Nhật Bản, với bố trí
              thân thiện và khoa học. Các lớp học đều được trang bị đầy đủ các
              tiện nghi phục vụ hoạt động dạy học như: điều hòa, máy tính, máy
              chiếu,…
            </p>
            <p>
              - Chính sách học trọn đời: Học viên được học lại một khóa tiếng
              Nhật MIỄN PHÍ 100% học phí trong trường hợp cảm thấy bản thân chưa
              nắm vững kiến thức hoặc kiến thức bị mai một (khóa học đăng ký lại
              tương đương với khóa học đã đăng ký liền trước). Chi tiết xem tại:{" "}
              <a
                className="text-[#237A37] underline underline-offset-4 hover:text-[#1f6830] break-all"
                href="http://bit.ly/csach-hoc-tron-doi"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://bit.ly/csach-hoc-tron-doi
              </a>
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="text-[#084298] font-semibold text-base sm:text-lg md:text-xl">
            4. Những lợi ích khi có chứng chỉ JLPT
          </h2>
          <div className="leading-relaxed">
            <p className="py-4">
              - Cơ hội việc làm rộng mở.
              <br />- Mức thu nhập hấp dẫn hơn so mức bình thường.
              <br />- Cơ hội đi du học chi phí thấp, cơ hội giành nhiều học
              bổng.
              <br />- Cơ hội sống và làm việc tại đất nước Nhật Bản.
              <br />- Học hỏi và tiếp xúc với nền văn hóa mới.
            </p>
          </div>
        </div>

        <p className="">
          Nếu bạn đang tìm kiếm một trung tâm dạy tiếng Nhật chất lượng với đội
          ngũ giáo viên nhiệt tình chuyên môn cao, thì Jellyfish Việt Nam chính
          là lựa chọn tốt nhất dành cho bạn!
        </p>
      </div>

      <aside className="w-full lg:w-5/12 lg:flex-1">
        <SideBar label={"Bài đăng gần đây"} sideBarItems={sideBarItems} />
      </aside>
    </div>
  );
};

export default CoursesPage;
