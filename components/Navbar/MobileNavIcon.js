import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileNavOff, mobileNavOn } from "../../action/globalAction";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const MobileNavIcon = () => {
  const dispatch = useDispatch();
  const mobileNavActive = useSelector((state) => state.mobileNav);
  const router = useRouter();
  const [scale, setScale] = useState(1);
  const [top, setTop] = useState("85%");

  const clickIcon = () => {
    if (mobileNavActive) {
      dispatch(mobileNavOff());
      router.push("/");
    } else {
      dispatch(mobileNavOn());
    }
  };
  useEffect(() => {
    if (mobileNavActive) {
      setScale(1.5);
      setTop("10%");
    } else {
      setScale(1);
      setTop("85%");
    }
  }, [mobileNavActive]);

  return (
    <motion.div
      key="nav-icon"
      className="mobile-nav-icon d-block d-lg-none"
      onClick={clickIcon}
      animate={{
        backgroundColor: mobileNavActive
          ? [
              "hsla(60,1%,31%,0.8)",
              "hsla(0,0%,100%,0.8)",
              "hsla(0,0%,100%,0.8)",
              "hsla(0,0%,100%,0.8)",
            ]
          : ["hsla(0,0%,100%,0.8)", "hsla(60,1%,31%,0.8)"],
        top,

        transform: `translate(-50%) scale(${scale})`,
      }}
      transition={{ duration: 0.8, type: "tween", ease: "easeOut" }}
      style={{ left: "50%", borderRadius: "5%" }}
    >
      <Image
        src={"/pics/logowhite.png"}
        height="50"
        width={"50"}
        alt="nav-logo"
        className="p-0 m-0 blend-mode-exclusion  pt-1"
      />
    </motion.div>
  );
};

export default MobileNavIcon;
