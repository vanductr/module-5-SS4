import React, { useState } from "react";
import "../../Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Trang chủ");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={activeTab === "Trang chủ" ? "active" : ""}
          onClick={() => handleClick("Trang chủ")}
        >
          Trang chủ
        </li>
        <li
          className={activeTab === "Sản phẩm" ? "active" : ""}
          onClick={() => handleClick("Sản phẩm")}
        >
          Sản phẩm
        </li>
        <li
          className={activeTab === "Giới thiệu" ? "active" : ""}
          onClick={() => handleClick("Giới thiệu")}
        >
          Giới thiệu
        </li>
        <li
          className={activeTab === "Liên hệ" ? "active" : ""}
          onClick={() => handleClick("Liên hệ")}
        >
          Liên hệ
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
