import * as React from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";
import left_img from "assets/2560/home/logo.svg";
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <div className="px-5">
    <img
      src="/assets/2560/home/logo.svg"
      className={`${s.left_img} relative`}
    ></img>
    <button onClick={toggle} className={`${s.button} mr-2`}>
      <svg width="36" height="36" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", opacity: 0.6 },
            open: { d: "M 3 16.5 L 17 2.5", opacity: 0.6 },
          }}
        />
        <Path
          d="M 2 9.423 L 15 9.423"
          variants={{
            closed: { opacity: 0.6 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", opacity: 0.6 },
            open: { d: "M 3 2.5 L 17 16.346", opacity: 0.6 },
          }}
        />
      </svg>
    </button>
  </div>
);

export default MenuToggle;
