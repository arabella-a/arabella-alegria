import styles from "./Contacts.module.css";
import Header from "@/app/components/Header/Header";

export default function Contacts() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.cta}>
                        <p>Ready to</p>
                        <p> <span> create </span> something </p>
                        <span className={styles.remarkable}>remarkable </span>
                        <p className={styles.together}>together?</p>
                    </div>
                    <section className={styles.info}>
                        <div>
                            <h4>E-mail</h4>
                            <p>aramdl.alegria02@gmail.com</p>
                            <div className={styles.longLine}></div>
                        </div>
                        <div>
                        <h4>Social Media</h4>
                        <div className={styles.sns}>
                            <div className={styles.snsInfo}>
                                <p><a href="https://www.linkedin.com/in/arabella-alegria-3b45952a9/">LinkedIn</a></p>
                                <div className={styles.shorterLine}></div>
                            </div>
                            <div  className={styles.snsInfo}>
                                <p>Instagram</p>
                                <div className={styles.shortLine}></div>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                </main>
            </div>
        </>
    )
}