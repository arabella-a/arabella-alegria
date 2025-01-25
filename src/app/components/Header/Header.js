import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className={styles.Header}>
                <Link href="/">
                    <Image
                        src="/arabella_alegria_logo.svg"
                        width={60}
                        height={60}
                        alt="arabella's logo"
                    />
                </Link>
                <div className={styles.categories}>
                    <ul>
                        <Link href="/pages/Works"><li>Works</li></Link>
                        <Link href="/"><li>About</li></Link>
                        <Link href="/"><li>Contacts</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}