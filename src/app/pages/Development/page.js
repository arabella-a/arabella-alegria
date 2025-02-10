import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Development.module.css";
import Link from "next/link";

export default function Development() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <Link href="/pages/NCTDREAM"><div className={styles.nctDreamCard}></div></Link>
                    <Link href="/pages/ReachOut"><div className={styles.reachOutCard}></div></Link>
                    <div className={styles.Card}></div>
                    <div className={styles.Card}></div>
                </main>
            </div>
        </>
    )
}