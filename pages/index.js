import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import happySvg from "../public/happy.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mood project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <header>
          <h1>What’s your mood today?</h1>
        </header>
        <main>
          <div className={styles.emojiContainer}>
            <Link className={styles.happyImg} href={"/happy"}>
              <Image src={happySvg} alt="Happy emoji" />
            </Link>
            <Link className={styles.stressedImg} href={"/stressed"}>
              <Image src={happySvg} alt="Stressed emoji" />
            </Link>
            <Link className={styles.tiredImg} href={"/tired"}>
              <Image src={happySvg} alt="Tired emoji" />
            </Link>
            <Link className={styles.tiredImg} href={"/all"}>
              <Image src={happySvg} alt="Tired emoji" />
            </Link>
          </div>
          <h3>
            We know that every day is full of decisions, tell us how you feel
            today and we’ll give you exercises based on your mood. blablabla
          </h3>
        </main>
      </div>
    </>
  );
}
