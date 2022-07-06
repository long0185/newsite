import { motion } from "framer-motion";
import React from "react";
import s from "./index.module.css";

export default function index() {
  const [list, setList] = React.useState([]);
  const [list_1, setList_1] = React.useState([]);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/hometwo")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            setList(val);
          }
        });
    }
    getList();
    return () => {};
  }, []);
  React.useEffect(() => {
    async function getList() {
      fetch("/web/tableInfo/homethree")
        .then((res) => res.json())
        .then((res) => {
          if (res.code == 200 && Array.isArray(res.value) && res.value.length > 0) {
            let val = res.value;
            setList_1(val);
          }
        });
    }
    getList();
    return () => {};
  }, []);
  return (
    <>
      <div className={`${s.wrap} bg-gray-100 w-100 flex flex-col items-center`}>
        <div className={`${s.innovate_2} relative`}>
          <a href={(list[1] || {}).link}>
            <img
              className={`${s.img_1} img-fluid`}
              src={(list[1] || {}).ImageUrl || "/assets/2560/home/new_2.png"}
              // whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
              // whileTap={{ scale: 1, transition: { duration: 0.5 } }}
            />
          </a>
          <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[1] || {}).btnName || "创新产品"}</div>
        </div>
        <div className="flex w_972 h_968 mt-3 justify-between">
          <div className="flex flex-col w_622">
            <div className={`relative mb-3`}>
              <a href={(list[0] || {}).link}>
                <img className={`w-100 h-100 img-fluid`} src={(list[0] || {}).ImageUrl || "/assets/2560/home/new_1.png"} />
              </a>
              <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[0] || {}).btnName || "创新技术"}</div>
            </div>
            <div className={`relative`}>
              <a href={(list[2] || {}).link}>
                <img
                  className="img-fluid"
                  src={(list[2] || {}).ImageUrl || "/assets/2560/home/new_3.png"}
                  // whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
                  // whileTap={{ scale: 1, transition: { duration: 0.5 } }}
                />
              </a>
              <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[2] || {}).btnName || "创新技术"}</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pl-3 justify-between">
            <div className={`relative`}>
              <a href={(list[3] || {}).link}>
                <motion.img className="img-fluid" src={(list[3] || {}).ImageUrl || "/assets/2560/home/new_4.png"} />
              </a>
              <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[3] || {}).btnName || "创新技术"}</div>
            </div>
            <div className={`relative my-3`}>
              <a href={(list[4] || {}).link}>
                <motion.img className="img-fluid" src={(list[4] || {}).ImageUrl || "/assets/2560/home/new_5.png"} />
              </a>
              <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[4] || {}).btnName || "创新技术"}</div>
            </div>
            <div className={`relative`}>
              <a href={(list[5] || {}).link}>
                <motion.img className="img-fluid" src={(list[5] || {}).ImageUrl || "/assets/2560/home/innovate.png"} />
              </a>
              <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center w_145 bottom-5 left-5 absolute`}>{(list[5] || {}).btnName || "创新技术"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.wrap} bg-white w-100 flex flex-col items-center`}>
        <div className={`${s.innovate_2} relative mb-3`}>
          <a href={(list_1[0] || {}).link}>
            <img className={`${s.img_1} img-fluid`} src={(list_1[0] || {}).ImageUrl || "/assets/2560/home/new_2.png"} />
          </a>
          <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center px-2  bottom-5 left-5 absolute`}>{(list_1[0] || {}).textName || "成功案例"} </div>
        </div>
        <div className={`${s.innovate_2} relative`}>
          <a href={(list_1[1] || {}).link}>
            <img className={`${s.img_1} img-fluid`} src={(list_1[1] || {}).ImageUrl || "/assets/2560/home/new_2.png"} />
          </a>
          <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center px-2  bottom-5 left-5 absolute`}>{(list_1[1] || {}).textName || "成功案例"} </div>
        </div>
        <div className={`flex items-center justify-center ${s.innovate_3} mt-3`}>
          <div className={`relative flex-1 h-100`}>
            <a href={(list_1[2] || {}).link}>
              <motion.img className="h-100" src={(list_1[2] || {}).ImageUrl || "/assets/2560/home/example-area.png"} />
            </a>
            <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center px-2 bottom-5 left-5 absolute`}>{(list_1[2] || {}).textName || "成功案例"}</div>
          </div>
          <div className={`relative flex-1 h-100 mx-2`}>
            <a href={(list_1[3] || {}).link}>
              <motion.img className="h-100" src={(list_1[3] || {}).ImageUrl || "/assets/2560/home/example-personal.png"} />
            </a>
            <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center px-2  bottom-5 left-5 absolute`}>{(list_1[3] || {}).textName || "成功案例"}</div>
          </div>
          <div className={`relative flex-1 h-100`}>
            <a href={(list_1[4] || {}).link}>
              <motion.img className="h-100" src={(list_1[4] || {}).ImageUrl || "/assets/2560/home/example-his.png"} />
            </a>
            <div className={`h_52 font_size_24 bg-$primary justify-center text-white flex items-center px-2 bottom-5 left-5 absolute`}>{(list_1[4] || {}).textName || "成功案例"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
