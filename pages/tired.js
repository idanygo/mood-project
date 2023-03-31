import styles from "@/styles/All.module.css";
import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Tired({ moods }) {
  const tiredMoods = moods.filter((mood) => mood.id === "tired");
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
            <g id="blue_tired">
              <circle cx="26" cy="26" r="26" fill="#191D30" />
            </g>
          </svg>
          TIRED
        </h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            "Fatigue is the common enemy of us all - so slow down, rest up,
            replenish and refill."
            <br /> - Jeffrey R. Holland
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {tiredMoods.map((tired) => (
            <div className={styles.card} key={tired.id}>
              <iframe
                className={styles.cardVideo}
                src={tired.link}
                alt={tired.description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{tired.title}</h3>
                <p className={styles.cardDescription}>{tired.description}</p>
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
  const tiredMoods = moods.filter((mood) => mood.id === "tired");
  return {
    props: { moods: tiredMoods },
  };
}
