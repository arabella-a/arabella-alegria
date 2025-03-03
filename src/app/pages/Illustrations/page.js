import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Illustrations.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Illustrations() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter/>
                    <section className={styles.works}>
                        <div className={styles.lineOne}>
                            <div className={styles.banner}>
                                    <Image 
                                        src={"/illustration-banner.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="black and white illustration of a woman"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>Brush Study</h3>
                                        <Link href="/pages/BrushStudy"><p>View Illustration</p></Link>
                                    </div>
                            </div>
                            <div className={styles.banner}>
                                    <Image 
                                        src={"/mechanical-illustration.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="kate spade pearl watch illustration"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>Watch</h3>
                                        <Link href="/pages/ReachOut"><p>View Illustration</p></Link>
                                    </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}