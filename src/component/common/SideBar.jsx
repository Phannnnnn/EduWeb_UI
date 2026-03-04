import banner_sale from "../../assets/img/banner-sale.png";
import StepBadge from "./StepBadge";

const SideBar = ({ label, sideBarItems = [] }) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="text-[#000000] border border-[#D8D8D8] p-4 rounded-3xl">
        <div className="flex flex-col gap-6 text-xs sm:text-sm lg:text-base">
          <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            {label}
          </span>

          {sideBarItems.map((item, index) => {
            return (
              <div key={item.label} className="flex items-center gap-2">
                <StepBadge label={index + 1} />
                <span className="font-semibold ">{item.label}</span>
              </div>
            );
          })}
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
