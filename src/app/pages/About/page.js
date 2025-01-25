import styles from "./About.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";

export default function About() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <h1>About</h1>
                    <div className={styles.About}>
                        <Image
                            src="/ara_temp_profile.jpg"
                            width={400}
                            height={400}
                            alt="arabella's temporary photo"
                        />
                        <div className={styles.aboutMe}>
                            <h2>Hello! Mabuhay!</h2>
                            <p>
                                Welcome to my personal portfolio! My name is Arabella Alegria and I am a passionate designer with a focus on creating visually engaging and functional designs that enhance user experience. 
                                I have worked on projects ranging from product design to UI/UX design and development, with a focus on storytelling through strong visual elements that create impactful user experiences. 
                                I am skilled in Adobe Creative Suite and Figma, specializing in branding, typography, and designing cohesive visual identities and user-friendly interfaces.
                                Since moving to Canada in 2015, I have had the privilege of experiencing diverse cultures that have shaped my creativity.
                                Starting with traditional media, I transitioned to digital design in high school, which led me to pursue the Digital Design and Development program at BCIT. 
                                Eager to grow further, I am focused on developing intuitive and accessible designs for clients across various industries.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}