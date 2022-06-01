import React from "react";
import middleImage from "../../assets/images/lt.png";
import LogoImage from "../Utils/Images";
import Social from "../Utils/Social";
import SubTitle from "../Utils/SubTitle";
import Title from "../Utils/Title";

const RightSidebar = () => {
  return (
    <div className="flex-1  px-8 py-8 bg-[#1F1C35] rounded-xl md:ml-2 mx-auto ml-0 mr-0  md:my-0 my-6">
      <div className="flex justify-start items-center">
        <LogoImage main={false} />
        <p className="text-2xl text-white font-alfphabet uppercase ml-2">
          LUNa
        </p>
      </div>
      <h3 className="text-md text-white my-3 font-normal">
        LUNA Token was founded in August 2021 with the sole purpose of building
        an entire ecosystem for investors and fans alike. LUNA is creating a
        safe and exciting space for investors and fans alike with modernized
        tooling, advanced DeFi platforms, education, P2E gaming, metaverse, and
        world-class artwork as well as to help underpaid anime and manga
        artists.
      </h3>
      <div>
        <img src={middleImage} alt="" />
      </div>
      <div>
        <Social />
      </div>
      <div>
        <Title title="Token" />
        <SubTitle title="Token" name="LUNA (LUNA)" color={true} />
        <SubTitle title="Type" name="Multi-Chain" color={false} />
        <SubTitle
          title="Total Supply"
          name="100 000 000 000 000 000 LUNA"
          color={false}
        />
        <SubTitle title="Market Cap" name="$4 725 842" color={true} />
      </div>
      <div>
        <Title title="Distribution" />
        <SubTitle
          title="Distribution"
          name="Claimed on MultiChain"
          color={false}
        />
      </div>
    </div>
  );
};

export default RightSidebar;
