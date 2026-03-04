import openning_Schedule_banner from "../../assets/img/openning-schedule-banner.png";
import LocationTabs from "../../component/common/LocationTabs";
import SideBar from "../../component/common/SideBar";

const sideBarItems = [
  { label: "Từ vựng tiếng Nhật chủ đề mùa đông" },
  { label: "Từ vựng tiếng Nhật chủ đề Giáng sinh" },
  { label: " Những mẫu câu giao tiếp tiếng Nhật phổ biến trong lớp học" },
  { label: "Khóa học – Luyện thi N2 cấp tốc cam kết đầu ra tại Jellyfish" },
  { label: "Cuộc thi “Nét bút tri ân” Mừng ngày nhà giáo Việt Nam" },
];

const SchedulePage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-6 sm:py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-7/12">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              LỊCH KHAI GIẢNG THÁNG 4/2023 - JELLYFISH VIỆT NAM
            </h1>

            <div className="pt-3 sm:pt-4">
              <span className="text-[#565E64] font-medium text-sm sm:text-base md:text-lg">
                02/47/2023
              </span>
              <div className="border-b-2 border-[#41464B] mt-2"></div>
            </div>

            <div className="flex justify-center sm:justify-start py-4 sm:py-6 md:py-8">
              <LocationTabs />
            </div>
          </div>

          <div className="w-full">
            <img
              src={openning_Schedule_banner}
              alt="openning-schedule-banner"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <aside className="w-full lg:flex-1">
          <SideBar label={"Bài đăng gần đây"} sideBarItems={sideBarItems} />
        </aside>
      </div>
    </div>
  );
};

export default SchedulePage;
