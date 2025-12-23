const Modal = ({ children }) => {
  return (
    <div className="w-[370px] bg-white h-[326px] border border-[#EEEEEE] rounded-[6px] shadow-primary absolute top-[85px] py-[10px]">
      {children}
    </div>
  );
};

export default Modal;
