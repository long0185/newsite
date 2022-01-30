import React from "react";
import Banner from "./components/Info/Banner";
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
