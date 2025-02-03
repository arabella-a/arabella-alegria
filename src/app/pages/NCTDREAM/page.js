import styles from "./nctDream.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function NCTDREAM() {
    return (
        <>
            <div className={styles.page}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <h1>DREAMville</h1>
                            <p>Wordpress</p>
                            <p>
                                DREAMville is a platform dedicated to introducing NCT Dream to both new and longtime fans. 
                                It offers everything that newcomers need to dive into their world, from inspiring milestones and achievements to their story of their journey as artists. 
                                Beyond their music and discography, DREAMvile also highlights each member, providing a deeper connection to the group and their history.
                            </p>
                            <a href="https://aalegria-midterm.com/" target="_blank">
                                <button>Visit Site</button>
                            </a>
                        </div>
                        <Image
                            src="/nctdream_mockup.png"
                            height={700}
                            width={900}
                            alt="DREAMville site on desktop mockup"
                        />
                    </div>
                    <p className={styles.scroll}>Scroll down to see the functions!</p>
                    <div className={styles.gallery}>
                        <h3>Landing Page</h3>
                        <p>
                            On the landing page, the aesthetic is kept minimal to reduce distractions. 
                            A mini showcase of the members is featured, with their photos providing a preview. 
                            Additionally, there are shortcuts to blog posts that users can easily click on.
                        </p>
                        <video autoPlay loop muted width={900}>
                            <source
                                src="/dreamville_landingpage.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <h3>Blog Posts</h3>
                        <p>
                            The introductions for each member are featured in the blog posts, 
                            along with inspirational quotes that can motivate anyone visiting the site. 
                            Additionally, a gallery showcasing their hobbies, photoshoots, 
                            and more is included to give a personal touch.
                        </p>
                        <video autoPlay loop muted width={900}>
                            <source
                                src="/dreamville_posts.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <h3>Discography</h3>
                        <p>
                        To keep up with their music, a dedicated discography page is available, 
                        where visitors can explore all of their releases. 
                        The releases are organized by year for easy navigation, 
                        and each album is linked to its respective Spotify page, complete with album covers.
                        </p>
                        <video autoPlay loop muted width={900}>
                            <source
                                src="/dreamville_discography.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <h3>Profile</h3>
                        <p>
                            Just like the discography page, the profile page features key details about each member, 
                            including their birth date and position in the group. 
                            It also includes links to their personal Instagram profiles, depending on the member.
                        </p>
                        <video autoPlay loop muted width={900}>
                            <source
                                src="/dreamvillle_profile.mp4"
                                type="video/mp4"
                            />
                        </video>
                        </div>

                </main>
            </div>
        </>
    )
}