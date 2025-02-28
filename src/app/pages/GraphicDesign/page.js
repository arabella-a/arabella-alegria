import styles from "./GraphicDesign.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import Link from "next/link";
import Image from "next/image";

export default function GraphicDesign() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <h1>Works</h1>
                    <Filter />
                    <section className={styles.works}>
                        <div className={styles.banner}>
                            <Image 
                                src={"/fizzycans.jpeg"}
                                width={380}
                                height={550}
                                alt="fizzy banner"
                            />
                            <div className={styles.bannerInformation}>
                                <h3>fizzy</h3>
                                <Link href="/pages/Fizzy"><p>View Project</p></Link>
                            </div>
                        </div>
                        <div className={styles.banner}>
                            <Image 
                                src={"/ningposter.jpeg"}
                                width={380}
                                height={550}
                                alt="fizzy banner"
                            />
                            <div className={styles.bannerInformation}>
                                <h3>aespa</h3>
                                <Link href="/pages/Ningning"><p>View Project</p></Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
