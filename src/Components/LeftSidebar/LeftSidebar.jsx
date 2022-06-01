import React from "react";
import LogoImage from "../Utils/Images";
import Progress from "../Utils/Progress";

const LeftSidebar = () => {
  return (
    <div className="bg-[#15132E] ml-0 md:ml-8 mr-0 md:mr-1 p-4 rounded-md md:w-[35%] mx-auto w-[100%] md:sticky md:top-3">
      {/* 1st  */}
      <div className="flex items-center justify-start">
        <LogoImage main={true} />

        <div className="ml-3">
          <h3 className="text-3xl font-alfphabet text-white mb-2">LUNA</h3>
          <span className="py-1 px-2 bg-opacity-40 bg-green-700 text-green-500 font-normal rounded-xl align-middle text-xs">
            Opening
          </span>
        </div>
      </div>

      {/* 2nd  */}
      <div className="flex flex-col px-4 py-2 justify-center items-center bg-[#1F1C35] rounded-xl my-4">
        <p className="mt-4 mb-6">
          <a
            href="#!"
            className="py-4  bg-gradient-to-r from-[#6825e7] to-[#aa58b8] text-white border-2 border-[#ba84ff] rounded-lg px-2 "
          >
            Connect Wallet
          </a>
        </p>
        <p className="text-white px-4 py-2 text-center">
          "Connect your wallet to check if you are eligible for refund"
        </p>
      </div>

      {/* 3rd  */}
      <h2 className="text-2xl custom-text space-y-6"> Claim $500 in LUNA</h2>

      {/* 4th  */}
      <div className="my-3">
        <div className="flex justify-between items-center flex-wrap">
          <h6 className="font-rubik text-white">
            airdrop closes in 00 hours, 50 minutes
          </h6>
          <p className="font-rubik text-[#BA84FF]">90.07%</p>
        </div>
        <Progress progress="90%" />

        <p className="text-gray-500 opacity-90 text-right font-rubik">
          <span>9 006 999 999 999 999 / 10 000 000 000 000 000</span> LUNA
        </p>
      </div>

      {/* 5th  */}
      <div className="my-3">
        <table class="text-sm">
          <tbody class="">
            <tr>
              <td class="pr-2 pb-2 pl-0 text-base text-white align-top whitespace-nowrap">
                💰 Airdrop
              </td>
              <td class="pb-2 pl-0">
                <p className="text-base text-white">
                  $500 or 10% of your balance(greater one)
                </p>
              </td>
            </tr>
            <tr>
              <td class="pr-2 pb-2 pl-0 text-base text-white align-top whitespace-nowrap">
                🏃‍♂ Rule
              </td>
              <td class="pb-2 pl-0">
                <p className="text-base text-white">
                  FCFS, Each one is limited to join once.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftSidebar;
