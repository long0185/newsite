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
          iReGo下肢康复机器人
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
          iReMo上肢康复机器人
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
          iReCog认知机器人
        </a>
      </li>
    </ul>
  );
}
