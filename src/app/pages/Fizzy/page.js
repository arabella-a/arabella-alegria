import styles from "./Fizzy.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Fizzy() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <div className={styles.backBtn}>
                </div>
                <main className={styles.main}>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/fizzy-banner.jpeg"}
                            layout="responsive"
                            width={100}
                            height={850}
                            alt="three fizzy cans the their flavours splayed out on the floor"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>Adobe Illustrator</li>
                                <li>Graphic Design | Branding</li>
                                <li>November 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                            <Image 
                                src={"/Fizzy_Flavours.png"}
                                width={205}
                                height={450}
                                alt="fizzy oceanade berries can mockup"
                            />
                            <div className={styles.aboutInfo}>
                                <h2>About <span>fizzy</span></h2>
                                <p>
                                    <span>fizzy</span> is a sparkling aid series that offers the flavour of berries, lemon hibiscus, and grapes. 
                                    Its playful, fun design reflects the refreshing taste of each time period, from the morning to midnight. 
                                    Perfect to drink in any occasion, fizzy is your go-to for a delightful burst of flavour.
                                </p>
                            </div>
                        </div>
                        <div className={styles.targetMarketContainer}>
                            <div className={styles.targetMarketInfo}>
                                <h2>Who its for</h2>
                                <p>
                                    <span>fizzy</span> is designed for young adults who enjoy a refreshing drink with a playful twist. 
                                    Whether they’re hanging out with friends, partying, or on the road, they appreciate the bold flavours and eye-catching design of the drink! 
                                    The fun-loving otter mascot and the vibrant packaging bring a sense of joy, making <span>fizzy</span> a drink that stands out and sparks conversation.
                                </p>
                            </div>
                            <Image 
                                src={"/fizzy_flavour2.png"}
                                width={205}
                                height={450}
                                alt="fizzy sunset splash can mockup"
                            />
                        </div>
                        <div className={styles.experienceContainer}>
                        <Image 
                                    src={"/fizzy_flavour3.png"}
                                    width={205}
                                    height={450}
                                    alt="fizzy sunset splash can mockup"
                                />
                            <div className={styles.experienceInfo}>
                                <h2>The <span>fizzy</span> Experience</h2>
                                <p>
                                    The design for <span>fizzy</span> reflect its fun and energetic personality. 
                                    Its bright, and bold colours create an eye-catching look that will appeal to the youthful audience. 
                                    Not only that but the otter adds a sense of charm and approachability.  
                                    The mascot is a big part of <span>fizzy</span>’s identity, hugging different fruits depending on the flavour, 
                                    with a variety of happy expressions that make each can feel unique and full of character.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.dielineContainer}>
                        <h2>Dielines</h2>
                        <div className={styles.dielineImages}>
                            <Image 
                                src={"/fizzy1.jpg"}
                                layout="responsive"
                                width={100}
                                height={850}
                                alt="fizzy oceanade berries dieline"
                            />
                            <Image 
                                src={"/fizzy2.jpg"}
                                layout="responsive"
                                width={100}
                                height={850}
                                alt="fizzy oceanade berries dieline"
                            />
                            <Image 
                                src={"/fizzy3.jpg"}
                                layout="responsive"
                                width={100}
                                height={850}
                                alt="fizzy oceanade berries dieline"
                            />
                        </div>
                    </section>
                    <section className={styles.mockupContainer}>
                        <div className={styles.mockupImages}>
                            <Image 
                                    src={"/fizzy3.jpg"}
                                    layout="responsive"
                                    width={100}
                                    height={850}
                                    alt="fizzy oceanade berries dieline"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}