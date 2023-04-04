import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.mainWrapperAbout}>
      <div className={styles.wrapperAbout}>
        <div className={styles.header}>
          <h1 className={styles.headline}>Welcome to MoodMate</h1>
          <span className={styles.slogan}>
            Pause and check in with yourself
          </span>
        </div>
        <div className={styles.mission}>
          <p>
            At MoodMate, our mission is to help people achieve optimal physical
            and mental wellness by providing personalized workouts, meditations,
            breathworks, and yoga based on their current mood. <br />
            <br />
            <span className={styles.hideMobile}>
              Our website provides personalized workouts, meditations,
              breathworks, and yoga based on your current mood to help you
              achieve optimal physical and mental wellness. Our expertly curated
              selection of options caters to your unique needs and supports you
              along your wellness journey. Join us in living a healthier and
              happier life, one mood at a time.
            </span>
          </p>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <div className={styles.meditateBreath}>
              <div className={styles.meditate}>
                <Image
                  className={styles.summaryIcon}
                  src="/icons/meditate.svg"
                  alt="A meditating icon"
                  width={90}
                  height={90}
                />
                <h4 className={styles.summaryHeadline}>Meditate</h4>
              </div>
              <div className={styles.breath}>
                <Image
                  className={styles.summaryIcon}
                  src="/icons/breath.svg"
                  alt="A breath icon"
                  width={90}
                  height={90}
                />
                <h4 className={styles.summaryHeadline}>Breath</h4>
              </div>
            </div>
            <div className={styles.workoutYoga}>
              <div className={styles.workout}>
                <Image
                  className={styles.summaryIcon}
                  src="/icons/workout.svg"
                  alt="A working out icon"
                  width={90}
                  height={90}
                />
                <h4 className={styles.summaryHeadline}>Workout</h4>
              </div>
              <div className={styles.yoga}>
                <Image
                  className={styles.summaryIcon}
                  src="/icons/yoga.svg"
                  alt="A yoga icon"
                  width={90}
                  height={90}
                />
                <h4 className={styles.summaryHeadline}>Yoga</h4>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className={styles.teamHeader}>Meet the team</h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src="/Ida.png"
              alt="A pic of the students, Ida"
              width={200}
              height={200}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.picName}>Ida</h3>
              <p className={styles.picText}>
                Ida is a dedicated and passionate yoga practitioner who has been
                practicing for several years.
                <br />
                <br />
                <span className={styles.favQuote}>Favorite quote:</span> "The
                happiness of your life depends upon the quality of your
                thoughts."
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src="/dani.jpg"
              alt="A pic of one of the students, Dani"
              width={200}
              height={200}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.picName}>Dani</h3>
              <p className={styles.picText}>
                Dani is a dedicated retreat facilitator who has a deep interest
                in consciousness and personal growth.
                <br />
                <br />
                <span className={styles.favQuote}>Favorite quote:</span> "When
                life gives you lemons, make lemonade. Life will be like,
                'what?!'"
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src="/Anton.png"
              alt="A pic of the students, Anton"
              width={200}
              height={200}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.picName}>Anton</h3>
              <p className={styles.picText}>
                Anton has experienced the power of stretching, both in terms of
                physical and emotional well-being.
                <br />
                <br />
                <span className={styles.favQuote}>Favorite quote:</span> "I know
                not all that may be coming, but be it what it will, I'll go to
                it laughing."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
