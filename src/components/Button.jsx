import React from "react";

export const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none text-[18px] rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};
