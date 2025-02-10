import styles from "./ReachOut.module.css";
import Header from "@/app/components/Header/Header";

export default function ReachOut() {
    return (
        <>
            <Header/>
            <div className={styles.pages}>
                <main className={styles.main}>
                    <h1>ReachOut</h1>
                    <p>Figma | Adobe Premiere</p>
                    <p>ReachOut is a webapp created to </p>
                    <section>
                        <h2>What is ReachOut created for?</h2>
                        <p>
                            Finding a job is already hard enough for anyone, but for formerly incarcerated individuals, 
                            it becomes even more challenging. ReachOut is designed to bridge the gap between these individuals, 
                            organization workers, and employers, creating a more inclusive and supportive world.
                        </p>
                        <h2>How will does this work?</h2>
                        <p> 
                            ReachOut connects three key groups: Individuals, Workers, and Employers. 
                            Through AI-powered job matching, we make these connections smoother, helping everyone find the right fit more effectively. 
                            This interconnected system ensures that all parties can work together towards a more inclusive workforce.
                        </p>
                        <h2>Problem Statement</h2>
                        <p>
                            For organization workers supporting formerly incarcerated individuals, managing clients can quickly become overwhelming. 
                            Keeping track of job seekers, matching them with the right opportunities, and coordinating with employers all require time and organisation. 
                            Without the right tools, it is easy for things to become disorganised, making it harder to provide effective support.
                        </p>
                        <h2>Pain Point</h2>
                        <p>
                            Managing multiple job seekers at different stages—active clients, archived records, and application statuses—can be overwhelming. Without a structured system, 
                            workers may lose track of important details, leading to inefficiencies, miscommunication, and delays in support. 
                            The lack of streamlined navigation makes it difficult to prioritise tasks and access key information quickly.
                        </p>
                        <h2>Solution</h2>
                        <p>
                            To address this, we have introduced a single-page system with a filter in the header, allowing workers to seamlessly switch between Active Clients, Archived Clients, and Application Status. 
                            This structure improves organisation, enhances efficiency, and ensures that no client falls through the cracks. 
                            By making information more accessible, workers can provide better support while reducing time spent on manual tracking.
                        </p>
                    </section>
                </main>
            </div>
        </>
    )
}