import React from "react";
import Banner from "./components/company/Banner";
import Team from "./components/company/Team";
import Honor from "./components/company/Honor";
import History from "./components/company/history";
import Unit from "./components/company/Unit";
import Contact from "./components/company/Contact";
import SubNav from "./components/company/Subnav";
import Navbar from "./components/Navbar";
export default function company() {
  return (
    <div>
      <Navbar />
      <div className="mt_104">
        <Banner />
        <Team />
        <History />
        <Honor />
        <Unit />
        <Contact />
      </div>
    </div>
  );
}
