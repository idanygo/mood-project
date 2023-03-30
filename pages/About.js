import styles from "@/styles/About.module.css";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>Meet your Mates</h1>
      <div className={styles.about}>
        <p>
          <b>In 2001, three students named Daniela, Ida, and Anton </b>came
          together with a shared vision to help people manage their stress,
          tiredness, and happiness levels. They founded MoodMate, a platform
          that provides exercise recommendations to individuals looking to
          improve their mental and physical wellbeing.
        </p>

        <p className={styles.mobileOnly}>
          MoodMate is the brainchild of these three students who understand the
          importance of exercise in maintaining a healthy lifestyle. Daniela,
          Ida, and Anton were all passionate about health and wellness and
          wanted to create a solution that would be accessible to anyone seeking
          to improve their mental and physical health. Their platform, MoodMate,
          offers a range of exercise options tailored to each user's individual
          needs and goals. Whether you're looking to de-stress after a long day,
          boost your energy levels, or simply improve your overall mood,{" "}
          <b>MoodMate has you covered.</b>
        </p>
      </div>

      <div className={styles.picontainer}>
        <div className={styles.idacard}>
          <Image
            className={styles.ida}
            src="/Ida.png"
            alt="A pic of Ida"
            width={200}
            height={200}
          />
          <p>
            Ida has practiced yoga for several years, and her favorite quote is
            "Life is really simple, but we insist on making it complicated."
          </p>
        </div>
        <div className={styles.danicard}>
          <Image
            className={styles.dani}
            src="/dani.jpg"
            alt="A pic of Dani"
            width={200}
            height={200}
          />
          <p>
            Dani has held several retreats where they focus on consciousness.
            Her favorite quote is "When life gives you lemons, make lemonade.
            Life will be like, 'what?!'"
          </p>
        </div>
        <div className={styles.antoncard}>
          <Image
            className={styles.anton}
            src="/Anton.png"
            alt="A pic of Anton"
            width={200}
            height={200}
          />
          <p>
            Anton found stretching when he had several back pains, and now
            always finds the time to stretch. And his favorite quote is "I know
            not all that may be coming, but be it what it will, I'll go to it
            laughing."
          </p>
        </div>
      </div>
    </div>
  );
}
