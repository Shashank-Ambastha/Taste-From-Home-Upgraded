import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";
const CardFeature = ({
  image,
  name,
  price,
  catagory,
  quantity,
  seller,
  loading,
  id,
}) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    // e.stopPropagation();
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        seller: seller,
        quantity: quantity,
        catagory: catagory,
        image: image,
      })
    );
    // alert("hii!!");
  };
  return (
    <div className="w-full min-w-[200px] max-w-[200px] rounded bg-white hover:shadow-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] px-4 py-5 hover:cursor-pointer flex flex-col overflow-hidden">
      {image ? (
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
            <h3 className="font-semibold text-slate-900 capitalise text-md w-40 whitespace-nowrap overflow-hidden hover:text-ellipsis">
              {name}
            </h3>
            {/* <p className="text-slate-400 font-medium">{catagory}</p> */}
            <p className="font-bold text-sm text-center text-stone-800">
              <span className="text-red-500">₹</span>
              <span>
                {price}/- {quantity}
              </span>
            </p>
            <p className="text-emerald-700 font-small italic text-right">
              {" "}
              ~ by {seller}
            </p>
          </Link>
          <button
            className=" bg-amber-500 py-1 my-2 mt-2 rounded hover:bg-amber-600 w-full"
            onClick={handleAddCartProduct}
          >
            Add to Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
