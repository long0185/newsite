import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Example = ({ list = [] }) => {
  const [num, setNum] = useState(1);
  const ref = React.useRef(null);
  React.useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setNum((num) => (num + 1) % list.length);
    }, 5000);
    return () => clearTimeout(ref.current);
  }, [num]);
  const handleClick = (direction) => {
    clearTimeout(ref.current);
    if (direction == "left") {
      const newNum = num - 1 < 0 ? 0 : num - 1;
      setNum(newNum % list.length);
    }
    if (direction == "right") {
      const newNum = (num + 1) % list.length;
      setNum(newNum);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div className={` flex relative`} style={{ width: `${list.length * 100}vw` }} animate={{ marginLeft: `${-100 * num}vw` }} transition={{ duration: 2 }}>
        {list.map((item, index) => (
          <div key={index} className={`w-screen h_1687 h_786 overflow-hidden relative bg-info`}>
            <img className={`hidden mobile:block w-screen h_786 img-fluid`} src={item.ImageUrl} />
            <img className={`block mobile:hidden object-coverd`} src={item.mImageUrl} />
          </div>
        ))}
      </motion.div>
      <div className={`absolute hidden mobile:block ${s.icon_wrap} flex flex-col justify-between px-5`}>
        {list.map((item, index) => {
          return (
            <div key={index} className={`${s.icon} relative cursor-pointer my-1 overflow-hidden ${num == index ? " border-$primary border-2" : ""} `}>
              <img className={s.icon} src={item.smImageUrl} onClick={() => setNum((num) => index % list.length)} />
            </div>
          );
        })}
      </div>
      <div className={`absolute mobile:hidden ${s.m_icon_wrap} flex flex-col justify-between px-5`}>
        {list.map((item, index) => {
          return (
            <div key={index} className={`${s.icon} relative cursor-pointer my-1 overflow-hidden ${num == index ? " border-$primary border-2" : ""} `}>
              <img className={s.icon} src={item.smImageUrl} onClick={() => setNum((num) => index % list.length)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Example;
