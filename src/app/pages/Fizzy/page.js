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
                            <h4>Adobe Illustrator | Branding | Packaging</h4>
                            <p>
                                Fizzy is a sparkling aid series that offers the flavour of berries, lemon hibiscus, and grapes. 
                                Its playful, fun design reflects the refreshing taste of each time period, from the morning to midnight. 
                                Perfect to drink in any occasion, <span>fizzy</span> is your go-to for a delightful burst of flavour.
                            </p>
                            <h3>Who its for</h3>
                            <p>
                                Fizzy is designed for young adults who enjoy a refreshing drink with a playful twist. 
                                Whether they are hanging out with friends, partying, or on the road, 
                                they appreciate the bold flavours and eye-catching design of the drink! The fun-loving otter mascot and the vibrant packaging bring a sense of joy, 
                                making fizzy a drink that stands out and sparks conversation.
                            </p>
                            <h3>The fizzy experience</h3>
                            <p>
                                The design for fizzy reflect its fun and energetic personality. 
                                Its bright, and bold colours create an eye-catching look that will appeal to the youthful audience. 
                                Not only that but the otter adds a sense of charm and approachability. 
                                The mascot is a big part of fizzy&rsquo;s identity, hugging different fruits depending on the flavour, 
                                with a variety of happy expressions that make each can feel unique and full of character.
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
                    <p className={styles.scroll}>🫧 Scroll down to see all three flavours! 🫧</p>
                    <section className={styles.fizzyDesigns}>
                        <h3>Dieline</h3>
                        <Image
                            src="/fizzy1.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Oceanade Berries Full Design"
                        />
                        <Image
                            src="/fizzy2.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Sunset Splash Full Design"
                        />
                        <Image
                            src="/fizzy3.jpg"
                            width={900}
                            height={600}
                            alt="Fizzy's Midnight Current Full Design"
                        />
                        <h3>Mockup</h3>
                        <Image
                            src="/can_mockup.jpg"
                            width={900}
                            height={525}
                            alt="fizzy mockup on the beach"
                        />
                        <Image
                            src="/fizzy-banner.png"
                            width={900}
                            height={600}
                            alt="fizzy mockup transparent"
                        />
                    </section>
                </main>
            </div>
        </>
    )
}