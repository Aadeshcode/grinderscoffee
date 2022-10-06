import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  hoverLogo,
  hoverLogoHalt,
  hoverNav,
  hoverNavHalt,
  runTransition,
  shortNav,
  shortNavHalt,
  transitionHalt,
} from "../../action/globalAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useScroll } from "framer-motion";
const MainNavbar = () => {
  const shortNavActive = useSelector((state) => state.shortNav);
  const transitionRunning = useSelector((state) => state.transition);
  const dispatch = useDispatch();
  const router = useRouter();
  const [x, setX] = useState(0);
  const [y, setY] = useState(250);
  const { scrollY } = useScroll();
  const clickLogo = () => {
    if (shortNavActive) {
      dispatch(shortNavHalt());
      dispatch(runTransition());
      setX(0);
      setY(0);
      setTimeout(() => {
        dispatch(transitionHalt());
      }, 3000);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      dispatch(shortNavHalt());
      setY(0);
    } else {
      dispatch(shortNav());
      setY(250);
    }
  }, [router.pathname, dispatch]); //eslint-disable-line
  const clickNav = () => {
    dispatch(shortNav());
    setY(250);
    dispatch(hoverNavHalt());
  };

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (!shortNavActive && !transitionRunning && router.pathname !== "/") {
        dispatch(shortNav());
        setY(250);
      }
    });
  }, [scrollY, transitionRunning, shortNavActive]); //eslint-disable-line
  return (
    <div className="navbar-content-wrapper py-5 ">
      <motion.div
        animate={{ x, y }}
        transition={{ duration: 1.5, type: "spring" }}
        className="flex-center logo-main "
        style={{ zIndex: "1000000000000" }}
      >
        <Link href={shortNavActive ? router.pathname : "/"} scroll={false}>
          <Image
            src={"/pics/logo.png"}
            width="100"
            height={100}
            alt="logo"
            onMouseEnter={() => dispatch(hoverLogo())}
            onMouseLeave={() => dispatch(hoverLogoHalt())}
            onClick={clickLogo}
          />
        </Link>
      </motion.div>

      <motion.nav
        key="aboutvideo2"
        initial={{ opacity: 0 }}
        animate={{ opacity: shortNavActive ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex-center mt-5"
      >
        <ul className="mt-5">
          <Link href="/about">
            <li
              className="text-center py-2 navLink"
              onMouseEnter={() => dispatch(hoverNav("ABOUT"))}
              onMouseLeave={() => dispatch(hoverNavHalt(""))}
              onClick={() => clickNav()}
            >
              ABOUT
            </li>
          </Link>
          <Link href="/roastery">
            <li
              className="text-center py-2"
              onMouseEnter={() => dispatch(hoverNav("ROASTERY"))}
              onMouseLeave={() => dispatch(hoverNavHalt(""))}
              onClick={() => clickNav()}
            >
              ROASTERY
            </li>
          </Link>
          <Link href="/location">
            <li
              className="text-center py-2"
              onMouseEnter={() => dispatch(hoverNav("LOCATIONS"))}
              onMouseLeave={() => dispatch(hoverNavHalt(""))}
              onClick={() => clickNav()}
            >
              LOCATIONS
            </li>
          </Link>
          <li
            className="text-center py-2"
            onMouseEnter={() => dispatch(hoverNav("EVENTS"))}
            onMouseLeave={() => dispatch(hoverNavHalt(""))}
          >
            EVENTS
          </li>
          <li
            className="text-center py-2"
            onMouseEnter={() => dispatch(hoverNav("CONTACTS"))}
            onMouseLeave={() => dispatch(hoverNavHalt(""))}
          >
            CONTACTS
          </li>
          <li
            className="text-center py-2"
            onMouseEnter={() => dispatch(hoverNav("MENU"))}
            onMouseLeave={() => dispatch(hoverNavHalt(""))}
          >
            MENU
          </li>
        </ul>
      </motion.nav>
      <div
        className="social flex-center mt-5"
        style={
          shortNavActive
            ? { opacity: 0, transition: "1s all", display: "none" }
            : { opacity: 1 }
        }
      >
        <IoLogoInstagram style={{ height: "100px", fontSize: "30px" }} />
        <ImFacebook style={{ height: "100px", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default MainNavbar;
