import React from "react";
import IregoNav from "./components/product/IregoNav";
import IregoDetail from "./components/product/IregoDetail";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
export default function product() {
  return (
    <>
      <NavBar />
      <div className="contianer-fluid pt_104">
        <Carousel
          imgs={[
            "/assets/2560/product/irego/thum_1.png",
            "/assets/2560/product/irego/thum_2.png",
          ]}
          banners={[
            "/assets/2560/product/irego/banner01.png",
            "/assets/2560/product/irego/banner02.jpeg",
          ]}
        />
        <IregoNav />
        <IregoDetail />
      </div>
    </>
  );
}
