import * as React from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";
import Link from "next/link";

const MenuItem = ({ i, path, isTitle }) => {
  return (
    <li className={`${s.li} p-0 mt-4`}>
      <div className={`${s.text_placeholder} my-2 ${isTitle ? "text-3xl" : ""}`}>
        <a href={path}>{i}</a>
      </div>
    </li>
  );
};

export default MenuItem;
