import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const catagoryList = [...new Set(productData.map((el) => el.catagory))];
  // const quantityList = [...new Set(productData.map((el) => el.quantity))];

  // console.log(catagoryList);

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const loadingArrayFeature = new Array(10).fill(null);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (catagory) => {
    setFilterBy(catagory);
    const filter = productData.filter(
      (el) => el.catagory.toLowerCase() === catagory.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-5 w-screen scrollbar-thin">
      <h2 className="font-bold text-2xl text-amber-200 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {catagoryList[0] ? (
          catagoryList.map((el) => {
            return (
              <FilterProduct
                catagory={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-6 my-8 mx-5">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id + "cardFeature-AP"}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  catagory={el.catagory}
                  seller={el.seller}
                  price_full={el.price_full}
                  price_half={el.price_half}
                  price_quarter={el.price_quarter}
                  // quantity={el.quantity}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
