import styles from "./nctDream.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

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
                            <div className={styles.aboutInfo}>
                                <h2>About DREAMville</h2>
                                <p>
                                    DREAMville is designed to celebrate the journey and achievements of NCT DREAM. 
                                    By highlighting their history and music, DREAMville aims to introduce NCT DREAM to both new fans and long-time fans alike.
                                </p>
                                <Link 
                                    href="https://aalegria-midterm.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>View Website</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.highlightsContainer}>
                        <h2>Key Features</h2>
                        <div className={styles.discographyContainer}>
                            <Image 
                                src={"/nctdream_discography.png"}
                                width={500}
                                height={525}
                                alt="dreamville discography page"
                            />
                            <div className={styles.discInfo}>
                                <h3>Discography</h3>
                                <p>
                                    To help fans explore more of NCT DREAM's music, their discography is ogranized by year. 
                                    Each album cover is linked to its respective album on Spotify, so fans can easily access and enjoy their music.
                                </p>
                            </div>
                        </div>
                        <div className={styles.profileContainer}>
                            <div className={styles.profileInfo}>
                                <h3>Profiles</h3>
                                <p>
                                    Each members information is provided, with their username linking to their Instagram page.
                                </p>
                            </div>
                            <Image 
                                src={"/nctdream_profiles.png"}
                                width={500}
                                height={525}
                                alt="dreamville profiels page"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}