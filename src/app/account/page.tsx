import Navbar from "../../components/Navbar";
import './styles.css';

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="profile-container">
                <header className="profile-header">
                    <div className="profile-title">
                        <img src='/tabby.jpg' alt="Logo" className="profile-logo" />
                    </div>
                    <nav className="profile-nav">
                        {/* <a href="/">Home</a>
                        <a href="/dashboard">Classes</a> */}
                        <button className="logout-button">Log Out</button>
                    </nav>
                </header>


                <div className="content-container">
                    <main className="profile-main">
                        <section className="profile-info">
                            <img src='/tabby.jpg' alt="User" className="profile-photo" />
                            <div className="profile-details">
                                <p>Name: abc bro</p>
                                <p>Year: Year 1</p>
                                <p>Major: Software Engineering</p>
                                <p>Hobbies: Coding, biking, sleeping</p>
                                <p>Skills: Python, Java, C, SQL, PQL, R, JS, PHP</p>
                            </div>
                        </section>
                        </main>


                        <section className="profile-groups">
                            <div className="profile-grouping">
                                <h2>Finding groups for:</h2>
                                <ol>
                                    <li>SE101 (OS & Networking)</li>
                                    <li>IS111 (Introduction to Programming)</li>
                                </ol>
                            </div>
                            <div className="profile-grouped">
                                <h2>Grouped!</h2>
                                <ol>
                                    <li>IS112 (Data Management) (2/3) <a href="#"><sub><u>leave group</u></sub></a></li>
                                    <li>COR114 (...) (5/5) full</li>
                                </ol>
                            </div>
                        

                        <section className="profile-actions">
                            <button className="find-groups-button">Find new people</button>
                            <button className="schedule-button"> <a href="/dashboard">Schedule</a></button>
                            <div className="profile-contacts">
                                <p>Email: abc.2023@scis.smu.edu.sg</p>
                                <p>Telegram: @ABcabc</p>
                            </div>
                        </section>
                    </section>

                </div>
            </div>
        </>
    );
}
