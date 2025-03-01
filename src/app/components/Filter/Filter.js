"use client";

import styles from "./Filter.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Filter() {
    const pathname = usePathname();

    return (
        <div className={styles.Filter}>
            <ul className={styles.filterCategories}>
                <li>
                    <Link href="/pages/GraphicDesign" className={pathname === "/pages/GraphicDesign" ? styles.active : ""}>
                        01 Graphic Design
                    </Link>
                </li>
                <li>
                    <Link href="/pages/Development" className={pathname === "/pages/Development" ? styles.active : ""}>
                        02 Development
                    </Link>
                </li>
                <li>
                <Link href="/pages/UIUX" className={pathname === "/pages/UIUX" ? styles.active : ""}>
                    03 UI/UX Design
                </Link>
                </li>
                <li>
                    <Link href="/pages/MotionGraphics" className={pathname === "/pagesMotionGraphics" ? styles.active : ""}>04 Motion Graphics</Link>
                </li>
                <li>
                    <Link href="/" className={pathname === "/" ? styles.active : ""}>05 Illustrations</Link>
                </li>
            </ul>
        </div>
    );
}
