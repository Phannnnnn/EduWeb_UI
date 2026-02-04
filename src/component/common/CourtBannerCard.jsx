import court_img_banner from "../../assets/img/image34.png";

const CourtBannerCard = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <img
        src={court_img_banner}
        alt={"court-banner"}
        className="object-contain"
      />
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <span className="font-semibold text-pretty text-center text-lg">
          LƯỢNG TỪ – CÁCH ĐẾM SỐ LƯỢNG TRONG TIẾNG NHẬT
        </span>
        <span className="font-semibold text-[#565E64] text-pretty text-base">
          Cũng giống với tiếng Việt, tiếng Nhật cũng tồn tại cách nói liên quan
          đến số lượng (Còn được gọi là lượng từ).
        </span>
      </div>
    </div>
  );
};

export default CourtBannerCard;
