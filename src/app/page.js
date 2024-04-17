import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.aboveTitle}>Hi there, my name is</h2>
      <h1 className={styles.name}>Clyde Geyer</h1>
      <div>
        I'm a second year Web & Mobile Computing Major at RIT
      </div>
    </main>
  );
}
