import { useState } from "react";
import styles from "./Xcounter.module.css";

export default function Xcounter() {
  const [count, setCount] = useState(0);

  return (
    <div styles='display:flex; background-color: blue'>
      <h1>Counter App</h1>
      <h1>Count: {count}</h1>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className={styles.btn} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
