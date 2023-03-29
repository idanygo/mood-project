import styles from "@/styles/Happy.module.css";
import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Happy({ moods }) {
  const happyMoods = moods.filter((mood) => mood.id === "happy");
  return (
    <Layout backgroundColor="#ffc0c0">
      <main className={styles.main}>
        <div>
          {happyMoods.map((happy) => (
            <div key={happy.id}>
              <h2>{happy.title}</h2>
              <p>{happy.description}</p>
              <iframe
                width="560px"
                height="315px"
                src={happy.link}
                title={happy.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
