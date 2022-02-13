import React from "react";

export default function ProductSubnav() {
  return (
    <ul
      className="product-subnav nav w-100 nav-pills flex justify-center items-center"
      id="pills-tab"
      role="tablist"
    >
      <li className="nav-item mx-3 " role="presentation">
        <a
          className="nav-link active p-0"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          维修服务
        </a>
      </li>
      <li className="nav-item mx-3" role="presentation">
        <a
          className="nav-link p-0"
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          使用指南
        </a>
      </li>
      <li className="nav-item mx-3" role="presentation">
        <a
          className="nav-link p-0"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          培训服务
        </a>
      </li>
    </ul>
  );
}
