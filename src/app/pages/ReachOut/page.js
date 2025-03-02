import styles from "./ReachOut.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function ReachOut() {
    return (
        <>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <Header />
                    <div className={styles.imgContainer}>
                        <Image 
                            src="/reachout-banner.jpeg"
                            width={1450}
                            height={850}
                            alt="reachout on laptop mockup with white background"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>Figma | Premiere Pro</li>
                                <li>UI Designer | Video Editor</li>
                                <li>December 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                            <Image 
                                src="/reachout-settings.png"
                                width={900}
                                height={700}
                                alt="reachout settings page on laptop mockup"
                            />
                            <div className={styles.aboutInformation}>
                                <h2>About Project</h2>
                                <p>
                                    Reachout is a platform dedicated to supporting formerly incarcerated individuals by providing resources, 
                                    fostering community connections, and helping with reintegration into society. 
                                    It aims to create a safe space for growth, empowerment, and second chances.
                                </p>
                                <button>View Prototype</button>
                            </div>
                        </div>
                    </section>
                    <section className={styles.whoContainer}>
                        <div className={styles.whoInformation}>
                            <h2>Empowering those who need it</h2>
                            <p>
                                ReachOut addresses the unique challenges faced by formerly incarcerated individuals during reintegration into society. 
                                By providing access to essential resources, job training, and community support, the platform helps remove barriers to success. 
                                A focus on creating opportunities and promoting growth allows individuals to rebuild their lives, 
                                pursue meaningful careers, and reclaim their place in society, free from the constraints of their past.
                            </p>
                        </div>
                        <Image 
                            src={"/reachout-inbox.png"}
                            width={600}
                            height={675}
                            alt="reachout inbox page on laptop mockup"
                        />
                    </section>
                </main>
            </div>
        </>
    );
}