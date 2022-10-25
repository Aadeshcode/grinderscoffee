import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useScroll } from "framer-motion";
import MainNavbar from "./Navbar/MainNavbar";
import NavHover from "./Navbar/NavHover";
import RouteShow from "./RouteShow";
import MobileNavIcon from "./Navbar/MobileNavIcon";
import MobileNavbar from "./Navbar/MobileNavbar";
import { useRouter } from "next/router";
import ShareModal from "./ShareModal";
const Layout = ({ children }) => {
  const cursor = useRef(null);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = router.pathname;
  const activeNav = useSelector((state) => state.navActive);
  const activeLogo = useSelector((state) => state.logoHovered);
  const shortNavActive = useSelector((state) => state.shortNav);
  const [scrolledToBgW, setScrolledToBgW] = useState(false);
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.current.style.left = x + "px";
    cursor.current.style.top = y + "px";
  };
  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrolledToBgW(latest);
    });
  }, [scrollY]);
  return (
    <main onMouseMove={(e) => editCursor(e)}>
      <RouteShow scrolled={scrolledToBgW} />
      <div
        id="mouse"
        className={
          shortNavActive && activeLogo
            ? "mouse blend-mode-normal d-none d-lg-block"
            : "mouse blend-mode-exclusion d-none d-lg-block"
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
            (shortNavActive && activeLogo) || pathname === "/admin/blogs"
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
      <MobileNavIcon />
      <MobileNavbar />
      <NavHover active={activeNav} />
      <ShareModal />
      <main className="main-body">{children}</main>
    </main>
  );
};

export default Layout;
