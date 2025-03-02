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
                    <div className={styles.aboutContainer}>
                        <Image 
                            src={"/reachout-settings.png"}
                            width={1500}
                            height={1000}
                            alt="reachout settings page on laptop mockup"
                        />
                        <div className={styles.aboutInformation}>
                            <h2>About Project</h2>
                            <p>
                                Reachout is a platform dedicated to supporting formerly incarcerated individuals by providing resources, 
                                fostering community connections, and helping with reintegration into society. 
                                It aims to create a safe space for growth, empowerment, and second chances.
                            </p>
                            <button>View Prototype</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}