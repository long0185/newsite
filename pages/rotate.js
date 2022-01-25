import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <motion.div
        className="example-container_1"
        style={{ display: "flex" }}
        animate={{
          translateX: -200,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
      >
        <div className="motion-wrap">
          <motion.div
            animate={{
              translateX: 150,
              translateY: 150,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </div>
        <div className="motion-wrap" style={{ justifyContent: "flex-end" }}>
          <motion.div
            animate={{
              translateX: -150,
              translateY: 150,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </div>
        <div className="motion-wrap">
          <motion.div
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: 150, translateY: -150 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </div>
        <div className="motion-wrap" style={{ justifyContent: "flex-end" }}>
          <motion.div
            style={{ alignSelf: "flex-end" }}
            animate={{ translateX: -150, translateY: -150 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        </div>
      </motion.div>
      <motion.div
        className="text"
        animate={{
          translateY: -250,
        }}
        transition={{
          duration: 2,
          delay: 4,
        }}
      >
        xxxxxxxx
      </motion.div>
    </>
  );
};

export default App;
