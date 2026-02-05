import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../../../assets/img/logo.png";
import InputSearch from "../../common/InputSearch";
import ButtonSecond from "../../common/ButtonSecond";

const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Về Jellyfish Việt Nam", path: "/jellyfish-infor" },
  { label: "Khóa học", path: "/court" },
  { label: "Lịch khai giảng", path: "/openning-schedule" },
  { label: "Giáo trình", path: "/curriculum" },
  { label: "Kiến thức hữu ích", path: "/knowledge" },
  { label: "Tin tức", path: "/news" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="flex items-center justify-evenly py-5">
        <Link>
          <img src={logoImg} alt="logo-img" className="object-contain" />
        </Link>
        <div className="flex gap-12">
          <InputSearch />

          <ButtonSecond label={"Đăng ký tư vấn"} />
          <button className="flex items-center bg-[#DC3545] gap-1 py-2 px-5 text-white rounded-lg font-bold text-xl cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                fill="#FEFEFE"
              />
            </svg>
            096.110.6466
          </button>
        </div>
      </div>
      <div className="bg-[#237A37] flex items-center justify-center">
        <div className="text-white flex gap-16 py-5">
          <>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`${isActive ? "pb-1 border-b-[white]" : "border-transparent"} border-b-2 font-semibold text-base`}
                >
                  {item.label}
                </Link>
              );
            })}
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
