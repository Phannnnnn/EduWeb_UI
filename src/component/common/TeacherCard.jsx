const TeacherCard = () => {
  return (
    <div className="flex flex-col bg-[#D9D9D9]">
      <div className="px-4 sm:px-6 md:px-8 pt-4">
        <span className="font-medium text-sm sm:text-base">
          Jellyfish Teacher
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center px-4 sm:px-6 md:px-8 py-4 gap-4">
        <div className="w-full sm:min-w-36 sm:w-36 h-48 sm:h-auto bg-white"></div>
        <div className="flex flex-col gap-2 sm:gap-1">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <span className="text-[#237A37] font-medium text-sm sm:text-base">
              Giáo viên:
            </span>
            <span className="text-[#000000] text-sm sm:text-base">
              Korekawa sensei
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <span className="text-[#237A37] font-medium text-sm sm:text-base">
              Trình độ:
            </span>
            <span className="text-[#000000] text-sm sm:text-base">
              Đã tốt nghiệp trường Kaisei University
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <span className="text-[#237A37] font-medium text-sm sm:text-base">
              Kinh nghiệm:
            </span>
            <span className="text-[#000000] text-sm sm:text-base">
              Thành thạo tiếng Nhật và tiếng Anh
            </span>
          </div>
          <div className="pt-2">
            <span className="text-[#000000] text-pretty text-sm sm:text-base">
              Nhận xét về Korekawa sensei: Cô Korekawa da đẹp, dịu dàng, cô luôn
              cố gắng hết mình để giúp chúng em bằng những ví dụ siêu thực tế và
              đáng yêu. Cô còn bổ sung cho chúng em rất nhiều kiến thức về văn
              hóa Nhật và tiếng Nhật. Chúng em yêu quý cô Korekawa lắm."
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 pt-4">
        <div className="bg-[#237A37] p-4 sm:p-5 md:p-6 text-white rounded-lg">
          <p className="text-sm sm:text-base">
            Nhận xét về Korekawa sensei: Cô Korekawa da đẹp, dịu dàng, cô luôn
            cố gắng hết mình để giúp chúng em bằng những ví dụ siêu thực tế và
            đáng yêu. Cô còn bổ sung cho chúng em rất nhiều kiến thức về văn hóa
            Nhật và tiếng Nhật. Chúng em yêu quý cô Korekawa lắm."
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 py-4">
        <span className="text-[#237A37] font-bold text-sm sm:text-base">
          #Korekawa sensei
        </span>
      </div>
    </div>
  );
};

export default TeacherCard;
