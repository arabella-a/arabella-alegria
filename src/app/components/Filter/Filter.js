"use client";

import styles from "./Filter.module.css";
import { useState } from "react";
import { works } from "../../data/data.js";

export default function Filter() {
    const [filter, setFilter] = useState("Graphic Design");


    const handleClick = e => {
        setFilter(e.target.value);
    };

    const filteredWorks = works && works[filter] ? works[filter] : [];

    return (
        <>
            <div className={styles.Filter}>
                <div>
                    <ul className={styles.filterCategories}>
                        <li><button value="all" onClick={handleClick}>01 Graphic Design</button></li>
                        <li><button value="all" onClick={handleClick}>02 Development</button></li>
                        <li><button value="all" onClick={handleClick}>03 UI/UX Design</button></li>
                        <li><button value="all" onClick={handleClick}>04 Motion Graphics</button></li>
                    </ul>
                </div>
                <div>
                    {filteredWorks.map((work) => (
                        <div key={work.id} className={styles.workItems}>
                            <div className={styles.workCard}>
                                <img src={work.image} alt={work.name} width="200" />
                                <Link href={work.link}>
                                    <button>{work.name}</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}