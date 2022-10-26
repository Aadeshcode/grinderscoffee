import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const NavHover = ({ active }) => {
  const shortNavActive = useSelector((state) => state.shortNav);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: shortNavActive ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="nav-hover"
        style={active ? { backgroundColor: "white" } : {}}
      >
        <div className="nav-hover-image">
          <video
            autoPlay="autoPlay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2021/04/About.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "ABOUT" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/About.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="nav-hover-image">
          <video
            autoPlay="autoPlay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/Home_portrait.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "LOCATIONS" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/Home_portrait.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/rewards.jpg"
            alt="rewards"
            height={850}
            width={700}
            style={
              active === "EVENTS"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/team.jpg"
            alt="team"
            height={870}
            width={600}
            style={
              active === "CONTACTS"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/packet.jpg"
            alt="team"
            height={870}
            width={600}
            style={
              active === "MENU"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <video
            autoPlay="autoPlay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/roastery.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "ROASTERY" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2019/02/roastery_menu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "ABOUT"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3" data-id="0">
          Where coffee <br />
          meets design{" "}
        </h1>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "LOCATIONS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3">
          Unusual Spaces <br /> Brought To Life
        </h1>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "EVENTS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3">
          Articles From <br /> Grinders Cafe
        </h1>
      </div>
      <div
        className="nav-hover-text "
        style={
          active === "ROASTERY"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3  " data-id="0">
          Carefully Selected
          <br /> Beans in <br />
          Roastery House
        </h1>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "CONTACTS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3 " data-id="0">
          A Real Person <br /> Will Answer
        </h1>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "MENU"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <h1 className="nav-hover-text-item font-caps display-3 " data-id="0">
          Best Coffee Items <br /> In Chitwan
        </h1>
      </div>
    </motion.div>
  );
};

export default NavHover;
