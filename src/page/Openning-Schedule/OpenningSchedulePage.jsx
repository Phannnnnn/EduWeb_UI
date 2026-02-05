import openning_Schedule_banner from "../../assets/img/openning-schedule-banner.png";
import SelectionVertical from "../../component/common/SelectionVertical";
import SideBar from "../../component/common/SideBar";

const OpenningSchedulePage = () => {
  return (
    <div className="px-48 flex py-12 gap-24">
      <div className="size-7/12">
        <div className="flex flex-col">
          <span className=" text-3xl font-bold">
            LỊCH KHAI GIẢNG THÁNG 4/2023 - JELLYFISH VIỆT NAM
          </span>
          <div className="pt-4">
            <span className="text-[#565E64] font-medium text-lg">
              02/47/2023
            </span>
            <div className="border-b-2 border-[#41464B]"></div>
          </div>
          <div className="py-8 flex">
            <SelectionVertical />
          </div>
        </div>
        <div className="w-full">
          <img
            src={openning_Schedule_banner}
            alt="openning-schedule-banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-16">
        <SideBar />
      </div>
    </div>
  );
};

export default OpenningSchedulePage;
