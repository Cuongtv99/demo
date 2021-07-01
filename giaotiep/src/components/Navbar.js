import React, { useState } from "react";
// import {  useEffect } from "react";

import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
            GTNM <i class="fas fa-graduation-cap"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                className="nav-links"
                onClick={closeMoblieMenu}
              >
                Khóa Học
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-links" onClick={closeMoblieMenu}>
                Tự luyện
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-links" onClick={closeMoblieMenu}>
                Tin Tức
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/record"
                className="nav-links"
                onClick={closeMoblieMenu}
              >
                Thành tựu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
