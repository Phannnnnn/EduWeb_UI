import banner from "../../assets/img/banner.png";
import variant_1 from "../../assets/icon/Variant-1.png";
import variant_2 from "../../assets/icon/Variant-2.png";
import variant_3 from "../../assets/icon/Variant-3.png";
import variant_4 from "../../assets/icon/Variant-4.png";
import court_slide_1 from "../../assets/slide/slide-1.png";
import court_slide_2 from "../../assets/slide/slide-2.png";
import court_slide_3 from "../../assets/slide/slide-3.png";
import court_slide_4 from "../../assets/slide/slide-4.png";
import book_img_1 from "../../assets/book-img/book-img-1.png";
import book_img_2 from "../../assets/book-img/book-img-2.png";
import book_img_3 from "../../assets/book-img/book-img-3.png";
import book_img_4 from "../../assets/book-img/book-img-4.png";
import book_img_5 from "../../assets/book-img/book-img-5.png";
import book_img_6 from "../../assets/book-img/book-img-6.png";
import comment_img_1 from "../../assets/comment/comment-img-1.png";
import comment_img_2 from "../../assets/comment/comment-img-2.png";
import comment_img_3 from "../../assets/comment/comment-img-3.png";
import banner_sale from "../../assets/img/banner-sale.png";
import CounterCard from "../../component/common/CounterCard";
import ButtonSecond from "../../component/common/ButtonSecond";
import InforCard from "../../component/common/InforCard";
import CourtBannerCard from "../../component/common/CourtBannerCard";
import InputText from "../../component/common/InputText";
import SelectionInput from "../../component/common/SelectionInput";

const courtSlideItems = [
  { img: court_slide_1, label: "court-slide-1" },
  { img: court_slide_2, label: "court-slide-2" },
  { img: court_slide_3, label: "court-slide-3" },
  { img: court_slide_4, label: "court-slide-4" },
];

const bookImgItems = [
  { img: book_img_1, label: "book-img-1" },
  { img: book_img_2, label: "book-img-2" },
  { img: book_img_3, label: "book-img-3" },
  { img: book_img_4, label: "book-img-4" },
  { img: book_img_5, label: "book-img-5" },
  { img: book_img_6, label: "book-img-6" },
];

const commentImgItems = [
  { img: comment_img_1, label: "comment-img-1" },
  { img: comment_img_2, label: "comment-img-2" },
  { img: comment_img_3, label: "comment-img-3" },
];

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={banner} alt="banner-img" />
      </div>
      <div className="px-40 py-6">
        <div className="flex bg-[#C6C7C8] justify-start rounded-lg p-12 gap-4">
          <CounterCard
            image={variant_1}
            value={"500"}
            label={
              "Là số lượng học viên hàng tháng của Trung tâm Jellyfish Vietnam trên khắp cả nước."
            }
          />
          <CounterCard
            image={variant_2}
            value={"60"}
            label={
              "Là số lớp mở hàng tháng bao gồm lớp online và offline tại tất cả các chi nhánh."
            }
          />
          <CounterCard
            image={variant_3}
            value={"20"}
            label={
              "Là số lượng doanh nghiệp & trường học đã, đang sử dụng dịch vụ đào tạo của Jellyfish."
            }
          />
          <CounterCard
            image={variant_4}
            value={"150"}
            label={
              "Là số lượng giáo viên và nhân viên của trung tâm Nhật ngữ Jellyfish Vietnam."
            }
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonSecond label={"Đăng ký nhận tư vấn"} />
      </div>
      <div className="flex justify-center items-center py-4 mt-3">
        <span className="font-bold text-2xl">
          Khóa học tiếng Nhật từ cơ bản đến nâng cao
        </span>
      </div>
      <div className="flex justify-center items-center gap-8">
        {courtSlideItems.map((item) => (
          <img
            key={item.label}
            src={item.img}
            alt={item.label}
            className="object-contain w-52"
          />
        ))}
      </div>
      <div className="flex justify-center py-6">
        <ButtonSecond label={"Nhận tư vấn miễn phí"} />
      </div>
      <div className="flex justify-evenly items-center gap-16 py-4 px-90">
        <div className="">
          <span className="font-semibold text-lg text-pretty">
            Bộ sách tiếng Nhật dành cho người mới học đến học chuyên sâu
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {bookImgItems.map((item) => (
            <img
              key={item.label}
              src={item.img}
              alt={item.label}
              className="object-contain w-36"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonSecond label={"Xem tất cả giáo trình"} />
      </div>
      <div className="flex justify-center items-center py-4 mt-3">
        <span className="font-bold text-2xl">
          Đội ngũ giảng viên - chuyên gia tại Jellyfish
        </span>
      </div>

      <div className="flex px-48">
        <div className="flex gap-6">
          <InforCard />
          <InforCard />
        </div>
      </div>

      <div className="flex justify-center items-center py-4 mt-5">
        <span className="font-bold text-2xl">
          Học viên nói gì về Jellyfish?
        </span>
      </div>

      <div className="flex gap-4 justify-between px-48 ">
        {commentImgItems.map((item) => (
          <img
            key={item.label}
            src={item.img}
            alt={item.label}
            className="object-contain"
          />
        ))}
      </div>

      <div className="flex justify-center items-center py-4 mt-5">
        <span className="font-bold text-2xl">Bản tin Jellyfish</span>
      </div>

      <div className="flex justify-center items-center">
        <span className="font-semibold text-lg text-center max-w-2xl text-[#41464B]">
          Chia sẻ những hoạt động nổi bật, hình ảnh, khoảnh khắc đáng nhớ của
          học viên Jellyfish Việt Nam.
        </span>
      </div>

      <div className="flex justify-between px-48 py-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
          <div className="w-90 h-90 bg-[#D9D9D9]"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <ButtonSecond label={"Đăng ký học ngay"} />
      </div>

      <div className="bg-[#D9D9D9] mt-4">
        <div className="px-48 pb-24 flex flex-col">
          <div className="pb-4 mt-5">
            <div className="flex justify-center items-center ">
              <span className="font-bold text-2xl">Kiến thức hữu ích</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="font-semibold text-lg text-center max-w-2xl text-[#41464B]">
                Cung cấp những kinh nghiệm, bí kíp học tiếng Nhật từ sơ cấp đến
                cao cấp.
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <CourtBannerCard />
            <CourtBannerCard />
            <CourtBannerCard />
          </div>
        </div>
      </div>

      <div className="px-48 flex gap-24 py-12">
        <div>
          <img src={banner_sale} alt="banner-sale" className="object-contain" />
        </div>
        <div>
          <div className="flex justify-center items-center ">
            <span className="font-bold text-2xl">
              Đăng ký học tiếng Nhật tại Jellyfish
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <InputText
              id={"fullName"}
              label={"Họ và tên bạn"}
              placeholder={""}
            />
            <InputText
              id={"phone"}
              label={"Số điện thoại của bạn"}
              placeholder={""}
            />
            <InputText
              id={"Email"}
              label={"Email bạn hay sử dụng"}
              placeholder={""}
            />
            {/* <SelectionInput
              id={"select-court"}
              label={"Vui lòng chọn khóa học để được tư vấn"}
            /> */}

            <div className="flex justify-center mt-3">
              <ButtonSecond label={"Nhận tư vấn miễn phí"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
