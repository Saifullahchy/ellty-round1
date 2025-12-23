const Button = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-[340px] text-sm leading-[130%] text-[#1F2128] flex justify-center items-center py-[10px] px-[20px] rounded bg-[#FFCE22] hover:bg-[#FFD84D] cursor-pointer"
  >
    {label}
  </button>
);

export default Button;
