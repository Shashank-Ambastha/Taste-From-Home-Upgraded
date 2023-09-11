import React from "react";
import Nan_Khatai from "../images/About Images/Nan Khatai_Rose Flavor_Rajvi.jpeg";
import Sukhadi from "../images/About Images/Sukhadi-Gud Papdi_Radha.jpeg";
import Thekua from "../images/About Images/Thekua_Vini.jpg";
import Gujiya from "../images/About Images/Gujiya_Sumitra.jpeg";
import Nimki from "../images/About Images/Nimki_Namakpare_Rajvi.jpeg";
import Gulab_Jamun from "../images/About Images/Gulab Jamun_Vandana.jpeg";

const About = () => {
  return (
    <section className="m-2 gap-2 flex flex-col overflow-hidden text-slate-100 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
      <h1
        to={"about"}
        className="bg-slate-800 text-5xl drop-shadow-none text-white p-4 text-center w-screen shadow m-10 ml-0"
      >
        About Us
      </h1>
      <p className="text-center text-3xl">
        Wanting to indulge into lip-smacking and homely snacks and sweets❔
      </p>
      <p className="text-center text-3xl mt-5 mb-8">
        Look no further, for you have arrived to the favourite destination of
        all the Desi Food Lovers
      </p>
      <section className="flex w-full">
        <div className=" h-fit w-screen flex flex-col overflow-hidden gap-10 md:auto">
          <img
            className="ml-2 rounded-full"
            src={Nan_Khatai}
            alt="Nan-Khatai"
          />
          <img src={Sukhadi} className="ml-2 rounded-full" alt="Sukhadi" />
          <img src={Thekua} className="ml-2 rounded-full" alt="Thekua" />
        </div>

        <p className=" text-md md:text-2xl text-justify p-10 flex-adjust pt-0 italic">
          Welcome to Taste from Home, the ultimate online destination for home
          made snacks and sweets. We at Taste From Home, are a team of
          passionate foodies who believe that nothing beats the taste and
          quality of handcrafted delicacies. <br />
          <br />
          That's why we have partnered with local artisans and homemakers who
          create mouthwatering treats using fresh ingredients and traditional
          recipes. Whether you crave for gujiya, thekhua, gulab jamun, nimki, or
          any other traditional foods, we have something for everyone. And the
          best part is, you can order them from the comfort of your home and get
          them delivered to your doorstep in no time.
          <br />
          <br /> Taste from Home is more than just a website, its a community of
          snack lovers who support each other and share their feedback and
          stories. So join us today and discover the joy of snacking with Taste
          from Home!
          <br />
          <br />
          <br />
          <div className="text-center">Looking Forward to Serving You!!</div>
          <br />
          <div className="text-center">😀 Happy Shopping! 😀</div>
        </p>
        <p className="flex flex-col"></p>
        <p></p>

        <div className="h-fit w-screen flex flex-col overflow-hidden">
          <img src={Gujiya} className="ml-2 h-70 rounded-full" alt="Gujiya" />
          <img src={Nimki} className="ml-2 h-70 rounded-full" alt="Nimki" />
          <img
            src={Gulab_Jamun}
            className="ml-2 h-70 rounded-full"
            alt="Gulab jamun"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
