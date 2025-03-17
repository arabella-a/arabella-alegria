import Header from "@/app/components/Header/Header"
import styles from "./Ningning.module.css";
import Image from "next/image";

export default function Ningning() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/ningning_poster_wall.jpg"}
                            layout="responsive"
                            width={100}
                            height={850}
                            alt="ningning poster on a wall"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>Adobe Photoshop & Illustrator</li>
                                <li>Graphic Design</li>
                                <li>November 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                            <Image 
                            src={"/ningning_banner.png"}
                            width={425}
                            height={500}
                            alt="ningning poster in a packaging"
                            />
                            <div>
                                <h2>About Poster</h2>
                                <p>
                                    A poster designed as a creative take on aespa's single,<span>Hot Mess</span>. 
                                    Its design takes inspiration from Y2K Japanese magazines in honour of aespa's Japanese debut.
                                    As the single is released in Japan, both English and Katakana are featured to ensure that the poster is still understood globally.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.posterVersions}>
                        <h2>Poster Versions</h2>
                        <div className={styles.imagesContainer}>
                            <Image 
                                src={"/ningning_poster_withfold.jpg"}
                                width={450}
                                height={580}
                                alt="ningning poster normal with fold"
                            />
                            <Image 
                                src={"/ningning_poster_nofold.jpg"}
                                width={450}
                                height={580}
                                alt="ningning poster without fold"
                            />
                        </div>
                    </section>
                    <section className={styles.mockup}>
                        <Image 
                            src={"/ningning_poster_wall.jpg"}
                            layout="responsive"
                            width={850}
                            height={580}
                            alt="ningning poster on a wall"
                        /> 
                        <Image 
                            src={"/ningning_poster_billboard.jpg"}
                            layout="responsive"
                            width={850}
                            height={580}
                            alt="ningning poster on a wall"
                        /> 
                    </section>
                </main>
            </div>
        </>
    )
}