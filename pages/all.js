import { getAllMoods } from "@/utils/Moodobjects";
import styles from "@/styles/All.module.css";
import React, { useState } from "react";

export default function All({ moods }) {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>ALL EXERCISES</h1>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.webDesc}>
            Here you'll find a diverse selection of workouts, meditations, and
            breathwork exercises to help you take control of your mental and
            physical wellbeing. Whether you're feeling stressed, anxious, happy,
            or simply need a pick-me-up, we have something for everyone. <br />
            Browse through our curated collection of exercises, all designed to
            support you in your journey towards a healthier, happier you. So
            take a deep breath, relax, and let's get started!
          </h3>
        </div>
        <div className={styles.cardContainer}>
          {moods.map((mood) => (
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
