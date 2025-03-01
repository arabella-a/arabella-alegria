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
                </main>
            </div>
        </>
    )
}