import styles from "@/styles/All.module.css";
import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Energized({ moods }) {
  const energizedMoods = moods.filter((mood) => mood.id === "energized");
  return (
    <Layout backgroundColor="#faedcd">
      <main className={styles.main}>
        <h1 className={styles.heading}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="green_happy" cx="26" cy="26" r="26" fill="#819A7A" />
          </svg>
          ENERGIZED
        </h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            "Happiness is not something ready made. It comes from your own
            actions." <br /> - Thich Nhat Hanh
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {energizedMoods.map((energi) => (
            <div className={styles.card} key={energi.id}>
              <iframe
                className={styles.cardVideo}
                src={energi.link}
                alt={energi.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{energi.title}</h3>
                <p className={styles.cardDescription}>{energi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const moods = getAllMoods();
  const energizedMoods = moods.filter((mood) => mood.id === "energized");
  return {
    props: { moods: energizedMoods },
  };
}
