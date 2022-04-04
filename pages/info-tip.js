import React from "react";
import Banner from "./components/Info/Banner";
import NavBar from "./components/Navbar";
import TipCard from "./components/example/TipCard";
export default function info() {
  return (
    <>
      <NavBar />
      <div className="mt_104">
        <Banner />
        <TipCard />
      </div>
    </>
  );
}
