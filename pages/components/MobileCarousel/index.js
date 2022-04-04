import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import s from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Example = ({ bgs = [] }) => {
  const [num, setNum] = useState(0);
  const ref = React.useRef(null);
  const [list, setList] = useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/homeone")
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
    <div className={`${s.wrap} relative overflow-hidden w-100 mt_104`}>
      <Carousel showStatus={false} swipeable={true} emulateTouch showArrows={false}>
        {list.map((item, index) => (
          <div key={item.id} className="relative">
            <div className="absolute w-100 justify-center items-center top-60 flex flex-col">
              <img className={`${s.textImge}`} src={item.textImageUrl} alt="" />
              <a className={`${s.btnImg} mt-6`} href={item.link} target="_blank">
                <img src={item.btnImageUrl} alt="" />
              </a>
            </div>
            <img className={`${s.img}`} src={item.mImageUrl} alt="" />
          </div>
        ))}
      </Carousel>
      {/* <motion.div className={`flex relative h-100`} animate={{ marginLeft: `${-100 * num}vw` }} style={{ width: `${bgs.length * 100}vw` }} transition={{ duration: 2 }}>
        {bgs.map((item, index) => (
          <div className={`${s.img} relative`}>
            <img key={index} className={`${s.img} absolute`} src={item} />
          </div>
        ))}
      </motion.div>
      <div className={`absolute w-100  ${s.bar_wrap} flex justify-center`}>
        {bgs.map((ele, i) => (
          <span key={i} className={`${s.bar}`}>
            <motion.div className="h-100 w-0 bg-$primary" animate={{ width: `${num == i ? "100%" : 0}` }} transition={{ duration: 3 }}></motion.div>
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default Example;
