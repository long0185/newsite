import React from "react";
import IregoNav from "./components/product/IregoNav";
import IremoDetail from "./components/product/IremoDetail";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
export default function product() {
  return (
    <>
      <NavBar />
      <div className="hidden mobile:block contianer-fluid pt_104">
        <Carousel
          imgs={[
            "/assets/2560/product/irego/thum_1.png",
            "/assets/2560/product/irego/thum_2.png",
          ]}
          banners={[
            "/assets/2560/product/iremo/banner1.png",
            "/assets/2560/product/iremo/banner1.png",
          ]}
        />
        <IregoNav />
        <IremoDetail />
      </div>
      <div className="mobile:hidden contianer-fluid pt_104">
        <Carousel
          imgs={[
            "/assets/2560/product/irego/thum_1.png",
            "/assets/2560/product/irego/thum_2.png",
          ]}
          banners={[
            "/assets/mobile/product/iremo/banner1.png",
            "/assets/mobile/product/iremo/banner1.png",
          ]}
        />
        <IregoNav />
        <IremoDetail /> 
      </div>
    </>
  );
}
