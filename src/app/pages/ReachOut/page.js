import styles from "./ReachOut.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function ReachOut() {
    return (
        <>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <Header/>
                </main>
            </div>
        </>
    )
}