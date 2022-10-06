import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
export default function Home() {
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
          <link rel="icon" href="/favicon.ico" />
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
            <source src="/pics/home_gough.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </>
  );
}
