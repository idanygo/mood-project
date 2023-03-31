import styles from "@/styles/All.module.css";
import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Stressed({ moods }) {
  const stressedMoods = moods.filter((mood) => mood.id === "stressed");
  return (
    <Layout backgroundColor="#faedcd">
      <main className={styles.main}>
        <h1 className={styles.heading}>STRESSED</h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            "Stress is not what happens to us. It's our response to what
            happens. And response is something we can choose." <br /> - Maureen
            Killoran
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {stressedMoods.map((stress) => (
            <div className={styles.card} key={stress.id}>
              <iframe
                className={styles.cardVideo}
                src={stress.link}
                alt={stress.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{stress.title}</h3>
                <p className={styles.cardDescription}>{stress.description}</p>
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
  const stressedMoods = moods.filter((mood) => mood.id === "stressed");
  return {
    props: { moods: stressedMoods },
  };
}
