"use client";

import styles from "./HiveFive.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HiveFive() {

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
                    <div className={styles.imgContainer}>
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>Figma | Adobe Illustrator | VS Code</li>
                                <li>UI/UX Designer | Graphic Designer | Frontend Developer</li>
                                <li>June 2024</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContainer}>
                        <Image 
                                src={"/hivefive_home.png"}
                                width={400}
                                height={400}
                                alt="hivefive homepage in phone mockup"
                            />
                            <div className={styles.aboutInfo}>
                                <h2>About HiveFive</h2>
                                <p>
                                    HiveFive is a web app that aims to raise awareness to the alarming decline of bee population.
                                    By combining games, articles, and quizzes, HiveFive is an app where users can learn about bees in a fun and interactive way.
                                </p>
                                <Link
                                    href="https://hivefive-bee.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>View Web App</button>
                                </Link>
                                <Link
                                    href="https://hivefive-a5styleguide.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>View Style Guide</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.highlightsContainer}>
                        <h2>Key Features</h2>
                        <div className={styles.quizContainer}>
                            <Image 
                                src={"/hivefive_quiz.png"}
                                width={420}
                                height={650}
                                alt="two screens of hivefive's quiz pages"
                            />
                            <div className={styles.quizInfo}>
                                <h3>Quiz</h3>
                                <p>
                                    The quizzes page features two bee-related categories, 
                                    offering an engaging and interactive way to explore and learn more about bees.
                                </p>
                            </div>
                        </div>
                        <div className={styles.articlesContainer}>
                            <div className={styles.articlesInfo}>
                                <h3>Articles</h3>
                                <p>
                                    The articles page displays the latest articles, with options to filter and search for specific topics related to bees.
                                </p>
                            </div>
                            <Image 
                                src={"/hivefive_articles.png"}
                                width={150}
                                height={475}
                                alt="screen mockup of hivefive's article page"
                            />
                        </div>
                        <div className={styles.matchingContainer}>
                            <Image 
                                src={"/hivefive_matching.png"}
                                width={420}
                                height={650}
                                alt="screen mockup of hivefive's matching pages"
                            />
                            <div className={styles.matchingInfo}>
                                <h3>Matching</h3>
                                <p>
                                    The matching game features two bee-related categories. 
                                    When a photo is clicked, it reveals whether the answer is correct or wrong, followed by an explanation.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}