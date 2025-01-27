import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Development.module.css";

export default function Development() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <div className={styles.nctDreamCard}></div>
                    <div className={styles.Card}></div>
                    <div className={styles.Card}></div>
                    <div className={styles.Card}></div>
                </main>
            </div>
        </>
    )
}