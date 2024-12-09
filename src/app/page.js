import Image from "next/image";

import styles from "./page.module.css";
import SocialLink from "./components/socialLink";
import LanguageCard from "./components/languageCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topSection}>
        <div className={styles.intro}>
          <h2 >Hi there, my name is<span style={{ color: "aqua", marginLeft: "10px" }}>Clyde</span></h2>
        </div>
        <div>I'm a full-stack developer</div>
        <div>and third year Web & Mobile Computing Major at RIT</div>
        <div className={styles.socialLinks}>
          <SocialLink name="linkedin" url="https://www.linkedin.com/in/clydegeyer/"></SocialLink>
          <SocialLink name="github" url="https://www.github.com/CodingArctic/"></SocialLink>
        </div>
      </div>
      <h2>My Languages & Technologies</h2>
      <LanguageCard language="java"></LanguageCard>
      <h2>My Projects</h2>
    </main>
  );
}
