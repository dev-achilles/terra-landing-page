import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import WebSvg from "../../assets/svg/web";

const Social = () => {
  return (
    <div className="flex items-center my-6">
      <a href="https://t.me/+pFX2y0APEG1mMTcy" target="_blank" rel="noreferrer">
        <FaTelegramPlane className="text-[#ba84ff] text-2xl mr-6" />
      </a>
      <a
        href="https://twitter.com/LUNAInuToken"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter className="text-[#ba84ff] text-2xl mr-6" />
      </a>
      <a href="https://www.lunatoken.com/" target="_blank" rel="noreferrer">
        <WebSvg className="text-[#ba84ff] text-2xl mr-6" />
      </a>
    </div>
  );
};

export default Social;
