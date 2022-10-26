import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
const RouteShow = ({ scrolled }) => {
  const router = useRouter();

  return (
    <div
      className="page-nav-wrap"
      style={scrolled > 300 ? { height: "70px" } : {}}
    >
      <motion.div
        key="home-about1"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/about" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text"
        transition={{ duration: 1 }}
      >
        ABOUT
      </motion.div>
      <motion.div
        key="home-about2"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/roastery" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text"
        transition={{ duration: 1 }}
      >
        ROASTERY
      </motion.div>
      <motion.div
        key="home-about3"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/location" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text-location"
        transition={{ duration: 1 }}
      >
        LOCATION
      </motion.div>
      <motion.div
        key="location-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/menu" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text-location"
        transition={{ duration: 1 }}
      >
        MENU
      </motion.div>
      <motion.div
        key="location-blog"
        initial={{ opacity: 0 }}
        animate={{ opacity: router.pathname === "/blogs" ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="page-nav-text-location"
        transition={{ duration: 1 }}
      >
        BLOGS
      </motion.div>
    </div>
  );
};

export default RouteShow;
