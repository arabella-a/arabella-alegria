import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Arabella</h1>
          <h1>Alegria</h1>
          <p>Graphic Designer | UI/UX Designer</p>
        </div>
        <div className={styles.lineOne}>
          <div className={styles.devCard}>
            <h3>Development</h3>
          </div>
          <div className={styles.graphicCard}>
            <h3>Graphic Design</h3>
          </div>
        </div>
        <div className={styles.lineTwo}>
          <div className={styles.uiuxCard}>
            <h3>UI/UX</h3>
          </div>
          <div className={styles.motionCard}>
            <h3>Motion Graphics</h3>
          </div>
        </div>
        <div className={styles.info}>
          <Image
            src="/info_icon_white.svg"
            width={20}
            height={20}
            alt="information icon"
          />
          <p>Hover over the cards to see previews of my work!</p>
        </div>
      </main>
    </div>
  );
}
