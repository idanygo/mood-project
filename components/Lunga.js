import { use, useEffect, useState } from "react";
import styles from "@/styles/Lunga.module.css";

function Lunga({ growTime, shrinkTime }) {
  const [size, setSize] = useState(100);
  const [isGrowing, setIsGrowing] = useState(true);
  const [text, setText] = useState("");
  const [secondsIn, setSecondsIn] = useState(5);
  const [secondsOut, setSecondsOut] = useState(5);

  const secInSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      setSecondsIn(value);
    } else {
      setSecondsIn(3); // set default value
    }
  };

  const secOutSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      setSecondsOut(value);
    } else {
      setSecondsOut(3); // set default value
    }
  };

  useEffect(() => {
    let lastUpdate = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastUpdate;
      lastUpdate = now;

      if (isGrowing) {
        setText("Breath in ...");
        setSize((size) => {
          if (size < 200) {
            return size + (elapsed / 1000 / secondsIn) * 100;
          } else {
            setIsGrowing(false);
            return size;
          }
        });
      } else {
        setText("Breath out ...");
        setSize((size) => {
          if (size > 100) {
            return size - (elapsed / 1000 / secondsOut) * 100;
          } else {
            setIsGrowing(true);
            return size;
          }
        });
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isGrowing, growTime, shrinkTime, secondsIn, secondsOut]);

  return (
    <>
      <div className={styles.lungaWrapper}>
        <div className={styles.lungaContainer}>
          <div
            className={styles.lunga}
            style={{ width: size, height: size }}
          ></div>
        </div>
        <p>{text}</p>
        <form className={styles.breathForm}>
          <div>
            <input
              className={styles.input}
              type="number"
              placeholder="Seconds for breath in"
              onChange={secInSetter}
              required
            />{" "}
            <span className={styles.emptyspan}></span>
          </div>
          <div>
            <input
              className={styles.input}
              type="number"
              b
              placeholder="Seconds for breath out"
              onChange={secOutSetter}
              required
            />
            <span className={styles.emptyspan}></span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Lunga;
