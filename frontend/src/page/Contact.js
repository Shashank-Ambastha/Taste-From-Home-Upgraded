import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="flex px-20 gap-2 flex-col text-xl overflow-scroll md:overflow-hidden text-slate-200 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
      <div className="bg-green-400 w-screen h-max flex p-4 text-center text-4xl italic shadow text-black drop-shadow-none">
        Contact Us
      </div>
      <div className="ml-8 mt-8">
        <p>For Help and Support, do reach out to us:</p>
        <p className="flex w-max p-2 ml-10 mt-7 mb-10 gap-1 text-2xl shadow-lg shadow-green-200">
          <BsWhatsapp className="flex mt--2 w-7 h-7" />
          <span>WhatsApp: +91 12345 67890</span>
        </p>
        <p className="flex w-max p-2 ml-10 mt-4 mb-10 gap-1 text-2xl shadow-lg shadow-green-200">
          <AiOutlineMail className=" w-8 h-8" />
          <span className="mr-3">Email: </span>taste_from_home@gmail.com
        </p>
        <p className="mt-7">
          Get in touch and have your queries resolved at the earliest.
        </p>
        <p className="flex mt-7">
          Our team will be really <span className=" ml-1 mr-1 mt--2 ">😀</span>
          happy to serve you!!
        </p>
      </div>
    </section>
  );
};

export default Contact;
