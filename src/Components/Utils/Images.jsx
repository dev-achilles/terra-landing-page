import React from "react";
import Logo from "../../assets/images/luna.png";

const LogoImage = ({ main }) => {
  return (
    <>
      {main ? (
        <div class="inline-block rounded-full p-1 bg-gradient-to-r from-[#6825e7] to-[#aa58b8]">
          <div class="h-16 w-16 custom-bg-darkGray rounded-full LUNA_logo">
            <img src={Logo} alt="ADR" class="h-full rounded-full" />
          </div>
        </div>
      ) : (
        <div class="h-[45px] w-[45px] custom-bg-darkGray rounded-full LUNA_logo">
          <img src={Logo} alt="ADR" class="h-full rounded-full" />
        </div>
      )}
    </>
  );
};

export default LogoImage;
