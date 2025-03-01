import styles from "./MotionGraphics.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import Image from "next/image";
import Link from "next/link";

export default function MotionGraphics() {
    return (
        <>
            <div className={styles.pages}>
                <Header />
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter />
                </main>
            </div>
        </>
    )
}