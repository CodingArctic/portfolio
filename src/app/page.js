import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hey!</h1>
      <h3 className={styles.subtitle}>I'm Clyde, a Web & Mobile Computing student at Rochester Institute of Technology.</h3>
    </main>
  );
}
