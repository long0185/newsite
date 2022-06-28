import React from "react";
import s from "./index.module.css";
import Submenu from "../SubMenu";
import Menu from "../../Menu";
import { motion } from "framer-motion";

export default function index() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/hometwo")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value.reverse();
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <div className={`${s.wrap} d-center relative flex-col border bg-white`}>
      <Menu />
      <div className={`flex justify-center `}>
        <div className={`${s.innovate_1} relative cursor-pointer`}>
          <a href={(list[5] || {}).link}>
            <motion.img className="img-fluid" src={(list[5] || {}).ImageUrl || "/assets/2560/home/new_1.png"} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[5] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
        <div className={`${s.innovate_2} relative cursor-pointer`}>
          <a href={(list[4] || {}).link}>
            <motion.img className="img-fluid" src={(list[4] || {}).ImageUrl || "/assets/2560/home/new_2.png"} whileHover={{ scale: 1.01, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[4] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
      </div>
      <div className={`${s.news} flex justify-between cursor-pointer `}>
        <div className={`${s.market} relative`}>
          <a href={(list[3] || {}).link}>
            <motion.img className="img-fluid" src={(list[3] || {}).ImageUrl || "/assets/2560/home/new_3.png"} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[3] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
        <div className={`${s.news_1} relative cursor-pointer`}>
          <a href={(list[2] || {}).link}>
            <motion.img className="img-fluid" src={(list[2] || {}).ImageUrl || "/assets/2560/home/new_4.png"} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[2] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
        <div className={`${s.news_1} relative hover:bg-gray-600 cursor-pointer`}>
          <a href={(list[1] || {}).link}>
            <motion.img className="img-fluid" src={(list[1] || {}).ImageUrl || "/assets/2560/home/new_5.png"} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[1] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
        <div className={`${s.news_1} cursor-pointer relative`}>
          <a href={(list[0] || {}).link}>
            <motion.img className="img-fluid" src={(list[0] || {}).ImageUrl || "/assets/2560/home/innovate.png"} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }} whileTap={{ scale: 1, transition: { duration: 0.5 } }} />
            <div className={`${s.innovate_btn} absolute`}>{(list[0] || {}).btnName || "创新技术"}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
