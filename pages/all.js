import { getAllMoods } from "@/utils/Moodobjects";
import styles from "@/styles/All.module.css";
import React, { useState } from "react";
import LRUCache from "lru-cache";

const cache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
});
export default function All({ moods }) {
  const [activeTag, setActiveTag] = useState(null);

  const handleDropdownChange = (event) => {
    setActiveTag(event.target.value);
  };

  const filteredExercises = moods.filter((exercise) => {
    if (activeTag === null) {
      return true;
    } else {
      return exercise.tags.includes(activeTag);
    }
  });

  return (
    <>
      <main className={styles.main} key={activeTag}>
        <h1 className={styles.heading}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="26" fill="#F9DFA1" />
          </svg>
          ALL EXERCISES
        </h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            Whether you're feeling stressed, anxious, happy, or simply need a
            pick-me-up, we have something for everyone. Choose what fits you
            today.
          </h3>
        </div>
        <div className={styles.tagContainer}>
          <label htmlFor="tag-select"></label>
          <select
            className={styles.select}
            id="tag-select"
            value={activeTag || ""}
            onChange={handleDropdownChange}
          >
            <option value="">All</option>
            <option value="strength">Strength</option>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
            <option value="recovery">Recovery</option>
            <option value="breathwork">Breathwork</option>
            <option value="meditation">Meditation</option>
          </select>
        </div>
        <div className={styles.cardContainer}>
          {filteredExercises?.length &&
            filteredExercises.map((mood) => (
              <div className={styles.card} key={mood.id}>
                <iframe
                  className={styles.cardVideo}
                  src={mood.link}
                  alt={mood.description}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{mood.title}</h3>
                  <p className={styles.cardDescription}>{mood.description}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const cacheKey = "moods";
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return { props: { moods: cachedData } };
  }

  const moods = getAllMoods();
  cache.set(cacheKey, moods); // cache the data
  return {
    props: { moods },
  };
}
