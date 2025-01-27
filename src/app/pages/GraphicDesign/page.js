import styles from "./GraphicDesign.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import Link from "next/link";

export default function GraphicDesign() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <Link href="/Fizzy"><div className={styles.fizzyCard}></div></Link>
                </main>
            </div>
        </>
    )
}