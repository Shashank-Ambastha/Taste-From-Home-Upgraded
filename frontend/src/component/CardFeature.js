import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({
  image,
  name,
  price_full,
  price_half,
  price_quarter,
  catagory,
  seller,
  loading,
  id,
}) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
    if (price_full && !price_half && !price_quarter) {
      setPrice(price_full);
      handleAddCartProduct(price_full, 1);
    } else if (price_half && !price_full && !price_quarter) {
      setPrice(price_half);
      handleAddCartProduct(price_half, 0.5);
    } else if (price_quarter && !price_full && !price_half) {
      setPrice(price_quarter);
      handleAddCartProduct(price_quarter, 0.25);
    }
  };

  const handleAddCartProduct = (price, selected) => {
    // e.stopPropagation();
    // console.log("Price: ", price, " Selection: ", selected);
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        selected: selected,
        catagory: catagory,
        image: image,
        seller: seller,
      })
    );
  };
  return (
    <div className="w-full min-w-[200px] max-w-[200px] rounded bg-white hover:shadow-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] px-4 py-5 hover:cursor-pointer flex flex-col">
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
            <p className="font-bold text-sm text-center text-stone-800">
              <span className="text-red-500">₹</span>
              {price_full ? (
                <span>{price_full} /- Kg</span>
              ) : price_half ? (
                <span>{price_half} /- 0.5Kg</span>
              ) : price_quarter ? (
                <span>{price_quarter} /- 250g</span>
              ) : null}
            </p>
            <p className="text-emerald-700 font-small italic text-right">
              ~ by {seller}
            </p>
          </Link>

          {!price && (
            <div>
              <button
                className=" bg-amber-500 py-1 my-2 mt-2 rounded hover:bg-amber-600 w-full"
                onClick={handleShowMenu}
              >
                Add to Cart
                {showMenu && !price && (
                  <div className="absolute overscroll shadow drop-shadow-md  min-w-[170px] text-center flex flex-col bg-amber-300 border-2 border-indigo-950">
                    {price_full && (
                      <div
                        className="flex hover:bg-amber-400 border-indigo-700 border-b-2"
                        onClick={() => {
                          setPrice(price_full);
                          handleAddCartProduct(price_full, 1);
                        }}
                      >
                        <p className=" ml-1 text-left">1 Kg</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1">{price_full}</p>
                      </div>
                    )}
                    {price_half && (
                      <div
                        className="flex hover:bg-amber-400 border-indigo-700 border-b-2"
                        onClick={() => {
                          setPrice(price_half);
                          handleAddCartProduct(price_half, 0.5);
                        }}
                      >
                        <p className=" ml-1 text-left">0.5 Kg</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1 ">{price_half}</p>
                      </div>
                    )}
                    {price_quarter && (
                      <div
                        className="flex hover:bg-amber-400"
                        onClick={() => {
                          setPrice(price_quarter);
                          handleAddCartProduct(price_quarter, 0.25);
                        }}
                      >
                        <p className=" ml-1 text-left">250 g</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1 ">{price_quarter}</p>
                      </div>
                    )}
                  </div>
                )}
              </button>
            </div>
          )}
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
