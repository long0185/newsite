import React, { useState } from "react";
import s from "./index.module.css";
import Menu from "../../Menu";
import Footer from "../../Footer";
import { motion } from "framer-motion";
export const getImgName = (Imageurl) => {
  if (!Imageurl) {
    return "";
  }
  return Imageurl.split("picgure/")[1].split(".")[0];
};
export default function index() {
  const [modal, setModal] = useState("");
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/homethree")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            console.log("val: ", val);
            setList(val);
          }
        });
    }
    getList();
  }, []);
  return (
    <div className={`${s.wrap} flex relative flex-col justify-between items-center bg-white `}>
      <Menu />
      <div className={`${s.innovate} flex flex-col mobile:flex-row justify-center px-1`}>
        <div className={`${s.innovate_1} flex-1 bg-gray-400 mr-2 relative hover:bg-$primary cursor-pointer`}>
          <a href={(list[0] || {}).link}>
            <img className={`w-100 h-100 absolute `} src={(list[0] || {}).ImageUrl || "/assets/2560/home/example-area.png"} />
            <motion.div className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `} whileHover={{ opacity: 0.9 }} whileTap={{ opacity: 0 }}>
              <img src={`https://www.irego.cn/web/picgure/modal-${getImgName(list[0]?.ImageUrl)}.jpeg`} className="big_modal_svg top-38 absolute" alt="" />
              <span className="big_modal_text  text-white top-40 clear-both absolute">{list[0]?.textName.split("•")[1] || `成功案例`}</span>
              <img src="/assets/2560/modal-enter.svg" alt="" className="big_modal_icon img-fluid clear-both absolute" />
            </motion.div>
            <div className={`${s.innovate_btn} absolute  z-10`}>{(list[0] || {}).textName || `成功案例`}</div>
            {/* <img className="w-100 h-100" src={(list[0] || {}).ImageUrl} /> */}
          </a>
        </div>
        <div className={`${s.innovate_1} flex-1 bg-gray-400 ml-2 relative hover:bg-$primary cursor-pointer`}>
          <a href={(list[1] || {}).link}>
            <img className={`w-100 h-100 absolute `} src={(list[1] || {}).ImageUrl || "/assets/2560/home/example-area.png"} />
            <motion.div className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `} whileHover={{ opacity: 0.9 }} whileTap={{ opacity: 0 }}>
              <img src={`https://www.irego.cn/web/picgure/modal-${getImgName(list[1]?.ImageUrl)}.jpeg`} className="big_modal_svg top-38 absolute" alt="" />
              <span className="big_modal_text  text-white top-40 clear-both absolute">{list[1]?.textName.split("•")[1] || `成功案例`}</span>
              <img src="/assets/2560/modal-enter.svg" alt="" className="big_modal_icon img-fluid clear-both absolute" />
            </motion.div>
            <div className={`${s.innovate_btn} absolute  z-10`}>{(list[0] || {}).textName || `成功案例`}</div>
            {/* <img className="w-100 h-100" src={(list[0] || {}).ImageUrl} /> */}
          </a>
          {/* <div className={`${s.innovate_btn} absolute bottom-2 left-2`}>合作案例 · 实施中</div> */}
        </div>
      </div>
      <div className={`${s.news} flex justify-center`}>
        <div className={`${s.news_1} relative cursor-pointer`}>
          <a href={(list[2] || {}).link}>
            <img className={`${s.news_1} img-fluid absolute `} src={(list[2] || {}).ImageUrl || "/assets/2560/home/example-area.png"} />
            <motion.div className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `} whileHover={{ opacity: 0.9 }} whileTap={{ opacity: 0 }}>
              <img src={`https://www.irego.cn/web/picgure/modal-${getImgName(list[2]?.ImageUrl)}.jpeg`} className="modal_svg img-fluid top-32 absolute" alt="" />
              <span className="modal_text text-6xl text-white top-40 clear-both absolute">{list[2]?.textName.split("•")[1] || `成功案例`}</span>
              <img src="/assets/2560/modal-enter.svg" alt="" className="modal_icon img-fluid clear-both absolute" />
            </motion.div>
            <div className={`${s.innovate_btn} absolute  z-10`}>{(list[2] || {}).textName || `成功案例`}</div>
          </a>
        </div>
        <div className={`${s.news_1} ${s.news_mx} relative cursor-pointer`}>
          <a href={(list[3] || {}).link}>
            <img className={`${s.news_1} img-fluid absolute z-10`} src={(list[3] || {}).ImageUrl || "/assets/2560/home/example-personal.png"} />
            <motion.div className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `} whileHover={{ opacity: 0.9 }} whileTap={{ opacity: 0 }}>
              <img src={`https://www.irego.cn/web/picgure/modal-${getImgName(list[3]?.ImageUrl)}.jpeg`} className="modal_svg img-fluid top-32 absolute" alt="" />
              <span className="modal_text text-6xl text-white top-40 clear-both absolute">{list[3]?.textName.split("•")[1] || `成功案例`}</span>
              <img src="/assets/2560/modal-enter.svg" alt="" className="modal_icon img-fluid clear-both absolute" />
            </motion.div>
            <div className={`${s.innovate_btn} absolute z-20 `}>{(list[3] || {}).textName || `成功案例`}</div>
          </a>
        </div>
        <div className={`${s.news_1} relative cursor-pointer`}>
          <a href={(list[4] || {}).link}>
            <img className={`${s.news_1} img-fluid absolute`} src={(list[4] || {}).ImageUrl || "/assets/2560/home/example-his.png"} />
            <motion.div className={`${s.modal} absolute z-100 z-50 clear-both bg-$primary `} whileHover={{ opacity: 0.9 }} whileTap={{ opacity: 0 }}>
              <img src={`https://www.irego.cn/web/picgure/modal-${getImgName(list[4]?.ImageUrl)}.jpeg`} className="modal_svg img-fluid top-32 absolute" alt="" />
              <span className="modal_text text-6xl text-white top-40 clear-both absolute">{list[4]?.textName.split("•")[1] || `成功案例`}</span>
              <img src="/assets/2560/modal-enter.svg" alt="" className="modal_icon img-fluid clear-both absolute" />
            </motion.div>
            <div className={`${s.innovate_btn} absolute`}>{(list[4] || {}).textName || `成功案例`}</div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
