import React from "react";
import Footer from "../../Components/Footer/Footer";
import Middle from "../../Components/Middle/Middle";
import Nav from "../../Components/Nav/Nav";
import "./custom.css";
const Home = () => {
  return (
    <>
      <div className="bg-main-bg bg-no-repeat bg-cover bg-main">
        <Nav />
        <Middle />
      </div>
      <div className="bg-[#12112E] pt-6 pb-1 ">
        <Footer />
      </div>
    </>
  );
};

export default Home;
