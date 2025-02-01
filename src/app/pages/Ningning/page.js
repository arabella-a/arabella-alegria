import Header from "@/app/components/Header/Header"
import styles from "./Ningning.module.css";
import Image from "next/image";

export default function Ningning() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <h1>aespa NINGNING</h1>
                            <p>Photoshop</p>
                            <p>words words words</p>
                        </div>
                        <div>
                            <Image 
                                src="/ningning_poster_banner.png"
                                width={1000}
                                height={765}
                                alt="ningning's poster in a tilted frame"
                            />
                        </div>
                        <p className={styles.scroll}>Scroll down to see all three flavours!</p>
                    </div>
                </main>
            </div>
        </>
    )
}