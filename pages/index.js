import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import happySvg from "../public/happy.svg";
import Header from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mood project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <h1>What’s your mood today?</h1>
        </div>
        <main>
          <div className={styles.emojiContainer}>
            <div className={styles.happyStressContainer}>
              <Link className={styles.happyImg} href={"/happy"}>
                <Image src={happySvg} alt="Happy emoji" />
              </Link>
              <Link className={styles.stressedImg} href={"/stressed"}>
                <Image src={happySvg} alt="Stressed emoji" />
              </Link>
            </div>
            <div className={styles.tiredAllContainer}>
              <Link className={styles.tiredImg} href={"/tired"}>
                <Image src={happySvg} alt="Tired emoji" />
              </Link>
              <Link className={styles.tiredImg} href={"/all"}>
                <Image src={happySvg} alt="Tired emoji" />
              </Link>
            </div>
          </div>
          <div className={styles.text}>
            <h3>
              We know that every day is full of decisions, tell us how you feel
              today and we’ll give you exercises based on your mood. blablabla
            </h3>
          </div>
        </main>
      </div>
    </>
  );
}
