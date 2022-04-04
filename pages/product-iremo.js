import React from "react";
import IregoNav from "./components/product/IregoNav";
import IremoDetail from "./components/product/IremoDetail";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
export default function product() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/baniremo")
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
    <>
      <NavBar />
      <div className="hidden mobile:block contianer-fluid pt_104">
        <Carousel list={list} />
        <IregoNav />
        <IremoDetail />
      </div>
      <div className="mobile:hidden contianer-fluid pt_104">
        <Carousel list={list} />
        <IregoNav />
        <IremoDetail />
      </div>
    </>
  );
}
