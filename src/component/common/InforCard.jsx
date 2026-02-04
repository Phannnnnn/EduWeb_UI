const InforCard = () => {
  return (
    <div className="flex flex-col bg-[#D9D9D9]">
      <div className="px-8 pt-4">
        <span className="font-medium ">Jellyfish Teacher</span>
      </div>
      <div className="flex justify-center px-8 py-4 gap-4">
        <div className="min-w-36 bg-white"></div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <span className="text-[#237A37] font-medium">Giáo viên:</span>
            <span className="text-[#000000]">Korekawa sensei</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#237A37] font-medium">Trình độ:</span>
            <span className="text-[#000000]">
              Đã tốt nghiệp trường Kaisei University
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#237A37] font-medium">Kinh nghiệm:</span>
            <span className="text-[#000000]">
              Thành thạo tiếng Nhật và tiếng Anh
            </span>
          </div>
          <div className="pt-2">
            <span className="text-[#000000] text-pretty">
              Nhận xét về Korekawa sensei: Cô Korekawa da đẹp, dịu dàng, cô luôn
              cố gắng hết mình để giúp chúng em bằng những ví dụ siêu thực tế và
              đáng yêu. Cô còn bổ sung cho chúng em rất nhiều kiến thức về văn
              hóa Nhật và tiếng Nhật. Chúng em yêu quý cô Korekawa lắm.”
            </span>
          </div>
        </div>
      </div>

      <div className="px-8 pt-4">
        <div className="bg-[#237A37] p-6 text-white rounded-lg">
          <p>
            Nhận xét về Korekawa sensei: Cô Korekawa da đẹp, dịu dàng, cô luôn
            cố gắng hết mình để giúp chúng em bằng những ví dụ siêu thực tế và
            đáng yêu. Cô còn bổ sung cho chúng em rất nhiều kiến thức về văn hóa
            Nhật và tiếng Nhật. Chúng em yêu quý cô Korekawa lắm.”
          </p>
        </div>
      </div>

      <div className="px-8 py-4">
        <span className="text-[#237A37] font-bold">#Korekawa sensei</span>
      </div>
    </div>
  );
};

export default InforCard;
