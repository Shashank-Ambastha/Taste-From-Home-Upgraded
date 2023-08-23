import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
// import { current } from "@reduxjs/toolkit";
import emptyCart from "../assest/empty.gif";
import { Link } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalItems = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <div className="p-2 md:p-4 relative overflow-hidden">
      {/* 
      bg-gradient-to-r from-orange-400 via-white to-green-500
      <img
        src={BG}
        className="w-screen h-screen absolute overflow-hidden m-0"
      /> */}
      <h2 className="text-lg md:text-2xl text-amber-200 font-bold">
        Your Cart Items
      </h2>
      {productCartItem[0] ? (
        <div className="my-4 flex gap-3">
          <div className="w-full max-w-3xl">
            <div className="my-4">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    quantity={el.quantity}
                    seller={el.seller}
                    catagory={el.catagory}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full ma-x-md ml-auto bg-gray-900 bg-opacity-30 max-h-40">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary:</h2>
            <div className="flex w-full py-2 text-lg border-b border-black text-semibold text-slate-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
              <p className="">Total Items:</p>
              <p className="ml-auto w-32 font-semibold">{totalItems}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b border-black text-semibold text-slate-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
              <p className="">Total Price:</p>
              <p className="ml-auto w-32 font-semibold">
                <span className="text-red-500">₹ </span>
                {totalPrice}
              </p>
            </div>
            <button className=" bg-indigo-950 text-white hover:shadow-md font-bold hover:shadow-yellow-500 w-full transition-smooth py-1">
              Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-screen gap-5">
          <img
            src={emptyCart}
            alt="empty cart"
            className="w-full max-w-md rounded-full border border-gray-800"
          />
          <p className="text-amber-200 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 1)] text-3xl font-bold">
            Cart Empty🙄
          </p>
          <Link
            to={`/`}
            className="text-amber-200 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 1)] text-2xl hover:bg-black hover:bg-opacity-40 hover:text-cyan-500 hover:underline"
          >
            Shop Now and Fill Your cart wih some Goodies
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
