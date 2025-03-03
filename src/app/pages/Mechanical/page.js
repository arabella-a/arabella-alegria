import styles from "./Mechanical.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";

export default function Mechanical() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <section className={styles.imgContainer}>
                        <Image 
                            src={"/mechanical-banner.jpeg"}
                            width={1450}
                            height={850}
                            alt="zoomed in illustration of kate spade watch"
                        />
                        <div className={styles.overlay}></div>
                    </section>
                    <section className={styles.aboutContainer}>
                        <div>
                            <h2>About Project</h2>
                            <p>
                                This illustration is a study of mechanical objects, focusing on Kate Spade's Mono Trio Pearl Bracelet Watch. 
                                Illustrator was used to recreate the details and structure, 
                                making it look realistic while staying true to the original design.
                            </p>
                        </div>
                    </section>
                    <section className={styles.comparisonContainer}>
                        <h2>Original vs Illustration</h2>
                        <div className={styles.comparison}>
                            <Image
                                src={"/katespade-watch.jpeg"}
                                width={425}
                                height={700}
                                alt="kate spade's mono trio pearl watch"
                            />
                            <Image 
                                src={"/mechanical_illustration.webp"}
                                width={475}
                                height={700}
                                alt="illustration of kate spade's mono trio pearl watch"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}