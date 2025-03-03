import styles from "./BrushStudy.module.css";
import Image from "next/image";
import Header from "@/app/components/Header/Header";

export default function BrushStudy() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <section className={styles.imgContainer}>
                        <Image 
                            src={"/illustration-mockup.jpeg"}
                            width={1450}
                            height={850}
                            alt="photoshop illustration of a girl on a frame mockup"
                        />
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