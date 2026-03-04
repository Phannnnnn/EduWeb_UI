import jellyfish_banner_infor from "../../assets/img/jellyfish-banner.png";
import variant_1 from "../../assets/icon/Variant-1.png";
import variant_2 from "../../assets/icon/Variant-2.png";
import variant_3 from "../../assets/icon/Variant-3.png";
import variant_4 from "../../assets/icon/Variant-4.png";
import StatsSection from "../../component/common/StatsSection";

const About = () => {
  const sectionPadding = "px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48";

  return (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <img
          src={jellyfish_banner_infor}
          alt="jellyfish-banner-infor"
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        className={`${sectionPadding} py-8 md:py-12 flex flex-col text-[#000000] text-sm sm:text-base md:text-lg leading-relaxed`}
      >
        <h2 className="text-[#237A37] font-bold text-lg sm:text-xl md:text-2xl uppercase">
          JELLYFISH LÀ GÌ?
        </h2>
        <div className="pt-4">
          <p>
            Jellyfish Việt Nam - trực thuộc tập đoàn Jellyfish Nhật Bản, hoạt
            động trong lĩnh vực:
            <br /> - Đào tạo ngôn ngữ và văn hóa Nhật Bản mọi cấp độ, tập trung
            phát triển đồng đều các kỹ năng, đặc biệt kỹ năng giao tiếp trong
            môi trường học tập và làm việc.
            <br />- Đào tạo tiếng Việt từ cơ bản đến nâng cao cho người nước
            ngoài có mục tiêu sống, học tập, làm việc lâu dài tại Việt Nam.
            <br />- Tư vấn du học và cung cấp các dịch vụ hỗ trợ du học sinh:
            hoàn thiện hồ sơ xin COE, visa du học, giới thiệu việc làm sau khi
            hoàn thành chương trình học;
            <br />– Tư vấn giải pháp phát triển và kết nối nhân sự chất lượng
            cao cho các doanh nghiệp trong và ngoài nước.
          </p>
        </div>
        <h3 className="text-[#000000] font-semibold text-base sm:text-lg md:text-xl pt-4">
          Ý nghĩa của Jellyfish:
        </h3>
        <p className="py-4">
          Jellyfish dịch sang tiếng Việt có nghĩa là “Con Sứa”, đặc điểm điển
          hình: <br />- Một loài động vật biển: Nhật Bản - đất nước của biển
          <br />- Không có vỏ, thân trong suốt: Sự tinh khiết, sự chân thành và
          sự thật
          <br />- Sống theo đàn, di cư, sinh sản nhanh: Tinh thần gắn kết vì sự
          phát triển xuyên quốc gia
        </p>
        <p>
          Những đặc điểm điển hình của “Jellyfish – Sứa” chính là cơ sở tiền đề
          cho mọi hoạt động phát triển của chúng tôi.
        </p>
        <p className="py-4">
          Sau 15 năm phát triển, bằng tâm huyết, sự chia sẻ và thấu hiểu sâu
          sắc, tập đoàn Jellyfish nói chung, Jellyfish Việt Nam nói riêng, đã
          truyền cảm hứng và trở thành cầu nối cho hàng nghìn tài năng trẻ Việt
          Nam đến với những cơ hội học tập và làm việc tốt hơn.
        </p>
        <h2 className="text-[#237A37] font-bold text-lg sm:text-xl md:text-2xl py-4 uppercase">
          TẦM NHÌN – SỨ MỆNH – PHƯƠNG CHÂM HOẠT ĐỘNG
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-base sm:text-lg md:text-xl">
              1. Tầm nhìn
            </h4>
            <p>
              - Trở thành doanh nghiệp dẫn đầu trong cung ứng giải pháp phát
              triển nhân sự toàn diện, có chiều sâu, thích ứng tốt với sự thay
              đổi đa chiều, không ngừng nghỉ của thế giới.
              <br />- Tiên phong đồng hành cùng người Việt trẻ trong hành trình
              nâng tầm vị thế trên thị trường nhân sự quốc tế.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg md:text-xl">
              2. Sứ mệnh
            </h4>
            <p className="py-4">
              - Cam kết luôn cập nhật xu hướng giáo dục và nhu cầu nhân sự toàn
              cầu.
              <br />- Luôn nỗ lực nghiên cứu, tạo nên các chương trình đào tạo,
              phát triển nhân sự đón đầu xu hướng.
            </p>
            <p>
              Các dịch vụ của Jellyfish Việt Nam tạo nên một vòng tròn khép kín,
              mang đến cho khách hàng giải pháp phát triển toàn diện, từ khâu
              đào tạo các thế hệ học viên chất lượng; tư vấn chọn trường, chọn
              ngành, chọn quốc gia du học phù hợp với khả năng và mong muốn của
              học viên; đến khâu định hướng, kết nối cơ hội việc làm tại các
              doanh nghiệp hàng đầu Việt Nam và Nhật Bản. Với những giá trị này,
              Jellyfish Việt Nam hy vọng sẽ trở thành sự lựa chọn đáng tin cậy
              nhất của tất cả các bạn trẻ Việt Nam mang trong mình đầy ước mơ và
              hoài bão.
            </p>
            <h4 className="font-semibold text-base sm:text-lg md:text-xl pt-4">
              3. Phương châm hoạt động
            </h4>
            <p className="py-4">
              True people – True value: Con người thực – Giá trị thực.
            </p>
            <p>
              Là doanh nghiệp Nhật Bản, Jellyfish luôn chú trọng xây dựng và
              phát triển dịch vụ hướng tới những giá trị thiết thực nhất cho
              khách hàng. Giá trị dịch vụ mà Jellyfish cung cấp thể hiện qua
              chính chất lượng của những thế hệ người Việt trẻ được chúng tôi
              đào tạo, dẫn dắt và định hướng.
            </p>
            <p className="pt-4">
              Không hoa mỹ, không cầu kỳ, tập trung nỗ lực giúp thế hệ trẻ Việt
              Nam trở nên tự tin, năng động và hội nhập – Đó là phương châm hoạt
              động không bao giờ thay đổi của Jellyfish Việt Nam.
            </p>
            <h4 className="font-semibold text-base sm:text-lg md:text-xl py-4">
              4. Slogan
            </h4>
            <p>Expand your horizons – Hãy mở rộng tầm nhìn của bạn.</p>
            <p className="py-4">
              Bước ra thế giới, trải nghiệm nhiều hơn và học hỏi nhiều hơn – Đó
              là nhu cầu chính đáng và là điều mà các bạn trẻ nên làm. Bằng cách
              cung cấp các trải nghiệm giáo dục và cơ hội việc làm mới,
              Jellyfish mong muốn mang đến các cơ hội tự hoàn thiện chính mình
              cho các tài năng Việt; sẵn sàng đồng hành cùng các bạn trong cuộc
              hành trình chinh phục tri thức, khám phá giới hạn và mở rộng tầm
              nhìn của chính mình.
            </p>

            <h2 className="text-[#237A37] font-bold text-lg sm:text-xl md:text-2xl">
              JELLYFISH – NƠI NHỮNG THÀNH TỰU LÀ ĐỘNG LỰC ĐỂ TIẾP TỤC DUY TRÌ CỐ
              GẮNG
            </h2>

            <p className="py-4">
              Phương châm hoạt động của Jellyfish là Con người thực – Giá trị
              thực. Bởi vậy, thành công của khách hàng chính là nguồn động lực
              lớn lao để chúng tôi tiếp tục cố gắng và ngày càng hoàn thiện.
            </p>
            <p>
              Cùng điểm lại những con số minh chứng cho sự nỗ lực không ngừng
              nghỉ của toàn thể đội ngũ nhân viên Jellyfish Việt Nam Việt Nam:
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - Already responsive in your code, just adjusted container */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-4 md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#C6C7C8] rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 gap-3 md:gap-4">
          <StatsSection
            image={variant_1}
            value={"150"}
            label={
              "L à số lượng nhân viên Jellyfish Việt Nam, luôn sẵn sàng hỗ trợ học viên thực hiện ước mơ của mình."
            }
          />
          <StatsSection
            image={variant_2}
            value={"250"}
            label={
              "Là số lượng đối tác trường học, doanh nghiệp tại Việt Nam đã và đang sử dụng dịch vụ đào tạo, kết nối nhân sự của Jellyfish Việt Nam."
            }
          />
          <StatsSection
            image={variant_3}
            value={"500"}
            label={
              "Là số lượng ứng viên hàng năm Jellyfish hỗ trợ, kết nối thành công đến các doanh nghiệp nước ngoài tại Việt Nam và Nhật Bản."
            }
          />
          <StatsSection
            image={variant_4}
            value={"1200"}
            label={
              "Là số du học sinh trung bình hàng năm Jellyfish đào tạo, chắp cánh cho ước mơ du học và làm việc ở môi trường quốc tế."
            }
          />
        </div>
      </div>

      {/* Footer Content Section */}
      <div
        className={`${sectionPadding} pt-8 pb-16 flex flex-col text-[#000000] text-sm sm:text-base md:text-lg leading-relaxed`}
      >
        <p className="pb-4">
          Lấy CHẤT LƯỢNG là kim chỉ nam cho mọi hoạt động, chúng tôi luôn cải
          tiến phương pháp đào tạo, mở rộng phạm vi kết nối với các trường danh
          tiếng trên thế giới.
        </p>
        <h2 className="text-[#237A37] font-bold text-lg sm:text-xl md:text-2xl py-4 uppercase">
          HÃY ĐẾN JELLYFISH ĐỂ TRẢI NGHIỆM NHỮNG DỊCH VỤ CHẤT LƯỢNG VÀ MỞ RỘNG
          GIỚI HẠN CỦA CHÍNH BẠN!
        </h2>
      </div>
    </div>
  );
};

export default About;
