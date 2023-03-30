import styles from "@/styles/Aboutus.module.css";
import Layout from "@/components/Layout";

export default function Aboutus() {
  return (
    <div className={styles.container}>
      <div className={styles.picontainer}>
        <h1>Meet your Mates!</h1>

        <div></div>
        <div className={styles.dani}> </div>
        <div className={styles.ida}> </div>
        <div className={styles.anton}> </div>
      </div>
      <div className={styles.about}>
        <p>
          In 2001, three students named Daniela, Ida, and Anton came together
          with a shared vision to help people manage their stress, tiredness,
          and happiness levels. They founded MoodMate, a platform that provides
          exercise recommendations to individuals looking to improve their
          mental and physical wellbeing. MoodMate is the brainchild of these
          three students who understand the importance of exercise in
          maintaining a healthy lifestyle. Daniela, Ida, and Anton were all
          passionate about health and wellness and wanted to create a solution
          that would be accessible to anyone seeking to improve their mental and
          physical health. Their platform, MoodMate, offers a range of exercise
          options tailored to each user's individual needs and goals. Whether
          you're looking to de-stress after a long day, boost your energy
          levels, or simply improve your overall mood, MoodMate has you covered.
        </p>
      </div>
    </div>
  );
}
