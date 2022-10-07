import React from "react";
import { motion } from "framer-motion";
const SectionShow = ({ selected }) => {
  return (
    <div>
      <motion.div
        key="one-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected === 1 ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="section-nav"
        transition={{ duration: 1 }}
      >
        CURATION
      </motion.div>
      <motion.div
        key="one-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected === 2 ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="section-nav"
        transition={{ duration: 1 }}
      >
        COFFEE
      </motion.div>
      <motion.div
        key="one-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected === 3 ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="section-nav"
        transition={{ duration: 1 }}
      >
        FOOD
      </motion.div>
      <motion.div
        key="one-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: selected === 4 ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="section-nav"
        transition={{ duration: 1 }}
      >
        SPACE
      </motion.div>
    </div>
  );
};

export default SectionShow;
