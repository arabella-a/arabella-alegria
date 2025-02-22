"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
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
                    <li className={pathname === "/pages/GraphicDesign" ? styles.active : ""}>
                        <Link href="/pages/GraphicDesign">Works</Link>
                    </li>
                    <li className={pathname === "/pages/About" ? styles.active : ""}>
                        <Link href="/pages/About">About</Link>
                    </li>
                    <li className={pathname === "/pages/Contacts" ? styles.active : ""}>
                        <Link href="/pages/Contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
