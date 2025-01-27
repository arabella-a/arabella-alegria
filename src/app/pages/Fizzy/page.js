import styles from "./Fizzy.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function Fizzy() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <h1>Fizzy</h1>
                            <p>Adobe Illustrator | Branding | Packaging</p>
                            <p>
                                Fizzy is a sparkling aid series that offers the flavour of berries, lemon hibiscus, and grapes. 
                                Its playful, fun design reflects the refreshing taste of each time period, from the morning to midnight. 
                                Perfect to drink in any occasion, Fizzy is your go-to for a delightful burst of flavour.
                            </p>
                        </div>
                        <Image
                            src="/Fizzy_Flavours.png"
                            width={750}
                            height={600}
                            alt="Fizzy's Oceanade Berries Can Mockup"
                            className={styles.can}
                        />
                    </div>
                    <p className={styles.scroll}>Scroll down to see all three flavours!</p>
                    <div className={styles.fizzyDesigns}>
                        <Image
                            src="/Oceanade_Berries.svg"
                            width={900}
                            height={900}
                            alt="Fizzy's Oceanade Berries Full Design"
                            className={styles.Oceanade}
                        />
                        <Image
                            src="/Sunset_Splash.svg"
                            width={900}
                            height={900}
                            alt="Fizzy's Sunset Splash Full Design"
                            className={styles.Sunset}
                        />
                        <Image
                            src="/Midnight_Current.svg"
                            width={900}
                            height={900}
                            alt="Fizzy's Midnight Current Full Design"
                            className={styles.Midnight}
                        />
                    </div>
                </main>
            </div>
        </>
    )
}