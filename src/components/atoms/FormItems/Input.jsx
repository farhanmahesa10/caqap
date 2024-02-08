import React from "react";

const Input = (props) => {
  const { label, leftIcon, rightIcon, ...rest } = props;

  return (
    <div>
      <label className="text-[15px] text-solid-black">{label}</label>
      <div className="flex p-4 gap-2 justify-between border border-[#E5E5E5] rounded-[4px] bg-[#FCFCFC] mt-1">
        <div className="flex gap-2 w-full">
          {leftIcon}
          <input
            type="text"
            {...rest}
            className="w-full outline-none border-none"
          />
        </div>
        {rightIcon}
      </div>
    </div>
  );
};

export default Input;
