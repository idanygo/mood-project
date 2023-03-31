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
          <div className={styles.headline}>
            <h1>What’s your mood today?</h1>
          </div>
          <div className={styles.emojiContainer}>
            <div className={styles.happyStressContainer}>
              <Link className={styles.happyLink} href={"/happy"}>
                <div className={styles.happyCircle}>HAPPY</div>
              </Link>
              <Link className={styles.stressedLink} href={"/stressed"}>
                <div className={styles.stressedCircle}>STRESSED</div>
              </Link>
            </div>
            <div className={styles.tiredAllContainer}>
              <Link className={styles.tiredLink} href={"/tired"}>
                <div className={styles.tiredCircle}>TIRED</div>
              </Link>
              <Link className={styles.allLink} href={"/all"}>
                <div className={styles.allCircle}>ALL</div>
              </Link>
            </div>
          </div>
          <div className={styles.text}>
            <p>
              Feeling overwhelmed? Dont worry. We got you. Choose a mood that fits your mind and we will give you a list of fitting exercises.
              {/* We know that every day is full of decisions, tell us how you feel
              today and we’ll give you exercises based on your mood. blablabla */}
              {/* Everyday we're faced with diffrent decisions, some harder than others.
              There are those who say that from the time we rise in the morning until we crasch at night
              we have said "yes", "no" or "maybe" to hundreds of questions. */}
            </p>
            {/* <br />
            <p>
              It's no surprise that you might feel overwhelmed. <strong>But dont worry. We got you. </strong>
              Just choose a mood thats fits your state of mind right now and we will provied you with some fitting exercises.</p> */}
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
