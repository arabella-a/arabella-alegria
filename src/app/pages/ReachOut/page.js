import styles from "./ReachOut.module.css";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function ReachOut() {
    return (
        <>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <Header/>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                        <h1>ReachOut</h1>
                        <p className={styles.type}>Figma | Adobe Premiere</p>
                        <p>
                            Reachout is a platform dedicated to supporting formerly incarcerated individuals by providing resources, 
                            fostering community connections, and helping with reintegration into society. 
                            It aims to create a safe space for growth, empowerment, and second chances.
                        </p>
                        <Link href="https://www.figma.com/proto/MfGA57RbqWErt7qTMGdR8c/ReachOut---Design-Draft?node-id=510-2765&t=avvkTrdOtG4hkhSd-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=424%3A1831&show-proto-sidebar=1">
                            <button>Check out our prototype!</button>
                        </Link>
                        <p>💙 Scroll down to see more 💙</p>
                        </div>
                        <Image 
                            src={"/reachout_laptop.png"}
                            width={1200}
                            height={800}
                            alt="laptop mockup"
                        />
                    </div>
                    <section className={styles.info}>
                        <div className={styles.paragraphs}>
                            <h2>Defining the Need</h2>
                            <p>
                                Through our initial research, we discovered that many formerly incarcerated individuals struggle to find employment after their sentence due to a lack of skill-building opportunities and access to the necessary technology for learning. 
                                Additionally, these individuals often face societal stigma, being unfairly branded as unfit to reintegrate into society. 
                                This lack of opportunity and support often leads to higher rates of recidivism, further hindering their successful reintegration. 
                                At the same time, there are many organizations dedicated to helping these individuals secure a second chance, but these workers often lack sufficient resources to effectively support their efforts. 
                                Moreover, there are few platforms that bridge the gap between employers willing to give second chances and those seeking meaningful opportunities.
                            </p>
                        </div>
                        <div className={styles.paragraphs}>
                            <h2>Empowering Those Who Need It</h2>
                            <p> 
                                ReachOut is designed for formerly incarcerated individuals who face challenges such as discrimination and stigma when seeking employment or reintegrating into society. 
                                Our mission is to provide these individuals with the tools and support they need to find jobs and rebuild their lives, 
                                free from the barriers of their past. Through our research, we discovered numerous organizations and communities dedicated to helping these individuals reintegrate smoothly into society. 
                                Moreover, many workplaces and companies are also open to offering second chances, providing these individuals with the opportunity to thrive.
                            </p>
                        </div>
                        <div className={styles.paragraphs}>
                            <h2>Who We Serve</h2>
                            <div className={styles.persona}>
                                <Image 
                                    src={"/persona1.jpg"}
                                    width={320}
                                    height={400}
                                    alt="first page of our first persona"
                                />
                                <Image 
                                    src={"/persona2.jpg"}
                                    width={320}
                                    height={400}
                                    alt="second page of our first persona"
                                />
                            </div>
                        </div>
                        <div className={styles.paragraphs}>
                            <div className={styles.persona}>
                                <Image 
                                    src={"/persona3.jpg"}
                                    width={320}
                                    height={400}
                                    alt="first page of our second persona"
                                />
                                <Image 
                                    src={"/persona4.jpg"}
                                    width={320}
                                    height={400}
                                    alt="second page of our second persona"
                                />
                            </div>
                        </div>
                        <div className={styles.paragraphs}>
                            <h2>Key Insights</h2>
                            <p>
                                Formerly incarcerated individuals often struggle to find work due to stigma and discrimination, 
                                with many being screened out because of criminal record checks. Stable employment is key to reintegration, 
                                educing recidivism, and preventing homelessness. Despite negative perceptions, many employers report being satisfied with employees who have criminal records, 
                                especially when hiring focuses on qualifications rather than past mistakes. Policies like Fair Chance Hiring can help reduce these barriers.
                            </p>
                            <p>From our research, we found a few key things that could improve the job search experience:</p>
                            <ul className={styles.insight}>
                                <li>
                                    <span>Simple Job Search UX: </span> 
                                    Easy navigation, clear filters, and mobile-friendly design make the job search smoother.
                                </li>
                                <li>
                                    <span>AI Matching & Alerts: </span>
                                    AI can match people to jobs based on skills, and alerts can keep job seekers updated.
                                </li>
                                <li>
                                    <span>Showing Rehabilitation: </span>
                                    Certifications, skills, and social connections help ex-offenders show they have showed effort to change.
                                </li>
                            </ul>
                            <p>Recommendations:</p>
                            <ol className={styles.reco}>
                                <li>Make job applications easy to track and update in real-time.</li>
                                <li>Let employers give feedback to help candidates improve.</li>
                                <li>Provide filters to help job seekers find employers who are open to hiring ex-offenders.</li>
                                <li>Make the platform user-friendly and secure.</li>
                            </ol>
                        </div>
                        <div className={styles.paragraphs}>
                            <h2>Design Process & Key Features</h2>
                            <p>
                                Our platform was designed with the goal of simplifying the job search process for formerly incarcerated individuals, 
                                addressing their specific challenges such as stigma and limited access to resources. 
                                By focusing on usability and the practical needs of both job seekers and employers,
                                 we created a solution that is intuitive and supportive.
                            </p>
                            <p>Key features of the platform include:</p>
                            <ol className={styles.features}>
                                <li>
                                    <span>Job Matching: </span>
                                    AI-powered job matching connects users with relevant job opportunities based on their skills and experience.
                                </li>
                                <li>
                                    <span>Real-Time Application Tracking: </span>
                                    Users can easily track their application progress and receive real-time updates
                                </li>
                                <li>
                                    <span>Employer Feedback System: </span>
                                    This feature allows employers to provide constructive feedback, helping users improve their future job applications.
                                </li>
                                <li>
                                    <span>Privacy and Security: </span>
                                    The platform ensures secure handling of personal data, with simple login methods to protect sensitive information.
                                </li>
                                <li>
                                    <span>Customizable Employer Search: </span>
                                    Users can filter employers based on their openness to hiring ex-offenders, making it easier to find a supportive workplace.
                                </li>
                            </ol>
                        </div>
                        <div className={styles.paragraphs}>
                        <h2>Branding</h2>
                            <Image 
                                src="/Style_Tile2.0.jpg"
                                width={700}
                                height={420}
                                alt="branding guideline"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}