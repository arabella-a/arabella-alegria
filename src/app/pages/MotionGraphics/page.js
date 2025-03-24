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
                    <Link href="/pages/WhatToDo">
                        <div className={styles.banner}>
                            <Image 
                                src={"/what_to_do_ipad.jpeg"}
                                width={380}
                                height={550}
                                alt="what to do in an ipad mockup"
                            />
                            <div className={styles.bannerInformation}>
                                <h3>What to do in a blackout</h3>
                            </div>
                        </div>
                    </Link>
                    </section>
                </main>
            </div>
        </>
    )
}