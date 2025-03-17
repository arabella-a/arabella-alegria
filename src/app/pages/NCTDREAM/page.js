import styles from "./nctDream.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function NCTDREAM() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/dream_banner.png"}
                            layout="responsive"
                            width={100}
                            height={100}
                            alt="nct dream website on a laptop mockup"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>WordPress</li>
                                <li>UI/UX Design | Development</li>
                                <li>March 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                            <Image 
                                src={"/nctdream_mac.png"}
                                width={400}
                                height={300}
                                alt="dreamville landing page on mac mockup"
                            />
                            <div>
                                <h2>About DREAMville</h2>
                                <p>
                                    DREAMville is designed to celebrate the journey and achievements of NCT DREAM. 
                                    By highlighting their history and music, DREAMville aims to introduce NCT DREAM to both new fans and long-time fans alike.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}