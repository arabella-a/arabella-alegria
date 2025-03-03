import styles from "./About.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.About}>
                        <Image
                            src="/ara_temp_profile.jpg"
                            width={400}
                            height={400}
                            alt="arabella's temporary photo"
                        />
                        <div className={styles.aboutMe}>
                            <h2>Hello!</h2>
                            <p>
                                Hi! I’m Arabella Alegria — a designer who loves crafting bold, functional designs that tell a story. 
                                From product design to UI/UX, I blend creativity with purpose, using tools like Adobe Creative Suite and Figma to build striking visual identities and user-friendly interfaces. 
                                My journey started with traditional art, shifted to digital design in high school, 
                                and now I’m diving deeper into intuitive, accessible design through BCIT’s Digital Design and Development program. 
                                Let’s make something impactful!
                            </p>
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