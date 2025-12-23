import { useState } from 'react';
import checkedIcon from '../assets/Variant5.png';
import hoverIcon from '../assets/Variant2.png';
import checkHoverIcon from '../assets/Variant4.png';

const CheckInput = ({ label, onChange, checked }) => {
  const [hover, setHover] = useState(false);
  const onMouseEnterOrLeave = () => {
    setHover((prev) => !prev);
  };

  return (
    <label
      className="group flex items-center justify-between w-full py-2 pr-[15px] pl-[22px] cursor-pointer transition-all"
      onMouseEnter={onMouseEnterOrLeave}
      onMouseLeave={onMouseEnterOrLeave}
    >
      <span className="text-sm text-[#1F2128] leading-[130%] select-none transition-all">
        {label}
      </span>

      <span className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />

        <span
          className={[
            'flex items-center justify-center w-[35px] h-[35px] rounded-lg transition-all',
            ' group-active:bg-[#5B7CFF]/10 group-active:ring-offset-2 group-active:ring-offset-transparent',
          ].join(' ')}
        >
          <span
            className={[
              'flex items-center justify-center w-[23px] h-[23px] border border-[#CDCDCD] rounded-[6px]  bg-white ',
              'relative flex items-center justify-center transition-all',
              'w-[23px] h-[23px] rounded-[6px] bg-white',
              !checked && !hover ? 'border border-[#CDCDCD] ' : '',
            ].join(' ')}
          >
            {checked && !hover && (
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

            {hover && checked && (
              <img
                src={checkHoverIcon}
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
