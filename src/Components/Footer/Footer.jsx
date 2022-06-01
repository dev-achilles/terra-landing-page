import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-b-[1px] border-gray-500">
        <div className="md:w-[85%] mx-auto ">
          <div className="text-center text-white">
            <h2 className="text-[22px] md:text-4xl mb-14 font-Rubik">
              Want to launch your project on MultiChain?
            </h2>

            <div className="mt-6 mb-12 md:mb-20">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSer-PUjhMDG5fmasXYkmvY3EgpTC-yaI4up5by6Hx5g_9wZaw/viewform">
                <p className=" py-5 px-7 bg-opacity-40 bg-gradient-to-r from-[#25e7d0] to-[#5893b8] text-white font-normal rounded-xl align-middle inline footer-btn">
                  <FaSpaceShuttle className="inline" />

                  <span className="ml-2"> Apply to Launch</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[85%] mx-auto mb-1">
        <div class="flex justify-between items-center mt-6 flex-col-reverse md:flex-row">
          <p class="text-xs mt-6 ml-3 text-white font-roboto">
            Participants/Citizens from the following countries are strictly
            excluded/not allowed to participate in the IDOs: Bolivia, Cambodia,
            Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea.
          </p>
          <p class="text-xs ml-3 text-white font-roboto">
            © Copyright MultiChain 2022. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
