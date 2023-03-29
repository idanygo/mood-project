import styles from "@/styles/All.module.css";
import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Happy({ moods }) {
  const happyMoods = moods.filter((mood) => mood.id === "happy");
  return (
    <Layout backgroundColor="#ffc0c0">
      <main className={styles.main}>
        <h1 className={styles.heading}>HAPPY</h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            "Happiness is not something ready made. It comes from your own
            actions." <br /> - Thich Nhat Hanh
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {happyMoods.map((happy) => (
            <div className={styles.card} key={happy.id}>
              <iframe
                className={styles.cardVideo}
                src={happy.link}
                alt={happy.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{happy.title}</h3>
                <p className={styles.cardDescription}>{happy.description}</p>
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
  const happyMoods = moods.filter((mood) => mood.id === "happy");
  return {
    props: { moods: happyMoods },
  };
}
