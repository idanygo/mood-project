import Layout from "@/components/Layout";
import { getAllMoods } from "@/utils/Moodobjects";
export default function Tired({ moods }) {
  const tiredMoods = moods.filter((mood) => mood.id === "tired");
  return (
    <Layout backgroundColor="#181d31" color="#fffefe">
      <div>
        {tiredMoods.map((tired) => (
          <div key={tired.id}>
            <h2>{tired.title}</h2>
            <p>{tired.description}</p>
            <iframe
              width="560px"
              height="315px"
              src={tired.link}
              title={tired.title}
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
  const tiredMoods = moods.filter((mood) => mood.id === "tired");
  return {
    props: { moods: tiredMoods },
  };
}
