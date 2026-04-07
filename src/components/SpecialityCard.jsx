import React from "react";

const SpecialityCard = ({icon, title}) => {
  return (
    <div className="flex items-center gap-4 w-[40vh] rounded-2xl border border-white/50 bg-[#8bb945] px-5 py-5 shadow-inner">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white bg-white/20 backdrop-blur-lg">
        {icon}
      </div>
      <p className="text-[20px] font-semibold text-white">{title}</p>
    </div>
  );
};

export default SpecialityCard;
