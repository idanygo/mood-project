import { use, useEffect, useState } from 'react';
import styles from "@/styles/Lunga.module.css";

function Lunga({ growTime, shrinkTime }) {
  const [size, setSize] = useState(100);
  const [isGrowing, setIsGrowing] = useState(true);
  const [text, setText] = useState('');
  const [secondsIn, setSecondsIn] = useState(5);
  const [secondsOut, setSecondsOut] = useState(5);
  const [intervalId, setIntervalId] = useState(null);

  const secInSetter = (event) => {
    setSecondsIn(event.target.value);
  }

  const secOutSetter = (event) => {
    setSecondsOut(event.target.value)
  }

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      if (isGrowing) {
        setText('Breath in ...');
        setSize((size) => {
          if (size < 200) {
            return size + (50 / (secondsIn * 1000 / 10));
          } else {
            setIsGrowing(false);
            return size;
          }
        });
      } else {
        setText('Breath out ...')
        setSize((size) => {
          if (size > 150) {
            return size - (50 / (secondsOut * 1000 / 10));
          } else {
            setIsGrowing(true);
            return size;
          }
        });
      }
    }, 10);
    setIntervalId(newIntervalId);
    return () => clearInterval(newIntervalId);
  }, [isGrowing, secondsIn, secondsOut]);

  return (
    <>
      <div className={styles.lungaWrapper}>
        <h3>
          Maybe some deep breaths is all you need?
        </h3>
        <div className={styles.lungaContainer}>
          <div
            className={styles.lunga}
            style={{ width: size, height: size }}
          >
          </div>
        </div>
        <p>{text}</p>
        <form className={styles.breathForm}>
          <input type="number" placeholder="Breath in" onChange={secInSetter} />
          <input type="number" placeholder="Breath out" onChange={secOutSetter} />
        </form>
      </div>
    </>
  );
}

export default Lunga;
