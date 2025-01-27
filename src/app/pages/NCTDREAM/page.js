import styles from "./nctDream.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function NCTDREAM() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <h1>DREAMville</h1>
                            <p>Wordpress</p>
                            <p>
                                DREAMville is a platform dedicated to introducing NCT Dream to both new and longtime fans. 
                                It offers everything that newcomers need to dive into their world, from inspiring milestones and achievements to their story of their journey as artists. 
                                Beyond their music and discography, DREAMvile also highlights each member, providing a deeper connection to the group and their history.
                            </p>
                            <a href="https://aalegria-midterm.com/" target="_blank">
                                <button>Check it out!</button>
                                <div className={styles.line}></div>
                            </a>
                        </div>
                        <Image
                            src="/nctdream_mockup.png"
                            height={700}
                            width={900}
                            alt="DREAMville site on desktop mockup"
                        />
                    </div>
                    <p className={styles.scroll}>Scroll down to see more</p>
                    <div className={styles.images}>
                        <Image
                            src="/profile.png"
                            height={600}
                            width={1000}
                            alt="dreamville profile page screenshot"
                        />
                        <Image
                            src="/renjun.png"
                            height={600}
                            width={1000}
                            alt="dreamville blog page screenshot"
                        />
                        </div>

                </main>
            </div>
        </>
    )
}