import styles from "./UnderConstruction.module.css";
import Header from "@/app/components/Header/Header";

export default function UnderConstruction() {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <main className={styles.main}>
                    <h1>Hi!! 👷‍♀️ This page is currently under construction 🚧 .... 🚧 Please come back later..? 🫣</h1>
                </main>
            </div>
        </>
    )
}