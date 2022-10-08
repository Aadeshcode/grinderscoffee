import React from "react";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { mobileNavOff } from "../../action/globalAction";
const MobileNavbar = () => {
  const dispatch = useDispatch();
  const mobileNavActive = useSelector((state) => state.mobileNav);
  const clickEvent = () => {
    dispatch(mobileNavOff());
  };
  return (
    <>
      <div className=" ">
        <motion.nav
          key="aboutvideo2"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileNavActive ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="navbar-mobile-content-wrapper d-block d-md-none bg-white flex-center"
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
              <li className="text-center py-2">LOCATIONS</li>
            </Link>
            <li className="text-center py-2">EVENTS</li>
            <li className="text-center py-2">CONTACTS</li>
            <li className="text-center py-2">MENU</li>
          </ul>
        </motion.nav>
        {/* <div className="social flex-center mt-5">
          <IoLogoInstagram style={{ height: "100px", fontSize: "30px" }} />
          <ImFacebook style={{ height: "100px", fontSize: "20px" }} />
        </div> */}
      </div>
      {/* <div>
        <AiOutlineCloseCircle />
      </div> */}
    </>
  );
};

export default MobileNavbar;
