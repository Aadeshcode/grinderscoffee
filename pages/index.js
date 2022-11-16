import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortNavHalt } from "../action/globalAction";
export default function Home() {
  const shortNavActive = useSelector((state) => state.shortNav);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shortNavHalt());
  }, [dispatch]);

  return (
    <>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
        transition={{ duration: 1 }}
      >
        <Head>
          <title>Grinders Cafe</title>
          <meta name="description" content="Grinders Cafe" />
          <link rel="icon" href="/pics/logowhite.ico" />
        </Head>

        <div className="home-vid d-none d-lg-block">
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/home_gough.jpg"
            className="home-vid__vid"
          >
            <source src="/pics/grindershome.mp4" type="video/mp4" />
          </video>
        </div>
        <div className=" home-vid bg-white d-block d-lg-none">
          <video
            autoPlay="autoplay"
            loop
            muted
            playsInline
            poster="https://noccoffeeco.com/media/2019/03/Home_portrait.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/Home_portrait.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>
    </>
  );
}
