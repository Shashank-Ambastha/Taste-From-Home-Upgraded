import React, { useRef } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(2, 6);
  const homeProductCartListLadduBarfi = productData.filter(
    (el) => el.catagory === "Laddu - Barfi",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4 overflow-hidden">
      <div className="md:flex gap-4 py-2">
        <div className="w-2/5">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300">
            Welcome to
            <span className=" text-orange-500 md:text-7xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
              Taste From Home
            </span>
          </h2>
          <p className="py-3 text-l px-2 text-slate-200 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
            Order super-tasty and healthy homemade delicacies and have it
            delivered right at your doorstep.
            <br /> Enjoy mouth-watering snacks and sweets from the comfort of
            your home.
          </p>
          <br />
          <Link
            to={"menu/64ee1bbddbe43eb705ba6fe5"}
            className="font-bold bg-orange-500 text-black px-4 py-1 rounded-md text-xl h-10"
          >
            Order Now
          </Link>
        </div>

        <div className="w-3/5 flex flex-wrap gap-5 p-4 justify-center ">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price_full={el.price_full}
                    price_half={el.price_half}
                    price_quarter={el.price_quarter}
                    catagory={el.catagory}
                    seller={el.seller}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>

      <div className=" scrollbar-hide">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-amber-200 mb-4">
            Featured Sweets: Laddu - Barfi
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded text-lg"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded text-lg"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-2 md:gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListLadduBarfi[0]
            ? homeProductCartListLadduBarfi.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "bakery"}
                    id={el._id}
                    name={el.name}
                    catagory={el.catagory}
                    price_full={el.price_full}
                    price_half={el.price_half}
                    price_quarter={el.price_quarter}
                    image={el.image}
                    seller={el.seller}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Shop for Delicious Products"} />
    </div>
  );
};

export default Home;
