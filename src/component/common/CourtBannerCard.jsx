import court_img_banner from "../../assets/img/image34.png";

const CourtBannerCard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={court_img_banner}
        alt={"court-banner"}
        className="object-cover w-full h-48 sm:h-52 md:h-56 lg:h-64"
      />
      <div className="flex flex-col justify-center items-center gap-2 p-3 sm:p-4 w-full">
        <span className="font-semibold text-center text-sm sm:text-base md:text-lg line-clamp-2">
          LƯỢNG TỪ – CÁCH ĐẾM SỐ LƯỢNG TRONG TIẾNG NHẬT
        </span>
        <span className="font-semibold text-[#565E64] text-center text-xs sm:text-sm md:text-base line-clamp-3">
          Cũng giống với tiếng Việt, tiếng Nhật cũng tồn tại cách nói liên quan
          đến số lượng (Còn được gọi là lượng từ).
        </span>
      </div>
    </div>
  );
};

export default CourtBannerCard;
