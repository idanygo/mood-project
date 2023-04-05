import { getAllMoods } from "@/utils/Moodobjects";
import styles from "@/styles/All.module.css";
import React, { useState } from "react";

export default function All({ moods }) {
  const [activeTag, setActiveTag] = useState(null);

  // When the user chooses a exercise the activeTag updates to the chosen value and
  const handleDropdownChange = (event) => {
    setActiveTag(event.target.value);
  };

  // Only the exercises in the category which the user has chosen shows. If the activeTag is null, all exercises shows.
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
          {
            // The info for each exercise gets sent to the All function as a prop called moods. The filtered list renders based on the users choice.
            filteredExercises?.length &&
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
              ))
          }
        </div>
      </main>
    </>
  );
}

// getStaticProps preps the data which is used on the site, which means the site doesn't have to re-render each time a user visits it. The data is fetched from getAllMoods and is returned as a props object {moods}.
export async function getStaticProps() {
  const moods = getAllMoods();
  return {
    props: { moods },
  };
}
