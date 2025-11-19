import React from "react";

const ComponentTitle = ({ title, subtitle, position }) => {
  return (
    <div className={position}>
      <h2 className="font-heading text-[24px] font-bold text-navy dark:text-[#FFFFF0] leading-5 sm:text-[28px] md:text-[32px] lg:text-[36px]">
        {title}
      </h2>
      <p className="mt-2 text-[14px] text-navy/70 dark:text-[#FFFFF0]/70 sm:mt-4 sm:text-[15px] md:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default ComponentTitle;
