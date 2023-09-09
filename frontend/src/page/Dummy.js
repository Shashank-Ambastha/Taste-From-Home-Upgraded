import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import {
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus, FiMinus } from "react-icons/fi";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  // const [price, setPrice] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    if (
      productDisplay.price_full &&
      !productDisplay.price_half &&
      !productDisplay.price_quarter
    ) {
      // setPrice(productDisplay.price_full);
      handleAddCartProduct(productDisplay.price_full, 1);
    } else if (
      productDisplay.price_half &&
      !productDisplay.price_full &&
      !productDisplay.price_quarter
    ) {
      // setPrice(productDisplay.price_half);
      handleAddCartProduct(productDisplay.price_half, 0.5);
    } else if (
      productDisplay.price_quarter &&
      !productDisplay.price_full &&
      !productDisplay.price_half
    ) {
      // setPrice(productDisplay.price_quarter);
      handleAddCartProduct(productDisplay.price_quarter, 0.25);
    } else setShowMenu((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleAddCartProduct = (price, selected) => {
    dispatch(
      addCartItem({
        _id: productDisplay._id,
        name: productDisplay.name,
        price: price,
        selected: selected,
        catagory: productDisplay.catagory,
        image: productDisplay.image,
        seller: productDisplay.seller,
      })
    );
  };

  const productCartItem = useSelector((state) => state.product.cartItem);
  const [ind, setInd] = useState(-1);
  // console.log(productData);

  // let ind = 0;
  useEffect(() => {
    setInd(-1);
    productCartItem.filter((el, i) => {
      if (productDisplay._id === el._id) {
        setInd(i);
        console.log(ind, i);
        // return i;
      }
    });
  }, [productCartItem, productDisplay, deleteCartItem]);

  return (
    <div className="p-2 md:p-4 overflow-hidden">
      <div className="w-full max-w-[950px] m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
            alt="product img"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-1000 capitalise word-wrap text-2xl md:text-3xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-400 font-medium text-xl">
            {productDisplay.catagory}
          </p>
          <p className="font-bold text-xl">
            <span className="text-red-500">₹</span>
            <span>
              {productDisplay.price_full ? (
                <span>{productDisplay.price_full} /- Kg</span>
              ) : productDisplay.price_half ? (
                <span>{productDisplay.price_half} /- 0.5Kg</span>
              ) : productDisplay.price_quarter ? (
                <span>{productDisplay.price_quarter} /- 250g</span>
              ) : null}
            </span>
          </p>
          <p className="text-emerald-700 font-small italic text-xl text-right mr-16">
            ~ by {productDisplay.seller}
          </p>
          <div className="flex gap-3">
            {ind === -1 ? (
              <button
                className=" bg-amber-500 py-1 px-10 my-2 mt-2 rounded hover:bg-amber-600 w-full max-w-fit "
                onClick={handleShowMenu}
              >
                <span className=" px-16 ">Add to Cart </span>
                {showMenu && (
                  <div className="absolute overscroll shadow drop-shadow-md min-w-[220px] flex flex-col bg-amber-400 bg-opacity-95 border border-indigo-950">
                    {productDisplay.price_full && (
                      <div
                        className="flex hover:bg-amber-500 border-indigo-700 border-b"
                        onClick={() => {
                          // setPrice(productDisplay.price_full);
                          handleAddCartProduct(productDisplay.price_full, 1);
                        }}
                      >
                        <p className=" ml-1 text-left">1 Kg</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1">{productDisplay.price_full}</p>
                      </div>
                    )}
                    {productDisplay.price_half && (
                      <div
                        className="flex hover:bg-amber-500 border-indigo-700 border-b"
                        onClick={() => {
                          // setPrice(productDisplay.price_half);
                          handleAddCartProduct(productDisplay.price_half, 0.5);
                        }}
                      >
                        <p className=" ml-1 text-left">0.5 Kg</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1 ">{productDisplay.price_half}</p>
                      </div>
                    )}
                    {productDisplay.price_quarter && (
                      <div
                        className="flex hover:bg-amber-500"
                        onClick={() => {
                          // setPrice(productDisplay.price_quarter);
                          handleAddCartProduct(
                            productDisplay.price_quarter,
                            0.25
                          );
                        }}
                      >
                        <p className=" ml-1 text-left">250 g</p>
                        <p className=" mr-1 m-auto text-red-500">₹</p>
                        <p className=" mr-1 ">{productDisplay.price_quarter}</p>
                      </div>
                    )}
                  </div>
                )}
              </button>
            ) : (
              <div className="flex justify-between gap-3 items-center p-1">
                <button
                  onClick={() => {
                    dispatch(increaseQty(productDisplay._id));
                  }}
                  className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400"
                >
                  <FiPlus />
                </button>
                <p className="pb-1 font-semibold">{productCartItem[ind].qty}</p>
                {productCartItem[ind].qty > 1 ? (
                  <button
                    onClick={() => {
                      dispatch(decreaseQty(productDisplay._id));
                    }}
                    className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400"
                  >
                    <FiMinus />
                  </button>
                ) : (
                  <button className=" hover:cursor-default p-1 my-2 mt-2 rounded-full">
                    <FiMinus />
                  </button>
                )}

                <button
                  onClick={() => {
                    dispatch(deleteCartItem(productDisplay._id));
                    setInd(-1);
                  }}
                  className=" p-1 my-2 mt-2 ml-4 hover:rounded-full hover:bg-red-500 cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            )}
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
