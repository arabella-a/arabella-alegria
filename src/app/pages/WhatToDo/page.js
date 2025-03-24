import styles from "./WhatToDo.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function WhatToDo() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <section className={styles.imgContainer}>
                        <Image 
                            src={"/what_to_do_banner.jpeg"}
                            width={1450}
                            height={850}
                            alt="zoomed in illustration of kate spade watch"
                        />
                        <div className={styles.overlay}></div>
                    </section>
                    <section className={styles.aboutContainer}>
                        <h2>About Project</h2>
                        <p>
                            This motion graphic, brought to life with Adobe Illustrator and After Effects, 
                            is your go-to guide on surviving a blackout—what to do, and more importantly, 
                            what not to do when the lights go out!
                        </p>
                    </section>
                    <section className={styles.videoContainer}>
                        <video controls
                            src={"/what-to-do.mp4"}
                            width={1400}
                        />
                    </section>
                </main>
            </div>
        </>
    )
}