import styles from "./WhatToDo.module.css";
import Header from "@/app/components/Header/Header";

export default function WhatToDo() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <h2>What to do in a blackout</h2>
                    <section className={styles.videoContainer}>
                        <video controls
                            src={"/what-to-do.mp4"}
                            width={1400}
                        />
                    </section>
                    <section className={styles.aboutContainer}>
                        <h2>About Project</h2>
                        <p>
                            This motion graphic, brought to life with Adobe Illustrator and After Effects, 
                            is your go-to guide on surviving a blackout—what to do, and more importantly, 
                            what not to do when the lights go out!
                        </p>
                    </section>
                </main>
            </div>
        </>
    )
}