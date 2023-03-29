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

  return <button className={styles.scrollButton} type="button" onClick={handleScroll}>Scroll down</button>;

}