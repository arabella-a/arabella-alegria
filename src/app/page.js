import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <h1>Arabella</h1>
        <h1>Alegria</h1>
      </main>
    </div>
  );
}
