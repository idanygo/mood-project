import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";

export default function Stressed({ moods }) {
  const stressedMoods = moods.filter((mood) => mood.id === "stressed");
  return (
    <Layout backgroundColor="#bfeaf5">
      <div>
        {stressedMoods.map((stress) => (
          <div key={stress.id}>
            <h2>{stress.title}</h2>
            <p>{stress.description}</p>
            <iframe
              width="560px"
              height="315px"
              src={stress.link}
              title={stress.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
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
