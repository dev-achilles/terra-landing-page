import React from "react";

const Nav = () => {
  return (
    <nav className="px-4 py-2 flex flex-col lg:flex-row w-[85%] mx-auto justify-center items-center">
      <a
        href="#!"
        className="text-white no-underline pr-4 flex items-center no-hover mb-3 lg:mb-0"
      >
        <div>
          <img
            src="https://multi-launch.com/static/img/tpad-logo-img.5eaa1084.svg"
            alt="Logo"
            className=" h-14 -mb-1 mr-2"
          />
        </div>
        <div>
          <h3 className="text-xl font-secondary font-alfphabet">MultiChain</h3>
          <h6 className="text-xs tracking-wide font-rubik">
            The #1 Multi-Chain Launchpad.
          </h6>
        </div>
      </a>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:ml-auto">
        <div className="lg:mr-3 py-3 lg:py-0 flex items-center flex-wrap">
          <a href="#!" className="px-4 py-2 text-white">
            Airdrop 🔥
          </a>
          <a href="#!" className="px-4 py-2 text-white">
            FAQ
          </a>
          <div className="ml-4">
            <a
              href="#!"
              className="py-2  bg-gradient-to-r from-[#6825e7] to-[#aa58b8] text-white border-2 border-[#ba84ff] rounded-lg px-2 "
            >
              <img
                src="https://multi-launch.com/static/img/pancakeswap.b5559135.svg"
                alt="PancakeSwap"
                class="h-6 inline mr-1"
              />
            </a>
          </div>
        </div>
        <div className="relative py-3"></div>
      </div>
    </nav>
  );
};

export default Nav;
