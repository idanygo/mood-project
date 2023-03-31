import React from 'react';
import styles from "@/styles/Scroll.module.css";

export default function Scroll() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return <div className={styles.scrollWrapper}>
    <h4>
      Maybe some deep breaths is all you need?
    </h4>
    <button className={styles.scrollButton} type="button" onClick={handleScroll}><i className={styles.arrow}></i></button >
  </div>;

}