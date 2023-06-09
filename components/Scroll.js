import React from "react";
import styles from "@/styles/Scroll.module.css";
import Image from "next/image";

export default function Scroll() {
  function handleScroll() {
    // when clicking the arrowscrolls down to 0.9 of the window
    const halfViewportHeight = window.innerHeight / 0.9;
    const nextPagePosition = window.scrollY + halfViewportHeight;
    window.scroll({
      top: nextPagePosition,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.scrollWrapper}>
      <h4>Maybe some deep breaths is all you need?</h4>
      <Image className={styles.scrollArrow} src="/icons/arrow-down.svg" width={25} height={25} onClick={handleScroll} role="button" />
    </div>
  );
}
