import styles from "./nctDream.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function NCTDREAM() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>DREAMville</h1>
                    <p>Wordpress</p>
                    <Image
                        src="/nctdream_banner.jpeg"
                        height={600}
                        width={900}
                        alt=""
                    />
                    <p>DREAMville is a platform dedicated to introducing NCT Dream to both new and longtime fans. It offers everything that newcomers need to dive into their world, from inspiring milestones and achievements to their story of their journey as artists. Beyond their music and discography, DREAMvile also highlights each member, providing a deeper connection to the group and their history.
                    </p>
                    <Image
                        src="/dreamville1.jpeg"
                        height={500}
                        width={1000}
                        alt="dreamville landing page screenshot"
                    />
                    <Image
                        src="/dreamville2.png"
                        height={500}
                        width={1000}
                        alt="dreamville profile page screenshot"
                    />
                    <Image
                        src="/dreamville3.png"
                        height={500}
                        width={1000}
                        alt="dreamville blog page screenshot"
                    />
                </main>
            </div>
        </>
    )
}