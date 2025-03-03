import styles from "./Fizzy.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Fizzy() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <div className={styles.backBtn}>
                </div>
                <main className={styles.main}>
                </main>
            </div>
        </>
    )
}