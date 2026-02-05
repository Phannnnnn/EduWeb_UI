import IndexCirle from "./IndexCircle";
import banner_sale from "../../assets/img/banner-sale.png";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="text-[#000000] border border-[#D8D8D8] p-4 rounded-3xl">
        <div className="flex flex-col gap-6">
          <span className="font-semibold text-xl">Bài đăng gần đây</span>
          <div className="flex items-center gap-2">
            <IndexCirle label={"1"} />
            <span className="font-semibold ">
              Từ vựng tiếng Nhật chủ đề mùa đông
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndexCirle label={"2"} />
            <span className="font-semibold ">
              Từ vựng tiếng Nhật chủ đề Giáng sinh
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndexCirle label={"3"} />
            <span className="font-semibold ">
              Những mẫu câu giao tiếp tiếng Nhật phổ biến trong lớp học
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndexCirle label={"4"} />
            <span className="font-semibold ">
              Khóa học – Luyện thi N2 cấp tốc cam kết đầu ra tại Jellyfish
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IndexCirle label={"5"} />
            <span className="font-semibold ">
              Cuộc thi “Nét bút tri ân” Mừng ngày nhà giáo Việt Nam
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src={banner_sale}
          alt="banner-sale"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SideBar;
