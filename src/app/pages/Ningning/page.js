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
                            <p>Adobe Photoshop | Adobe Illustrator</p>
                            <p>
                                With aespa's highly anticipated launch, individual posters are the perfect way to promote their Japanese single, <span>Hot Mess</span>!  
                                Its design takes inspiration from iconic Y2K Japanese magazine covers, paying tribute to the release of their Japanese debut. 
                                All elements in this poster are thought thoroughly. From its colours to the languages used. 
                                All elements of this poster have been thoughtfully considered, from the colors to the languages used. 
                                aespa's signature colors are incorporated to reinforce their branding, alongside their name on the poster.
                                Since this will be released to the Japanese public, both English and Katakana are featured.
                            </p>
                        </div>
                        <div>
                            <Image 
                                src="/ningning_poster_banner.png"
                                width={1000}
                                height={765}
                                alt="ningning's poster in a tilted frame"
                            />
                        </div>
                    </div>
                    <p className={styles.scroll}>Scroll down to see how it fits into the real world! <span>&#8595;</span></p>
                    <section className={styles.gallery}>
                        <h3>Real-Life Scenarios</h3>
                        <p>
                            Here's the poster on a wall where people often pass by. 
                            With its bright and fun look, it's hard to miss! &#40; Even the dog seems to like it 🫣 &#41;
                        </p>
                        <Image
                            src="/ningning_poster_wall.jpg"
                            width={1000}
                            height={675}
                            alt="ninging's poster on a wall"
                        />
                        <p>
                            This poster isn't just wall-friendly—it's perfect for OOH &#40; Out of Home advertising &#41; spaces too. 
                            In the busy streets, this poster is eye-catching! 
                        </p>
                        <Image
                            src="/ningning_poster_billboard.jpg"
                            width={1000}
                            height={650}
                            alt="ninging's poster on a billboard outside a building"
                        />
                    </section>
                </main>
            </div>
        </>
    )
}