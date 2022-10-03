import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortNav } from "../action/globalAction";
import MainNavbar from "./Navbar/MainNavbar";
import NavHover from "./Navbar/NavHover";
const Layout = ({ children }) => {
  const cursor = useRef(null);
  const activeNav = useSelector((state) => state.navActive);
  const activeLogo = useSelector((state) => state.logoHovered);
  const shortNavActive = useSelector((state) => state.shortNav);
  const dispatch = useDispatch();
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.current.style.left = x + "px";
    cursor.current.style.top = y + "px";
  };

  return (
    <main onMouseMove={(e) => editCursor(e)}>
      <div
        id="mouse"
        className={
          shortNavActive && activeLogo
            ? "mouse blend-mode-normal"
            : "mouse blend-mode-exclusion"
        }
        ref={cursor}
        style={
          activeNav || (activeLogo && !shortNavActive)
            ? { transform: "translate(-50%, -50%) scale(2.5)" }
            : shortNavActive && activeLogo
            ? {
                transform: "translate(-50%, -50%) scale(2.5)",
                mixBlendMode: "normal !important",
              }
            : {}
        }
      >
        <div
          className="mouse__pointer"
          style={
            shortNavActive && activeLogo
              ? {
                  display: "none",
                }
              : {}
          }
        ></div>
        <div
          className="mouse__pointer__nav blend-mode-normal"
          style={
            shortNavActive && activeLogo
              ? { backgroundColor: "white" }
              : { display: "none" }
          }
        ></div>
      </div>
      <MainNavbar />
      <NavHover active={activeNav} />
      <main className="main-body">{children}</main>
    </main>
  );
};

export default Layout;
