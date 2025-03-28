"use client";

import Header from "@/app/components/Header/Header";
import Filter from "@/app/components/Filter/Filter";
import styles from "./Illustrations.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Illustrations() {

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
                        <Link href="/pages/BrushStudy">
                            <div className={styles.banner}>
                                    <Image 
                                        src={"/illustration-banner.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="black and white illustration of a woman"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>Brush Study</h3>
                                        <p>View Illustration</p>
                                    </div>
                            </div>
                        </Link>
                        <Link href="/pages/Mechanical">
                            <div className={styles.banner}>
                                    <Image 
                                        src={"/mechanical-illustration.jpeg"}
                                        width={380}
                                        height={550}
                                        alt="kate spade pearl watch illustration"
                                    />
                                    <div className={styles.bannerInformation}>
                                        <h3>Watch</h3>
                                        <p>View Illustration</p>
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