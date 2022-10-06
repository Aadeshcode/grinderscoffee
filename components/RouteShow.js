import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
const RouteShow = () => {
  const router = useRouter();
  return (
    <>
      <motion.div
        key="home-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/about" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text"
        transition={{ duration: 1 }}
      >
        ABOUT
      </motion.div>
      <motion.div
        key="home-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/roastery" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text"
        transition={{ duration: 1 }}
      >
        ROASTERY
      </motion.div>
      <motion.div
        key="home-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/location" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text-location"
        transition={{ duration: 1 }}
      >
        LOCATION
      </motion.div>
    </>
  );
};

export default RouteShow;
