import React from "react";
import Banner from "./components/Info/Banner";
import Infomation from "./components/Info/Infomation";
import Expert from "./components/Info/Expert";
import NavBar from "./components/Navbar";
import Application from "./components/example/Application";
export default function info() {
  return (
    <>
      <NavBar />
      <div className="mt_104">
        <Banner />
        <Application />
      </div>
    </>
  );
}
