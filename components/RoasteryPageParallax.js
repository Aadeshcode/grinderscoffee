import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortNav } from "../action/globalAction";
import { useElementOnScreen } from "../utils/customHooks";
import { motion } from "framer-motion";
export default function RoasteryPageParallax({
  setSelected,
  selected,
  clicked,
}) {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();

  const [isVisible] = useElementOnScreen(oneRef);
  const google = useElementOnScreen(twoRef);
  const fb = useElementOnScreen(threeRef);
  const fr = useElementOnScreen(fourRef);
  useEffect(() => {
    if (!clicked) {
      if (isVisible) {
        setSelected(1);
      }
      if (google[0]) {
        setSelected(2);
      }
      if (fb[0]) {
        setSelected(3);
      }
    }
  }, [isVisible, google, fb, fr]); //eslint-disable-line

  return (
    <div>
      <section className="about-section" ref={oneRef}>
        <motion.div
          className="video-page-mob d-block d-lg-none bg-white"
          key="aboutvideo1 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/roastery_phil_new.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
          >
            <source
              src="https://noccoffeeco.com/media/2019/02/roastery_1_new.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <div className="p-3 px-lg-0 py-5 py-lg-0">
          <h1 className="display-6">Rooted in curation</h1>
          <p className="py-5">Coffee is our soul.</p>
          <p className="text-secondary">
            Focusing on the minute; being meticulous over every detail.
            Everything we do is considered to give an unparalleled experience of
            simplicity with substance.
          </p>
        </div>
      </section>
      <section className="about-section" ref={twoRef}>
        <motion.div
          className="video-page-mob d-block d-lg-none bg-white"
          key="aboutvideo2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/about_latte_new.jpg"
            className="page-left__media this-active"
            data-id="1"
          >
            <source
              src="https://noccoffeeco.com/media/2019/03/about_latte.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <div className="p-3 px-lg-0 py-5 py-lg-0">
          <h1 className="display-6">Coffee</h1>
          <p className="py-5">
            We believe coffee should be as simple or complex as you want it to
            be.
          </p>
          <p className="text-secondary">
            From the origin topography, to the water quality used in the end
            pour and everything in between, we obsess on every possible
            variable. Our ambition is to serve great tasting coffee from the
            best beans we can source each season from around the world.
          </p>
          <nav>
            <ul>
              <li className="effect-button mt-3">
                Roastery
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="about-section" ref={threeRef}>
        <motion.div
          className="video-page-mob d-block d-lg-none bg-white"
          key="aboutvideo3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2021/05/Food_2.jpg"
            className="page-left__media this-active"
            data-id="2"
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/Food.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <div className="p-3 px-lg-0 py-5 py-lg-0">
          <h1 className="display-6">Food</h1>
          <p className="py-5">
            Our healthy and nutritious food menu changes regularly to use the
            best seasonal ingredients, that are organic where possible.
          </p>
          <p className="text-secondary">
            We believe in the need for our customers to curate their own health
            choices or moral beliefs, so we have created a menu for vegans,
            pescatarians, and meat-lovers to enjoy without compromise.
          </p>
          <nav>
            <ul>
              <li className="effect-button mt-3">
                Food Menus
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
