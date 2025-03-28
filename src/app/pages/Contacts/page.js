"use client";

import styles from "./Contacts.module.css";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";
import Image from "next/image";

export default function Contacts() {

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
                    <div className={styles.cta}>
                        <p>Ready to</p>
                        <p> <span> create </span> something </p>
                        <span className={styles.remarkable}>remarkable </span>
                        <p className={styles.together}>together?</p>
                    </div>
                    <section className={styles.info}>
                        <div className={styles.email}>
                            <h4>E-mail</h4>
                            <p>aramdl.alegria02@gmail.com</p>
                        </div>
                        <div>
                        <h4>Social Media</h4>
                        <div className={styles.sns}>
                            <div className={styles.snsInfo}>
                                <p><a href="https://www.linkedin.com/in/arabella-alegria-3b45952a9/">LinkedIn</a></p>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                </main>
            </div>
        </>
    )
}