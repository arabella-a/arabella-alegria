import styles from "./HiveFive.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function HiveFive() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/hivefive_banner.jpeg"}
                            layout="responsive"
                            width={100}
                            height={100}
                            alt="hivefive on phone mockup"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div>
                            <ul>
                                <li>Figma | Adobe Illustrator | VS Code</li>
                                <li>UI/UX Designer | Graphic Designer | Frontend Developer</li>
                                <li>June 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                        <Image 
                                src={"/hivefive_home.png"}
                                width={400}
                                height={400}
                                alt="hivefive homepage in phone mockup"
                            />
                            <div className={styles.aboutInfo}>
                                <h2>About HiveFive</h2>
                                <p>
                                    HiveFive is a web app that aims to raise awareness to the alarming decline of bee population.
                                    By combining games, articles, and quizzes, HiveFive is an app where users can learn about bees in a fun and interactive way.
                                </p>
                                <Link
                                    href="https://hivefive-bee.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>View Web App</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.highlightsContainer}>

                    </section>
                </main>
            </div>
        </>
    )
}