import { getAllMoods } from "@/utils/Moodobjects";
import styles from "@/styles/All.module.css";
import React, { useState } from "react";

export default function All({ moods }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExercises = moods.filter((exercise) => {
    return exercise.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>ALL EXERCISES</h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            Whether you're feeling stressed, anxious, happy, or simply need a
            pick-me-up, we have something for everyone.
          </h3>
        </div>
        <div className={`${styles.searchContainer} searchContainer`}>
          <label htmlFor="search"></label>
          <input
            className={`${styles.searchInput} searchInput`}
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for exercises"
          />
        </div>
        <div className={styles.cardContainer}>
          {filteredExercises?.length &&
            moods.map((mood) => (
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
  const moods = getAllMoods();
  return {
    props: { moods },
  };
}
