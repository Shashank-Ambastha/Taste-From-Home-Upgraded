import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch } from "react-redux";
// import BGimg from ".//imgs/304658.jpg";

function App() {
  const dispatch = useDispatch();
  // const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const resData = await res.json();
      // console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  });

  // console.log(productData);
  return (
    <>
      <Toaster />
      <div>
        <Header />
        {/* Original:{" "} */}
        <main className="pt-16 bg-[url('https://wallpaperaccess.com/full/304658.jpg')] min-h-[calc(100vh)]">
          {/*
            1) https://wallpaperaccess.com/full/304735.jpg
            2)https://wallpaperaccess.com/full/304658.jpg
            3)https://wallpaperaccess.com/full/304712.jpg
          */}
          {/*https://imgs.search.brave.com/hX1ylLCfWtEycKsLuDbEczexcJw35HiHqJ2DeSwpyI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDgw/NjUxMjQ3L3Bob3Rv/L2Zlc3RpdmUtcHJl/cGVyYXRpb25zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1w/a2g3MVp4dTVXXzla/TWFCcWJVWG1IWEZk/QkplVmYwWTFlOUF3/d2xtOTlzPQ */}
          {/* outlet lets the connected pages display their content in the main app.js files,  
          https://imgs.search.brave.com/eWC-GNcHvKPsxHNEy9D2HXKwgSPReqgd5VwPv1Zqv_U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTU2/Nzk0Ni5qcGc
          */}
          {/* 'https://imgs.search.brave.com/9JiPpY--y28rJsuHNA__8PdoTr53d_eF6teVHuNocms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bHVlLWdvbGQtbWFy/YmxlLXRleHR1cmVk/LWJhY2tncm91bmRf/NTM4NzYtMTAxNTg1/LmpwZz9zaXplPTYy/NiZleHQ9anBn' */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
