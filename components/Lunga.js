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
  // const [secondsHold, setSecondsHold] = useState(0);
  const [selectedTechnique, setSelectedTechnique] = useState(techniques[0]);

  // This function handles the user input of the field for breathing in. It makes it so the lung wont react on charachters or empy strings.
  const secInSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setSecondsIn(value);
    } else {
      setSecondsIn(3); // sets the default value for inhale
    }
  };

  // This function handles the user input of the field for breathing out. It makes it so the lung wont react on charachters or empy strings.
  const secOutSetter = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setSecondsOut(value);
    } else {
      setSecondsOut(3); // sets the default value for exhale
    }
  };

  /*   const holdSetter = (event) => {
      const value = event.target.value;
      if (!isNaN(value) && value !== "") {
        setSecondsHold(value);
      } else {
        setSecondsHold(3); // sets the default value for exhale
      }
    }; */

  // The conditional statement in the UseEffect checks if the isGrowing-state is either true or false. If its true the circle grows every 10 miliseconds. We use the seconds we got from the user to do an increase on the size every 10 miliseconds. When the size has reached 200 the isGrowing is set to false.

  useEffect(() => {
    let interval;
    if (secondsIn > 0 && secondsOut > 0) {
      let lastUpdate = Date.now();
      /* let holdTimeElapsed = 0; */
      interval = setInterval(() => {
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
        } /*  else if (secondsHold && holdTimeElapsed < secondsHold * 1000) {
        setText("Hold ...");
        holdTimeElapsed += elapsed;
      } */ else {
          setText("Breath out ...");
          setSize((size) => {
            if (size > 100) {
              return size - (elapsed / 1000 / secondsOut) * 100;
            } else {
              setIsGrowing(true);
              /*  holdTimeElapsed = 0; // reset hold time */
              return size;
            }
          });
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isGrowing, secondsIn, secondsOut /* secondsHold */]);

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
        <p className={styles.showSeconds}>
          {<strong>{`Inhale:`}</strong>} {` ${secondsIn} seconds.`}
          {/* {<strong>{`Hold:`}</strong>} {` ${secondsHold} seconds`} */}
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
                value={secondsIn}
              />
              <span className={styles.emptyspan}></span>
            </div>
            {/*  <div>
              <input
                className={styles.input}
                type="number"
                placeholder="Seconds for hold"
                onChange={holdSetter}
                required
              />
              <span className={styles.emptyspan}></span>
            </div> */}
            <div>
              <input
                className={styles.input}
                type="number"
                placeholder="Seconds for breath out"
                onChange={secOutSetter}
                required
                value={secondsOut}
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
                  <label className={styles.buttonLabel}>
                    <button
                      className={styles.buttonTechnique}
                      type="button"
                      name="technique"
                      onClick={() => {
                        setSelectedTechnique(t);
                        setSecondsIn(t.secondsIn);
                        setSecondsOut(t.secondsOut);
                      }}
                    >
                      {t.name}
                    </button>
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
