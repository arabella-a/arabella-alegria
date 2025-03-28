"use client";

import styles from "./GraphicDesign.module.css";
import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function GraphicDesign() {

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
                <Header />
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
                    <Filter />
                    <section className={styles.works}>
                        <Link href="/pages/Fizzy">
                            <div className={styles.banner}>
                                <Image 
                                    src={"/fizzycans.jpeg"}
                                    width={380}
                                    height={550}
                                    alt="fizzy banner"
                                />
                                <div className={styles.bannerInformation}>
                                    <h3>fizzy</h3>
                                    <p>View Project</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/pages/Ningning">
                            <div className={styles.banner}>
                                <Image 
                                    src={"/ningposter.jpeg"}
                                    width={380}
                                    height={550}
                                    alt="fizzy banner"
                                />
                                <div className={styles.bannerInformation}>
                                    <h3>aespa</h3>
                                    <p>View Project</p>
                                </div>
                            </div>
                        </Link>
                    </section>
                </main>
            </div>
        </>
    );
}
