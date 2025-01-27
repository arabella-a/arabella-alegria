"use client";

import styles from "./Filter.module.css";
import Link from "next/link";

export default function Filter() {

    return (
        <>
            <div className={styles.Filter}>
                <div>
                    <ul className={styles.filterCategories}>
                        <Link href="/pages/GraphicDesign"><li>01 Graphic Design</li></Link>
                        <Link href="/pages/Development"><li>02 Development</li></Link>
                        <li><button>03 UI/UX Design</button></li>
                        <li><button>04 Motion Graphics</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}