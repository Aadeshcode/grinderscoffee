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
  shortNav,
  shortNavHalt,
} from "../../action/globalAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const MainNavbar = () => {
  const shortNavActive = useSelector((state) => state.shortNav);
  const dispatch = useDispatch();
  const router = useRouter();
  const [x, setX] = useState(0);
  const [y, setY] = useState(250);
  const clickLogo = () => {
    if (shortNavActive) {
      dispatch(shortNavHalt());
      setX(0);
      setY(0);
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

  return (
    <div className="navbar-content-wrapper py-5 ">
      <motion.div
        animate={{ x, y }}
        transition={{ type: "spring" }}
        className="flex-center logo-main "
      >
        <Link href={shortNavActive ? `${router.pathname}` : "/"}>
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
      <nav
        className="flex-center mt-5"
        style={
          shortNavActive
            ? { opacity: 0, transition: "1s all", display: "none" }
            : { opacity: 1 }
        }
      >
        <ul className="mt-5">
          <Link href="/about">
            <li
              className="text-center py-2 navLink"
              onMouseEnter={() => dispatch(hoverNav("ABOUT"))}
              onMouseLeave={() => dispatch(hoverNavHalt(""))}
            >
              ABOUT
            </li>
          </Link>
          <li
            className="text-center py-2"
            onMouseEnter={() => dispatch(hoverNav("ROASTERY"))}
            onMouseLeave={() => dispatch(hoverNavHalt(""))}
          >
            ROASTERY
          </li>
          <li
            className="text-center py-2"
            onMouseEnter={() => dispatch(hoverNav("LOCATIONS"))}
            onMouseLeave={() => dispatch(hoverNavHalt(""))}
          >
            LOCATIONS
          </li>
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
      </nav>
      <div
        className={
          router?.pathname !== "/" ? " d-none" : "social flex-center mt-5"
        }
        
      >
        <IoLogoInstagram style={{ height: "100px", fontSize: "30px" }} />
        <ImFacebook style={{ height: "100px", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default MainNavbar;
