"use client";

import styles from "./Mechanical.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";

export default function Mechanical() {

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
                    <section className={styles.imgContainer}>
                        <Image 
                            src={"/mechanical-banner.jpeg"}
                            width={1450}
                            height={850}
                            alt="zoomed in illustration of kate spade watch"
                        />
                        <div className={styles.overlay}></div>
                    </section>
                    <section className={styles.aboutContainer}>
                        <div>
                            <h2>About Project</h2>
                            <p>
                                This illustration is a study of mechanical objects, focusing on Kate Spade's Mono Trio Pearl Bracelet Watch. 
                                Illustrator was used to recreate the details and structure, 
                                making it look realistic while staying true to the original design.
                            </p>
                        </div>
                    </section>
                    <section className={styles.comparisonContainer}>
                        <h2>Original vs Illustration</h2>
                        <div className={styles.comparison}>
                            <Image
                                src={"/katespade-watch.jpeg"}
                                width={425}
                                height={700}
                                alt="kate spade's mono trio pearl watch"
                            />
                            <Image 
                                src={"/mechanical_illustration.webp"}
                                width={475}
                                height={700}
                                alt="illustration of kate spade's mono trio pearl watch"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}