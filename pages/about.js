import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutPageParallax from "../components/AboutPageParallax";

const About = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [selected, setSelected] = useState(1);
  const [clicked, setClicked] = useState(false);
  const mouseEnter = (data) => {
    setX(data);
  };

  const mouseLeave = () => {
    if (selected === 1) {
      setX(0);
    }
    if (selected === 2) {
      setX(43);
    }
    if (selected === 3) {
      setX(85);
    }
    if (selected === 4) {
      setX(128);
    }
  };
  const clickEvent = (selected, data, scroll) => {
    setClicked(true);
    setSelected(selected);
    scrollTo({
      top: data,
      left: 0,
      behavior: "auto",
    });
    setX(scroll);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };
  useEffect(() => {
    if (!clicked) {
      switch (selected) {
        case 1:
          setX(0);
          break;
        case 2:
          setX(43);
          break;
        case 3:
          setX(85);
          break;
        case 4:
          setX(128);
          break;
        default:
          break;
      }
    }
  }, [selected, clicked]);

  return (
    <>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="page-nav d-none d-sm-none d-lg-block bg-white"
        onScroll={() => setClicked(false)}
        transition={{ duration: 1 }}
      >
        <div className="page-nav__grad grad-bg"></div>
        <motion.div
          className="page-nav__circle"
          animate={{ x, y }}
          transition={{
            x: { duration: 0.01 },
            default: { ease: "linear" },
          }}
          style={{ left: "30px" }}
        ></motion.div>

        <div className="page-nav__no-wrapper">
          <button
            className="page-nav__no js-btn this-active"
            data-id="0"
            data-href="https://noccoffeeco.com/en/about-us/curation/"
            data-headertitle="Curation - NOC COFFEE CO."
            // style="opacity: 1;"
            onMouseEnter={() => mouseEnter(1, 0)}
            onClick={() => clickEvent(1, 0, 0)}
            onMouseLeave={mouseLeave}
          >
            01
          </button>
          <button
            className="page-nav__no js-btn"
            data-id="1"
            data-href="https://noccoffeeco.com/en/about-us/coffee/"
            data-headertitle="Coffee - NOC COFFEE CO."
            // style="opacity: 1;"
            onMouseEnter={() => mouseEnter(43)}
            onMouseLeave={mouseLeave}
            onClick={() => clickEvent(2, 600, 43)}
          >
            02
          </button>
          <button
            className="page-nav__no js-btn"
            data-id="2"
            data-href="https://noccoffeeco.com/en/about-us/food/"
            data-headertitle="Food - NOC COFFEE CO."
            onMouseEnter={() => mouseEnter(85)}
            onMouseLeave={mouseLeave}
            onClick={() => clickEvent(3, 1200, 85)}
          >
            03
          </button>
          <button
            className="page-nav__no js-btn"
            data-id="3"
            data-href="https://noccoffeeco.com/en/about-us/space/"
            data-headertitle="Sai Ying Pun, Sheung Wan, Wanchai and Central - NOC COFFEE CO."
            onMouseEnter={() => mouseEnter(128)}
            onMouseLeave={mouseLeave}
            onClick={() => clickEvent(4, 1800, 128)}
          >
            04
          </button>
        </div>
        <div className="page-nav__lbl-wrapper">
          <div className="page-nav__lbl this-active" data-id="0">
            Curation
          </div>
          <div className="page-nav__lbl" data-id="1" style={{ opacity: "0" }}>
            Coffee
          </div>
          <div className="page-nav__lbl" data-id="2" style={{ opacity: "0" }}>
            Food
          </div>
          <div className="page-nav__lbl" data-id="3" style={{ opacity: "0" }}>
            Space
          </div>
        </div>
      </motion.div>{" "}
      <motion.div
        className="page-left bg-white"
        key="aboutvideo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          autoplay="autoplay"
          loop
          muted
          playsinline
          poster="https://noccoffeeco.com/media/2019/03/Home_portrait.jpg"
          className="nav-hover__img-item page-left__media"
          data-id="0"
        >
          <source
            src="https://noccoffeeco.com/media/2021/05/Home_portrait.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
      <div
        className="page-right bg-white"
        onScroll={() => console.log("scrolled")}
      >
        <section
          className="page-section js-section this-current this-active"
          data-id="0"
          data-href="https://noccoffeeco.com/en/about-us/curation/"
          data-headertitle="Curation - NOC COFFEE CO."
        >
          <div>
            <AboutPageParallax
              setSelected={setSelected}
              selected={selected}
              clicked={clicked}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
