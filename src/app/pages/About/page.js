"use client";

import styles from "./About.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
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
                    <div className={styles.About}>
                        <div className={styles.profilePhoto}>
                            <Image
                                src="/ara_temp_profile.jpg"
                                width={400}
                                height={400}
                                alt="arabella's temporary photo"
                            />
                        </div>
                        <div className={styles.aboutMe}>
                            <div className={styles.aboutMeInfo}>
                                <h2>Hello!</h2>
                                <p>
                                    Hi! I’m Arabella Alegria — a designer who loves crafting bold, functional designs that tell a story. 
                                    From product design to UI/UX, I blend creativity with purpose, using tools like Adobe Creative Suite and Figma to build striking visual identities and user-friendly interfaces. 
                                    My journey started with traditional art, shifted to digital design in high school, 
                                    and now I’m diving deeper into intuitive, accessible design through BCIT’s Digital Design and Development program. 
                                    Let’s make something impactful!
                                </p>
                            </div>
                            <Link 
                                href={"/arabella_alegria_resume.pdf"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                <button>🩵 View my resume!</button>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}