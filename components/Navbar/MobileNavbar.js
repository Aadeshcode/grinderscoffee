import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { mobileNavOff } from "../../action/globalAction";
import { GrClose } from "react-icons/gr";
const MobileNavbar = () => {
  const dispatch = useDispatch();
  const mobileNavActive = useSelector((state) => state.mobileNav);
  const clickEvent = () => {
    dispatch(mobileNavOff());
  };
  return (
    <>
      <div className=" ">
        <motion.div
          key="closebutton"
          initial={{ opacity: 0, visibility: 0 }}
          animate={{
            opacity: mobileNavActive ? 1 : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="close-button-wrapper"
          style={mobileNavActive ? {} : { pointerEvents: "none" }}
          onClick={() => dispatch(mobileNavOff())}
        >
          <GrClose />
        </motion.div>

        <motion.nav
          key="aboutvideo2"
          initial={{ opacity: 0, visibility: 0 }}
          animate={{
            opacity: mobileNavActive ? 1 : 0,
            visibility: mobileNavActive ? 1 : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="navbar-mobile-content-wrapper  d-lg-none bg-white flex-center"
          style={mobileNavActive ? {} : { pointerEvents: "none" }}
        >
          <ul className="mt-5">
            <Link href="/about">
              <li className="text-center py-2 navLink" onClick={clickEvent}>
                ABOUT
              </li>
            </Link>
            <Link href="/roastery">
              <li className="text-center py-2" onClick={clickEvent}>
                ROASTERY
              </li>
            </Link>
            <Link href="/location">
              <li className="text-center py-2" onClick={clickEvent}>
                LOCATIONS
              </li>
            </Link>
            <li className="text-center py-2">EVENTS</li>
            <li className="text-center py-2">CONTACTS</li>
            <Link href="/menu">
              <li className="text-center py-2 " onClick={clickEvent}>
                MENU
              </li>
            </Link>
            <Link href="/blogs">
              <li className="text-center py-2 " onClick={clickEvent}>
                BLOGS
              </li>
            </Link>
          </ul>
        </motion.nav>
        {/* <div className="social flex-center mt-5">
          <IoLogoInstagram style={{ height: "100px", fontSize: "30px" }} />
          <ImFacebook style={{ height: "100px", fontSize: "20px" }} />
        </div> */}
      </div>
      <div></div>
    </>
  );
};

export default MobileNavbar;
