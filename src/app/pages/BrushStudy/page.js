"use client";

import styles from "./BrushStudy.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";

export default function BrushStudy() {

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
                        <div>
                            <h2>About Project</h2>
                            <p>
                                This illustration was created as a study in Photoshop brushes. 
                                It uses various techniques and multiple brush styles to add depth and texture, 
                                aiming to create a realistic look while preserving the essence and feel of the original photo.
                            </p>
                        </div>
                    </section>
                    <section className={styles.comparisonContainer}>
                        <h2>Original vs Illustration</h2>
                        <div className={styles.comparison}>
                            <Image
                                src={"/illustration-real.jpg"}
                                width={450}
                                height={700}
                                alt="black and white photo of a woman looking to the right"
                            />
                            <Image 
                                src={"/photoshop_illustration.jpg"}
                                width={400}
                                height={700}
                                alt="photoshop illustration of a woman in bacl and white filter"
                            />
                        </div>
                    </section>
                    <section className={styles.mockupContainer}>
                        <h2>Mockups</h2>
                        <div className={styles.mockup}>
                        <Image 
                                src={"/ps_illustration2.jpg"}
                                width={1400}
                                height={900}
                                alt="illustration of woman framed on the wall in an art gallery"
                        />
                        <Image 
                            src={"/illustration-mockup.jpeg"}
                            width={1400}
                            height={850}
                            alt="illustration of woman framed on the wall"
                        />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}