import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grinders Cafe</title>
        <meta name="description" content="Grinders Cafe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home-vid d-none d-lg-block">
        <video
          autoplay="autoplay"
          loop
          muted
          playsinline
          poster="https://noccoffeeco.com/media/2019/03/home_gough.jpg"
          class="home-vid__vid"
        >
          <source src="/pics/home_gough.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
