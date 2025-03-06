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
                            layout="responsive"
                            width={100}
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
                                <Link 
                                    href="https://www.figma.com/proto/MfGA57RbqWErt7qTMGdR8c/ReachOut---Design-Draft?node-id=510-2765&t=IQn00SgUxTuOgvyC-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=510%3A2765"
                                    target="_blank"
                                    rel="noopener noreferrer "
                                >
                                    <button>View Prototype</button>
                                </Link>
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
                        <video controls
                            src={"/reachout_commercial_ad.mp4"}
                            type="video/mp4"
                            width={775}
                            height={400}
                            alt="reachout promotional ad"
                        />
                        <div className={styles.promoAdInfo}>
                            <h2>Promotional Ad</h2>
                            <p>
                                Meet Timothy! 
                                See how ReachOut can help Timmy who is a formerly incarcerated 
                                individual who is looking to find a way to meet his daughter.
                            </p>
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
                    <section className={styles.keyFeatures}>
                        <h2>Key Features</h2>
                        <div className={styles.aiMatch}>
                            <Image 
                                src={"/reachout-matching.png"}
                                width={650}
                                height={600}
                                alt="reachout ai matching page on laptop mockup"
                            />
                            <div className={styles.matchInfo}>
                                <h3>AI-powered Job Matching</h3>
                                <p>
                                    Utilises AI to connect individuals with job opportunities that match their skills and experience. 
                                    Organisers can use the platform to link their clients to suitable job openings, 
                                    while employers receive applicant matches tailored to their job postings — 
                                    creating a seamless, three-way connection.
                                </p>
                            </div>
                        </div>
                        <div className={styles.tracking}>
                            <div className={styles.trackingInfo}>
                                <h3>Real-Time Tracking</h3>
                                <p>
                                    Enables individuals to follow their job applications from submission to approval, 
                                    denial, or interview scheduling, keeping them informed every step of the way.
                                </p>
                            </div>
                            <Image 
                                src={"/reachout-application.png"}
                                width={650}
                                height={425}
                                alt="reachout application page on laptop mockup"
                            />
                        </div>
                        <div className={styles.jobMatch}>
                            <Image 
                                src={"/reachout-resume.png"}
                                width={775}
                                height={600}
                                alt="reachout resume builder page on laptop mockup"
                            />
                            <div className={styles.jobMatchInfo}>
                                <h3>Resume Builder</h3>
                                <p>
                                    Provides flexible options for creating a resume — 
                                    use AI to generate one by entering your information, build it manually, 
                                    or upload an existing resume directly from your computer.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.mockupContainer}>
                        <h2>Business Card and Brochure</h2>
                        <div className={styles.mockup}>
                            <Image 
                                src={"/reachout-businesscard.jpg"}
                                width={550}
                                height={400}
                                alt="reachout business card mockup"
                            />
                            <Image 
                                src={"/reachout-brochure.jpg"}
                                width={550}
                                height={400}
                                alt="reachout brochure mockup"
                            />
                        </div>
                    </section>
                    <section className={styles.styleGuide}>
                        <h2>Style Guide</h2>
                        <div>
                            <Image 
                                src={"/Style_Tile2.0.jpg"}
                                width={1250}
                                height={750}
                                alt="reachout style guide"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}