import { useState } from 'react';
import checkedIcon from '../assets/Variant5.png';
import hoverIcon from '../assets/Variant2.png';

const CheckInput = ({ label, onChange, checked }) => {
  const [hover, setHover] = useState(false);
  const onMouseEnterOrLeave = () => {
    setHover((prev) => !prev);
  };

  return (
    <label
      className="group flex items-center justify-between w-full py-2 pr-[15px] pl-[22px] cursor-pointer"
      onMouseEnter={onMouseEnterOrLeave}
      onMouseLeave={onMouseEnterOrLeave}
    >
      <span className="text-sm text-[#1F2128] leading-[130%] select-none">
        {label}
      </span>

      <span className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />

        {/* Outer box (hover/selected halo lives here) */}
        <span
          className={
            'flex items-center justify-center w-[35px] h-[35px] rounded-[6px] transition-all'
          }
        >
          {/* Inner checkbox */}
          <span
            className={[
              'flex items-center justify-center w-[23px] h-[23px] rounded-[8px]  bg-white transition-all',
              !checked || !hover ? 'border border-[#CDCDCD] ' : '',
            ].join(' ')}
          >
            {checked && (
              <img
                src={checkedIcon}
                alt="icon"
                className="select-none pointer-events-none"
                draggable={false}
              />
            )}
            {hover && !checked && (
              <img
                src={hoverIcon}
                alt="icon"
                className="select-none pointer-events-none"
                draggable={false}
              />
            )}
          </span>
        </span>
      </span>
    </label>
  );
};

export default CheckInput;
