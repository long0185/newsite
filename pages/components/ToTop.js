import React from "react";

export default function ToTop() {
  return (
    <div>
      <img
        onClick={() => scrollTo(0, 0)}
        className="to_top fixed right-10 bottom-40"
        src="/assets/top.svg"
      ></img>
    </div>
  );
}
