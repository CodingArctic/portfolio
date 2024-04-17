import NavBar from './components/NavBar'

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>

        <h2 className={styles.aboveTitle}>Hi there, my name is</h2>
        <h1 className={styles.name}>Clyde Geyer</h1>
        <div className={styles.blurb}>
          I'm a second year <a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">Web & Mobile Computing Major</a> at <a className="link" href='https://rit.edu' target="_blank">RIT</a>
        </div>
      </main>
    </>
  );
}
