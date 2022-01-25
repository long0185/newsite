import React from "react";

export default function ProductSubnav() {
  return (
    <ul
      className="product-subnav nav w-100 nav-pills d-flex justify-content-center align-items-center"
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
          关于金矢
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
          公司团队
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
          发展历程
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
          资质荣誉
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
          合作单位
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
          联系方式
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
          招贤纳士
        </a>
      </li>
    </ul>
  );
}
