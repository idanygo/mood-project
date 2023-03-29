import { useState } from 'react';
import styles from "@/styles/Lunga.module.css";

function Lunga() {
  const [circleSize, setCircleSize] = useState(100);
  const handleMouseDown = () => {
    setCircleSize(250); // Increase size to 200 when user clicks
  };

  const handleMouseUp = () => {
    setCircleSize(50); // Decrease size back to 100 when user releases mouse button
  };

  return (
    <div
      className={styles.lunga}
      style={{ width: circleSize, height: circleSize }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}></div>
  );
}

export default Lunga;