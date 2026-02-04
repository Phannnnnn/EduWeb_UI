const ButtonSecond = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center uppercase bg-[#237A37] text-white rounded-lg px-5 py-2 font-bold text-xl cursor-pointer"
    >
      {label}
    </button>
  );
};

export default ButtonSecond;
