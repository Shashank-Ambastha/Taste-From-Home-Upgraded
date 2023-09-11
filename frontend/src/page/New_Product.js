import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    catagory: "",
    image: "",
    price_full: "",
    price_half: "",
    price_quarter: "",
    description: "",
    seller: "",
  });

  const userData = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Taste-From-Home-Upgraded-Products");
    data.append("cloud_name", "shashank-amb");
    await fetch("https://api.cloudinary.com/v1_1/shashank-amb/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setData((prev) => {
          return {
            ...prev,
            image: data.url,
          };
        });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      image,
      catagory,
      price_full,
      price_half,
      price_quarter,
      seller,
    } = data;

    if (
      name &&
      image &&
      catagory &&
      (price_full || price_half || price_quarter) &&
      seller
    ) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          catagory: "",
          seller: "",
          image: "",
          price_full: "",
          price_half: "",
          price_quarter: "",
          description: "",
        };
      });
    } else {
      toast("Please enter required field(s)");
    }
  };
  return (
    <>
      {userData.email === process.env.REACT_APP_ADMIN_EMAIL ? (
        <div className="p-4">
          <form
            className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type={"text"}
              name="name"
              className="bg-green-100 p-1 my-1"
              onChange={handleOnChange}
              value={data.name}
            />

            <label htmlFor="seller" className="my-1">
              Seller
            </label>
            <select
              className="bg-green-100 p-1 my-1"
              id="seller"
              name="seller"
              onChange={handleOnChange}
              value={data.seller}
            >
              <option value={"other"}>Select Seller</option>
              <option value={"Vini"}>Vini</option>
              <option value={"Sumitra"}>Sumitra</option>
              <option value={"Radha"}>Radha</option>
              <option value={"Baker's Delight"}>Baker's Delight</option>
              <option value={"Karishma"}>Karishma</option>
            </select>

            <label htmlFor="catagory" className="my-1">
              Catagory
            </label>
            <select
              className="bg-green-100 p-1 my-1"
              id="catagory"
              name="catagory"
              onChange={handleOnChange}
              value={data.catagory}
            >
              <option value={"other"}>Select Catagory</option>
              <option value={"Laddu - Barfi"}>Laddu - Barfi</option>
              <option value={"Traditional Sweets"}>Traditional Sweets</option>
              <option value={"Bakery"}>Bakery Product</option>
              <option value={"Namkeen - Farsaan"}>Namkeen - Farsaan</option>
            </select>

            <label htmlFor="image" className="my-1">
              Image
              <div className="h-40 w-full bg-green-100 rounded flex items-center justify-center cursor-pointer">
                {data.image ? (
                  <img src={data.image} className="h-full" alt="Data img" />
                ) : (
                  <span className="text-5xl">
                    <BsCloudUpload />
                  </span>
                )}
                <input
                  type={"file"}
                  accept="image/*"
                  id="image"
                  onChange={uploadImage}
                  className="hidden"
                />
              </div>
            </label>

            <label htmlFor="price_full" className="my-1">
              Price 1Kg
            </label>
            <input
              type={"text"}
              className="bg-green-100 p-1 my-1"
              name="price_full"
              onChange={handleOnChange}
              value={data.price_full}
            />
            <label htmlFor="price_half" className="my-1">
              Price 0.5Kg
            </label>
            <input
              type={"text"}
              className="bg-green-100 p-1 my-1"
              name="price_half"
              onChange={handleOnChange}
              value={data.price_half}
            />
            <label htmlFor="price_quarter" className="my-1">
              Price 250g
            </label>
            <input
              type={"text"}
              className="bg-green-100 p-1 my-1"
              name="price_quarter"
              onChange={handleOnChange}
              value={data.price_quarter}
            />

            <label htmlFor="description" className="my-1">
              Description
            </label>
            <textarea
              rows={2}
              className="bg-green-100 p-1 my-1 resize-none"
              name="description"
              onChange={handleOnChange}
              value={data.description}
            ></textarea>

            <button className="bg-green-500 hover:bg-green-600 text-white text-lg my-2 font-medium drop-shadow">
              Save Product
            </button>
          </form>
        </div>
      ) : (
        <h1 className=" font-bold text-white text-4xl text-center mt-5 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
          Page Not Found !!
        </h1>
      )}
    </>
  );
};

export default NewProduct;
