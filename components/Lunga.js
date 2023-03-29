import { use, useEffect, useState } from 'react';
import styles from "@/styles/Lunga.module.css";

function Lunga({ growTime, shrinkTime }) {
  const [size, setSize] = useState(100);
  const [isGrowing, setIsGrowing] = useState(true);
  const [text, setText] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGrowing) {
        setText('Breath in ...');
        setSize((size) => {
          if (size < 200) {
            return size + (100 / (growTime * 1000 / 10));
          } else {
            setIsGrowing(false);
            return size;
          }
        });
      } else {
        setText('Breath out ...')
        setSize((size) => {
          if (size > 100) {
            return size - (100 / (shrinkTime * 1000 / 10));
          } else {
            setIsGrowing(true);
            return size;
          }
        });
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isGrowing, growTime, shrinkTime])

  return (
    <>
      <div
        className={styles.lunga}
        style={{ width: size, height: size }}
      >

      </div>
      <p>{text}</p>
    </>
  );
}

export default Lunga;