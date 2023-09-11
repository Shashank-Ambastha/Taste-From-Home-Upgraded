import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCart from "../images/empty.gif";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalItems = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayement = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();

      toast("Redirecting to Payment Gateway........!");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not logged in! \nPlease Log In to continue!!");
      setTimeout(() => {
        navigate("../login");
      }, 1000);
    }
  };

  return (
    <div className="p-2 md:p-4 relative overflow-scroll md:overflow-hidden">
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
                    seller={el.seller}
                    catagory={el.catagory}
                    price={el.price}
                    selected={el.selected}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full max-md ml-auto bg-gray-900 bg-opacity-30 max-h-40">
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
            <button
              onClick={handlePayement}
              className=" bg-indigo-950 text-white hover:shadow-md font-bold hover:shadow-yellow-500 w-full transition-smooth py-1"
            >
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
