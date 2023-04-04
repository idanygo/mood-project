import { getAllMoods } from "@/utils/Moodobjects";
import styles from "@/styles/All.module.css";
import React, { useState } from "react";

// En funktion som heter All, som tar in ett argument Moods. I all funktionen så skapar vi ett nytt state activeTag.
export default function All({ moods }) {
  const [activeTag, setActiveTag] = useState(null);

  // En funktion som hanterar använderens val, när användaren väljer en tagg, så uppdateras activeTag till användarens värde.
  const handleDropdownChange = (event) => {
    setActiveTag(event.target.value);
  };

  // Vi filtrerar vår moodarray för att kunna scanna igenom de objekt som matchar med activetag. Om activetag är null så returnerar funktionen true för alla objekt, annars true för endast de som användaren valt.
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
            // Här hämtar vi infon för varje övning som skickas till kompomenten som en prop, listan filtreras baserat på activtag som användaren väljer, detta görs med filtredexcerices som skapar en ny array genom att filtrera moods (som ovan) och därefter visa listan med hjälp av map.
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

// getStaticProps körs vid bygg och inte varje antrop, det innebär att sidan kommer ladda snabbare för att datan redan har hämtas. Det är en metod som används i nextjs för att kunna preppa data som ska användas på en sida, här hämtar vi data från getallmoods och sedan returnerar vi datan fast i form av ett propsobjekt {moods}, objektet skickas sen vidare till sidan för att visas, och kan sen återanvändas.
export async function getStaticProps() {
  const moods = getAllMoods();
  return {
    props: { moods },
  };
}
