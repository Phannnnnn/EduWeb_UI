import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../../assets/img/logo.png";
import InputSearch from "../../common/InputSearch";
import ButtonSecond from "../../common/ButtonSecond";

const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Về Jellyfish Việt Nam", path: "/about" },
  { label: "Khóa học", path: "/courses" },
  { label: "Lịch khai giảng", path: "/schedule" },
  { label: "Giáo trình", path: "/curriculum" },
  { label: "Kiến thức hữu ích", path: "/knowledge" },
  { label: "Tin tức", path: "/news" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenSearchInputMobile, setIsOpenSearchInputMobile] = useState(false);

  const toggleMenuNavigation = () => {
    setIsMenuOpen((prev) => !prev);
    setIsOpenSearchInputMobile(false);
  };
  const toggleSearchInput = () => {
    setIsOpenSearchInputMobile((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative">
      <div className="flex items-center justify-between lg:justify-evenly py-4 px-4 lg:px-0 bg-white">
        <Link to="/">
          <img
            src={logoImg}
            alt="logo-img"
            className="h-10 lg:h-14 object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <InputSearch />
          <ButtonSecond label={"Đăng ký tư vấn"} />
          <button className="flex items-center bg-[#DC3545] gap-1 py-2 px-5 text-white rounded-lg font-bold text-xl cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                fill="#FEFEFE"
              />
            </svg>
            096.110.6466
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleSearchInput}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                stroke="#237A37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-[1px] h-6 bg-gray-200"></div>
          <button onClick={toggleMenuNavigation} className="text-[#237A37]">
            {isMenuOpen ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className="hidden lg:block bg-[#237A37]">
        <div className="flex justify-center">
          <div className="text-white flex gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`${isActive ? "" : "hover:bg-[#29852B] hover:text-white/80"} relative py-4 px-4 font-semibold transition-all duration-300`}
                >
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-2 left-0 w-full border-b-2 border-white"></div>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#237A37] ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col text-center uppercase tracking-wider">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="border-b border-[#29852B]/50 last:border-none"
            >
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-white font-semibold text-sm hover:bg-[#29852B]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpenSearchInputMobile ? "max-h-screen" : "max-h-0"}`}
      >
        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
