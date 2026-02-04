import { Link } from "react-router-dom";
import logoImg from "../../../assets/img/logo-transparent.png";

const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Về Jellyfish", path: "" },
  { label: "Khóa học", path: "" },
  { label: "Giáo trình", path: "" },
  { label: "Kiến thức hữu ích", path: "" },
];

const Footer = () => {
  return (
    <footer className="px-48 bg-[#110C22]">
      <div className="flex items-center justify-between py-8">
        <Link>
          <img src={logoImg} alt="logo-img" className="object-contain" />
          <span className="text-white font-extrabold text-sm">
            Expand your horizons
          </span>
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link to={item.path} className="font-semibold text-base text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border border-b-[#2E293D]"></div>

      <div className="py-4 flex justify-between gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold">JELLYFISH JAPAN</span>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="11"
                r="3"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
            </svg>
            <span className="text-[#B3B1B8]">
              4F Westhill Building, Nishigotanda 2-24-4, Shinagawa, Tokyo, Japan
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="#B3B1B8"
                  stroke-width="1.5"
                />
              </svg>

              <span className="text-[#B3B1B8]">https://jellyfish-g.co.jp</span>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#B3B1B8]">job_info@jellyfish-g.co.jp</span>
          </div>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#B3B1B8]">03-5437-0135</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold">JELLYFISH VIỆT NAM</span>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="11"
                r="3"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
            </svg>
            <span className="text-[#B3B1B8]">
              Tầng 13, CMC Tower, 11 Duy Tân , P. Dịch Vọng Hậu, Q. Cầu Giấy,
              TP. Hà Nội
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="#B3B1B8"
                  stroke-width="1.5"
                />
              </svg>

              <span className="text-[#B3B1B8]">https://jellyfish-vn.com</span>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#B3B1B8]">admin@jellyfish-vn.com</span>
          </div>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#B3B1B8]">0243.7955.846</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold">Chi nhánh Hải Phòng</span>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="11"
                r="3"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
              />
            </svg>
            <span className="text-[#B3B1B8]">
              Tầng 3, CMC Tower, tòa nhà Sholega, 275 Lạch Tray, Ngô Quyền, TP.
              Hải Phòng
            </span>
          </div>

          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="#B3B1B8"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#B3B1B8]">0969.895.759</span>
          </div>
        </div>
      </div>

      <div className="border border-b-[#2E293D]"></div>

      <div className="flex justify-between p-8">
        <div>
          <span className="text-[#B3B1B8]">
            © 2023 Jellyfish. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M18.8599 3C21.069 3 22.8599 4.79086 22.8599 7V17C22.8599 19.2091 21.069 21 18.8599 21H5.14014C2.931 21 1.14014 19.2091 1.14014 17V7C1.14014 4.79086 2.931 3 5.14014 3H18.8599ZM10.4478 8.72363C9.78285 8.39118 9.00049 8.87478 9.00049 9.61816V14.3818C9.00049 15.1252 9.78285 15.6088 10.4478 15.2764L15.2114 12.8945C15.9483 12.526 15.9483 11.474 15.2114 11.1055L10.4478 8.72363Z"
              fill="#B3B1B8"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M17 2C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H17ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="#B3B1B8"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H10.5V16H7V13H10.5V11C10.5 8.79086 12.2909 7 14.5 7H17V10H14.5C13.9477 10 13.5 10.4477 13.5 11V13H17V16H13.5V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
              fill="#B3B1B8"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
