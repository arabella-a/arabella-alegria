import styles from "./ReachOut.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function ReachOut() {
    return (
        <>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <Header/>
                    <div className={styles.imgContainer}>
                        <Image 
                            src={"/reachout-banner.jpeg"}
                            width={1450}
                            height={850}
                            alt="reachout on laptop mockup with white background"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.information}>
                        <ul>
                            <li>Figma | Premiere Pro</li>
                            <li>UI Designer | Video Editor</li>
                            <li>December 2024</li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}