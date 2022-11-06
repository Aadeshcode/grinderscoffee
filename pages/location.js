import { motion } from "framer-motion";
import React from "react";
const Location = () => {
  return (
    <div>
      <motion.div
        className="page-left bg-white"
        key="aboutvideo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none!important",
              height: "100%",
              width: "100%",
              // filter: "grayscale(100)",
            }}
          >
            <iframe
              height="100%"
              width="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=grinders%20coffee&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="page-right bg-white"
        key="aboutvideo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="mapouter d-block d-lg-none"
          style={{
            position: "relative",
            textAlign: "right",
            height: "500px",
            width: "100%",
          }}
        >
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none!important",
              height: "100%",
              width: "100%",
              // filter: "grayscale(100)",
            }}
          >
            <iframe
              height="100%"
              width="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=grinders%20coffee&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
        <div className="d-flex justify-content-center p-3 flex-column location-page-text-wrap">
          <h1 className="display-3">OUR LOCATION</h1>
          <div>
            <p className="py-3" style={{ fontFamily: "regular" }}>
              THE ROASTERY
            </p>
            <p className="pb-3" style={{ fontFamily: "regular" }}>
              Shop 4, G/F, Bohemian House, 321 Des Voeux Road West, Sai Ying Pun
            </p>
            <p className="" style={{ fontFamily: "regular" }}>
              Contact - (+977) 9845807766
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;
