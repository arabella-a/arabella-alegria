"use client";

import styles from "./UIUX.module.css";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/app/components/Filter/Filter";

export default function UIUX() {
    return (
        <>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter />
                </main>
            </div>
        </>
    )
}