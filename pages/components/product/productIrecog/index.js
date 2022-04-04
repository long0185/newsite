import React from "react";
import Carousel from "../../Carousel";
export default function ProductIRego() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/banirecog")
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
      <div className="w-100 hidden mobile:block relative product-banner">
        <Carousel list={list} />
      </div>
      <div className="mobile:hidden">
        <Carousel list={list} />
      </div>
    </>
  );
}
