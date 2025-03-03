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
                    <section className={styles.promoAd}>
                        <Image 
                            src={"/reachout-banner.jpeg"}
                            width={775}
                            height={400}
                            alt="placeholder"
                        />
                        <div className={styles.promoAdInfo}>
                            <h2>Promotional Ad</h2>
                            <p>▶️ Play the video to see our promotional ad! ☺️</p>
                        </div>
                    </section>
                    <section className={styles.userResearch}>
                        <h2>User Research</h2>
                        <p>
                            Secondary research was done using online articles and reports to help fill in the gaps from primary research, 
                            focusing on job-search platforms and tools formerly incarcerated individuals need. 
                            The research showed that formerly incarcerated individuals face problems like not having enough education, skills, or access to technology, 
                            which makes it hard to find a job. Stigma from society also makes it harder to get stable work. 
                            The research found that formerly incarcerated individuals need easy access to resources, training, and employers willing to give second chances, 
                            showing the need for a platform that helps with these challenges and supports reintegration.
                        </p>
                    </section>
                    <section className={styles.personaContainer}>
                        <h2>Who we serve</h2>
                        <div className={styles.personas}>
                            <div className={styles.lineOne}>
                                <Image 
                                    src={"/persona1.jpg"}
                                    width={350}
                                    height={450}
                                    alt="persona 1 first page"
                                />
                                <Image 
                                    src={"/persona2.jpg"}
                                    width={350}
                                    height={450}
                                    alt="persona 1 second page"
                                />
                            </div>
                            <div className={styles.lineTwo}>
                                <Image 
                                    src={"/persona3.jpg"}
                                    width={350}
                                    height={450}
                                    alt="persona 2 first page"
                                />
                                <Image 
                                    src={"/persona4.jpg"}
                                    width={350}
                                    height={450}
                                    alt="persona 2 second page"
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.userFlowContainer}>
                        <h2>User Flow</h2>
                        <Image 
                            src={"/userflow.png"}
                            width={1300}
                            height={550}
                            alt="userflow of reachout on figma"
                        />
                    </section>
                </main>
            </div>
        </>
    );
}