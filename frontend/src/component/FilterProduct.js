import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ catagory, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl w-15 md:w-44 p-5 bg-emerald-300 rounded-full flex justify-center cursor-pointer hover:bg-emerald-500 ${
          isActive && " bg-emerald-500 text-white"
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalise text-white">
        {catagory}
      </p>
    </div>
  );
};

export default FilterProduct;
