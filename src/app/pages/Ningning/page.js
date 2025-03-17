import Header from "@/app/components/Header/Header"
import styles from "./Ningning.module.css";
import Image from "next/image";

export default function Ningning() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/ningning_poster_wall.jpg"}
                            layout="responsive"
                            width={100}
                            height={850}
                            alt="ningning poster on a wall"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <section className={styles.about}>
                        <div className={styles.information}>
                            <ul>
                                <li>Adobe Photoshop & Illustrator</li>
                                <li>Graphic Design</li>
                                <li>November 2024</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}