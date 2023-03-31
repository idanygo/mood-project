import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Lunga from "@/components/Lunga";
import Scroll from "@/components/Scroll";

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
              We know that every day is full of decisions, tell us how you feel
              today and we’ll give you exercises based on your mood. blablabla
            </p>
          </div>

          <Scroll />
        </div>
      </main>
      <section className={styles.lungaWrapper}>
        <h3 className={styles.breathHeader}>
          Maybe some deep breaths is all you need?
        </h3>
        <Lunga growTime={2} shrinkTime={2} />
        <form className={styles.breathForm}>
          <input placeholder="Seconds for breath in" />
          <input placeholder="Seconds for breath out" />
        </form>
      </section>
    </>
  );
}
