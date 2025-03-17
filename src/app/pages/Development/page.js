import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Development.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Development() {
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
                                        src={"/dreamlaptop.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="dreamville on laptop mockup"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>DREAMville</h3>
                                        <Link href="/pages/NCTDREAM"><p>View Project</p></Link>
                                    </div>
                            </div>
                            <div className={styles.banner}>
                                    <Image 
                                        src={"/reachout-cut.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="reachout on laptop mockup"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>ReachOut</h3>
                                        <Link href="/pages/ReachOut"><p>View Project</p></Link>
                                    </div>
                            </div>
                        </div>
                        <div className={styles.lineTwo}>
                            <div className={styles.banner}>
                                <Image 
                                    src={"/hivefivephone.jpeg"}
                                    width={380}
                                    height={550}
                                    alt="hivefive on phone mockup"
                                />
                                <div className={styles.bannerInformation}>
                                    <h3>HiveFive</h3>
                                    <Link href="/pages/HiveFive"><p>View Project</p></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}