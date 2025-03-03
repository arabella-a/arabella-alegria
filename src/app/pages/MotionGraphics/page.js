import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./MotionGraphics.module.css"
import Link from "next/link";
import Image from "next/image";

export default function MotionGraphics() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <section className={styles.works}>
                    <div className={styles.banner}>
                        <Image 
                            src={"/motiongraphics.jpeg"}
                            width={870}
                            height={470}
                            alt="a family of three eating at the dining table in the dining area"
                        />
                        <div className={styles.bannerInformation}>
                            <h3>What to do in a blackout</h3>
                            <Link href="/pages/WhatToDo"><p>View Project</p></Link>
                         </div>
                    </div>
                    </section>
                </main>
            </div>
        </>
    )
}