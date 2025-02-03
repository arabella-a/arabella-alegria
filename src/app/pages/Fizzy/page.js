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
                                Perfect to drink in any occasion, <span>fizzy</span> is your go-to for a delightful burst of flavour.
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
                    <p className={styles.explanation}>
                        As previously mentioned, these flavors are influenced by the hours of the day, 
                        reinforcing the idea that each <span>fizzy</span> flavor is perfect for any time.
                        The design features the otter mascot fully immersed in the experience, 
                        enjoying the essence of each flavor while surrounded by its key ingredients, 
                        such as fruits and botanicals. This playful and inviting visual highlights the unique elements that make each drink refreshing and flavorful.
                        In addition to the fun and dynamic ingredient display, the health benefits of the drink are clearly presented, 
                        ensuring that consumers can easily recognize its nutritional value.
                        Since this drink will be sold in Canada, both French and English are incorporated seamlessly into the design, 
                        making it accessible to a wider audience.
                    </p>
                    <section className={styles.fizzyDesigns}>
                        <Image
                            src="/fizzy_flavour_mockup.png"
                            width={900}
                            height={625}
                            alt="Fizzy's Oceanade Berries Full Design"
                            className={styles.Oceanade}
                        />
                        <Image
                            src="/fizzy1.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Oceanade Berries Full Design"
                            className={styles.Oceanade}
                        />
                        <Image
                            src="/fizzy2.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Sunset Splash Full Design"
                            className={styles.Sunset}
                        />
                        <Image
                            src="/fizzy3.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Midnight Current Full Design"
                            className={styles.Midnight}
                        />
                    </section>
                </main>
            </div>
        </>
    )
}