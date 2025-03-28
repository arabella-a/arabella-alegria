"use client";

import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Development.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Development() {

    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorButterfly = document.querySelector("[data-cursor-outline]");
          
        if (!cursorDot || !cursorButterfly) {
            console.error("Cursor elements not found!");
            return;
        }
          
        const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
          
        console.log("Mouse position:", posX, posY); 
          
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
          
        cursorButterfly.animate(
            {
                transform: `translate(${posX}px, ${posY}px)`,
            },
            { duration: 150, fill: "forwards" }
        );
        };
          
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);
    
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.cursorDot} data-cursor-dot></div>
                    <div className={styles.cursorButterfly} data-cursor-outline>
                        <Image 
                        src={"/buttfly-1.svg"}
                        width={50}
                        height={50}
                        alt="butterfly"
                        />
                    </div>
                    <h1>Works</h1>
                    <Filter/>
                    <section className={styles.works}>
                        <div className={styles.lineOne}>
                            <Link href="/pages/NCTDREAM">
                                <div className={styles.banner}>
                                    <Image 
                                        src={"/dreamlaptop.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="dreamville on laptop mockup"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>DREAMville</h3>
                                        <p>View Project</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/pages/ReachOut">
                                <div className={styles.banner}>
                                    <Image 
                                        src={"/reachout-cut.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="reachout on laptop mockup"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>ReachOut</h3>
                                        <p>View Project</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.lineTwo}>
                        <Link href="/pages/HiveFive">
                            <div className={styles.banner}>
                                <Image 
                                    src={"/hivefivephone.jpeg"}
                                    width={380}
                                    height={550}
                                    alt="hivefive on phone mockup"
                                />
                                <div className={styles.bannerInformation}>
                                    <h3>HiveFive</h3>
                                    <p>View Project</p>
                                </div>
                            </div>
                        </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}