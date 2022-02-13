import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import s from "./index.module.css";
import index from "../product/IremoAppearance";





const Example = ({bgs=[]}) => {
  const [num, setNum] = useState(0);
  const ref = React.useRef(null);

  return (
    <div className={`${s.wrap} relative overflow-hidden w-100 mt_104`}>
      <motion.div
        className={`flex relative h-100`}
        animate={{ marginLeft: `${-100 * num}vw` }}
		style={{width:`${bgs.length*100}vw`}}
        transition={{ duration: 2 }}
      >
		  {bgs.map((item,index)=><div className={`${s.img} relative`}>
          <img
		  key={index}
            className={`${s.img} absolute`}
            src={item}
          />
        </div>)	
		}
      </motion.div>
      <div className={`absolute w-100  ${s.bar_wrap} flex justify-center`}>
		  {bgs.map((ele,i)=>
		  <span key={i} className={`${s.bar}`}>
          <motion.div
            className="h-100 w-0 bg-$primary"
            animate={{ width: `${num == i ? "100%" : 0}` }}
            transition={{ duration: 3 }}
          ></motion.div>
        </span>
		  )}
      </div>
    </div>
  );
};

export default Example;
