import React from "react";
import InnovateBanner from "./components/Innovate/InnovateBanner";
import IreFamliy from "./components/Innovate/IreFamliy";
import InnovateIrego from "./components/Innovate/InnovateIrego";
import InnovateIremo from "./components/Innovate/InnovateIremo";
import NavBar from "./components/Navbar";
const InnovateIre = () => {
  return (
    <>
      <NavBar />
      <div className="mt_104">
        <InnovateBanner />
        <IreFamliy />
        <InnovateIrego />
        <InnovateIremo />
      </div>
    </>
  );
};

export default InnovateIre;
