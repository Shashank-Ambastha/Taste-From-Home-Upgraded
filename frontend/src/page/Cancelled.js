import React from "react";
import { ImCross } from "react-icons/im";

const Cancelled = () => {
  return (
    <div className="  bg-gradient-to-l from-gray-900 via-gray-700 to-gray-900 h-60 flex max-w-lg m-auto w-fit mt-1 md:mt-3 md:p-16 p-10 justify-center items-center drop-shadow-[1px_1px_1px_rgba(255,255,255,0.5)]">
      <p className=" font-light text-3xl md:text-4xl text-red-500">
        <span className="flex">
          Payment Failed
          <ImCross className=" ml-3 border-2 border-red-500 rounded-full p-2 items-center justify-center m-auto" />
        </span>
        <br /> Please Try Again!!
      </p>
    </div>
  );
};

export default Cancelled;
