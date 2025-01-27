import styles from "./GraphicDesign.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";

export default function GraphicDesign() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <div className={styles.fizzyCard}></div>
                </main>
            </div>
        </>
    )
}