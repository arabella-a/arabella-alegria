"use client";

import styles from "./WhatToDo.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import { useEffect } from "react";

export default function WhatToDo() {

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
                        <div className={styles.overlay}></div>
                    </section>
                    <section className={styles.aboutContainer}>
                        <h2>About Project</h2>
                        <p>
                            This motion graphic, brought to life with Adobe Illustrator and After Effects, 
                            is your go-to guide on surviving a blackout—what to do, and more importantly, 
                            what not to do when the lights go out!
                        </p>
                    </section>
                    <section className={styles.videoContainer}>
                        <video controls
                            src={"/what-to-do.mp4"}
                            width={1400}
                        />
                    </section>
                </main>
            </div>
        </>
    )
}