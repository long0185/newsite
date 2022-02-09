import React from "react";
import Carousel from "../../Carousel";
export default function ProductIRego() {
  return (
    <>
      <div className="w-100 hidden mobile:block relative product-banner">
        <Carousel
          imgs={[
            "/assets/2560/product/irego/thum_1.png",
            "/assets/2560/product/irego/thum_2.png",
          ]}
          banners={[
            "/assets/2560/product/irecog/banner1.png",
            "/assets/2560/product/irecog/banner1.png",
          ]}
        />
      </div>
      <div className="mobile:hidden">
        <Carousel
          imgs={[
            "/assets/2560/product/irego/thum_1.png",
            "/assets/2560/product/irego/thum_2.png",
          ]}
          banners={[
            "/assets/mobile/product/irego/banner_01.png",
            "/assets/mobile/product/irego/banner_01.png",
          ]}
        />
      </div>
    </>
  );
}
