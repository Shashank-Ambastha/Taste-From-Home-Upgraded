import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({
  name,
  image,
  catagory,
  price_full,
  price_half,
  price_quarter,
  seller,
  // quantity,
  loading,
  id,
}) => {
  return (
    <div className="bg-white shadow p-2 rounded min-w-[150px] hover:shadow-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] ">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img
                src={image}
                className="h-full rounded-md border-2 border-blue-950 hover:scale-105 transition-all"
                alt="product img"
              />
            </div>
            <p className="text-slate-400 text-sm mt-4">{catagory}</p>
            <h3 className="font-semibold text-slate-900 capitalise text-md overflow-hidden w-40 font-lg">
              {name}
            </h3>
            {/* <p className="text-slate-400 font-medium">{catagory}</p> */}
            <p className="font-bold text-sm text-center text-stone-800 mt-2">
              <span className="text-red-500">₹</span>
              {price_full ? (
                <span>{price_full}/- Kg</span>
              ) : price_half ? (
                <span>{price_half}/- 0.5Kg</span>
              ) : price_quarter ? (
                <span>{price_quarter}/- 250g</span>
              ) : null}
            </p>
            <p className="text-emerald-700 font-small italic text-right">
              ~ by {seller}
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
