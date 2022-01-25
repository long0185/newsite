import React from "react";
import IrecogDetail from "./components/product/IrecogDetail";
import IrecogNav from "./components/product/IrecogNav";
import ProductIrecog from "./components/product/productIrecog";
import NavBar from "./components/Navbar";
export default function product() {
  return (
    <>
      <NavBar />
      <div className="contianer-fluid pt_104">
        <ProductIrecog />
        <IrecogNav />
        <IrecogDetail />
      </div>
    </>
  );
}
