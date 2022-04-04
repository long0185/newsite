import React from "react";
import IregoNav from "./components/product/IregoNav";
import IregoDetail from "./components/product/IregoDetail";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as MyCarousel } from "react-responsive-carousel";
export default function product() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/banirego")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            val = val.sort((a, b) => a.OrderNu - b.OrderNu);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="hidden mobile:block contianer-fluid pt_104">
        <Carousel list={list} />
        {/* <MyCarousel autoPlay={true} interval={2000} infiniteLoop={true} showIndicators={false} showArrows={false} showStatus={false}>
          <div>
            <img className={``} src={`/assets/2560/product/irego/banner01.png`} alt="" />
          </div>
          <div>
            <img className={``} src={`/assets/2560/product/irego/banner02.jpeg`} alt="" />
          </div>
        </MyCarousel> */}
        <IregoNav />
        <IregoDetail />
      </div>
      <div className="mobile:hidden contianer-fluid pt_104">
        <Carousel list={list} />
        <IregoNav />
        <IregoDetail />
      </div>
    </div>
  );
}
