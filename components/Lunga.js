import { use, useEffect, useState } from "react";
import styles from "@/styles/Lunga.module.css";

const techniques = [
  {
    name: "Soothing breath",
    secondsIn: 4,
    secondsOut: 8,
  },
  {
    name: "Balanced breath",
    secondsIn: 4,
    secondsOut: 4,
  },
  {
    name: "Stimulating breath",
    secondsIn: 8,
    secondsOut: 4,
  },
];

function Lunga() {
  const [size, setSize] = useState(100);
  const [isGrowing, setIsGrowing] = useState(true);
  const [text, setText] = useState("");
  const [secondsIn, setSecondsIn] = useState(3);
  const [secondsOut, setSecondsOut] = useState(3);
  const [secondsHold, setSecondsHold] = useState(0);
  const [selectedTechnique, setSelectedTechnique] = useState(techniques[0]);

  const secInSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      setSecondsIn(value);
    } else {
      setSecondsIn(3); // sets the default value for inhale
    }
  };

  const secOutSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      setSecondsOut(value);
    } else {
      setSecondsOut(3); // sets the default value for exhale
    }
  };

  const holdSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      setSecondsHold(value);
    } else {
      setSecondsHold(3); // sets the default value for exhale
    }
  };

  useEffect(() => {
    let lastUpdate = Date.now();
    let holdTimeElapsed = 0;
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
      } else if (secondsHold && holdTimeElapsed < secondsHold * 1000) {
        setText("Hold ...");
        holdTimeElapsed += elapsed;
      } else {
        setText("Breath out ...");
        setSize((size) => {
          if (size > 100) {
            return size - (elapsed / 1000 / secondsOut) * 100;
          } else {
            setIsGrowing(true);
            holdTimeElapsed = 0; // reset hold time
            return size;
          }
        });
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isGrowing, secondsIn, secondsOut, secondsHold]);

  return (
    <>
      <div className={styles.lungaWrapper}>
        <div className={styles.lungaContainer}>
          <div
            className={styles.lunga}
            style={{ width: size, height: size }}
          ></div>
        </div>
        <h4>{text}</h4>
        <p
          className={styles.showSeconds}
        >{<strong>{`Inhale:`}</strong>} {` ${secondsIn} seconds.`}
          {<strong>{`Hold:`}</strong>} {` ${secondsHold} seconds`}
          {<strong>{`Exhale: `}</strong>} {`${secondsOut} seconds`}
        </p>
        <form className={styles.breathForm}>
          <div className={styles.inputs}>
            <div>
              <input
                className={styles.input}
                type="number"
                placeholder="Seconds for breath in"
                onChange={secInSetter}
                required
              />
              <span className={styles.emptyspan}></span>
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                placeholder="Seconds for hold"
                onChange={holdSetter}
                required
              />
              <span className={styles.emptyspan}></span>
            </div>
            <div>
              <input
                className={styles.input}
                type="number"
                placeholder="Seconds for breath out"
                onChange={secOutSetter}
                required
              />
              <span className={styles.emptyspan}></span>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.breathWrapper}>
        <form className={styles.breathForm}>
          <div className={styles.breathBtnContainer}>
            <p>
              <b>Unsure of how many seconds to fill out?</b>
              <br /> No problem. Select one of our pre-set breathworks below to
              get started.
            </p>
            <div className={styles.breathBtn}>
              {techniques.map((t) => (
                <div key={t.name}>
                  <label className={styles.radioLabel}>
                    <input
                      className={styles.radioInput}
                      type="radio"
                      name="technique"
                      value={t.name}
                      onChange={() => {
                        setSelectedTechnique(t);
                        setSecondsIn(t.secondsIn);
                        setSecondsOut(t.secondsOut);
                      }}
                    />
                    {t.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Lunga;
