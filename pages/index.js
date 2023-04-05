import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Lunga from "@/components/Lunga";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mood project</title>
        <meta
          name="description"
          content="Find the best workouts and meditations based on your mood right now"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainwrapper}>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.headline}>What’s your mood today?</h1>
          </div>
          <div className={styles.emojiContainer}>
            <div className={styles.happyStressContainer}>
              <Link className={styles.happyLink} href={"/energized"}>
                <div className={styles.happyCircle}>ENERGIZED</div>
              </Link>
              <Link className={styles.stressedLink} href={"/stressed"}>
                <div className={styles.stressedCircle}>STRESSED</div>
              </Link>
            </div>
            <div className={styles.tiredAllContainer}>
              <Link className={styles.tiredLink} href={"/tired"}>
                <div className={styles.tiredCircle}>TIRED</div>
              </Link>
              <Link className={styles.allLink} href={"/mixed"}>
                <div className={styles.allCircle}>MIXED</div>
              </Link>
            </div>
          </div>
          <div className={styles.text}>
            <p>
              Feeling overwhelmed? Dont worry. We got you. Choose a mood that
              fits your mind and we will give you a list of fitting exercises.
            </p>
          </div>
          <div className={styles.arrowWrapper}>
            <Scroll />
          </div>
        </div>
      </main>
      <Lunga />
    </>
  );
}
