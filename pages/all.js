import { getAllMoods } from "@/utils/Moodobjects";
import React from "react";

export default function All({ moods }) {
  return (
    <div>
      {moods.map((mood) => (
        <div key={mood.id}>
          <h2>{mood.title}</h2>
          <p>{mood.description}</p>
          <iframe
            width="560px"
            height="315px"
            src={mood.link}
            title={mood.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const moods = getAllMoods();
  return {
    props: { moods },
  };
}
