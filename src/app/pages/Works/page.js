import styles from "./Works.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";

export default function Works() {
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