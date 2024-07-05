export default function ProfileWrapper() {
    return (
        <div className="profile-container bg-amber-600">
            <header className="profile-header">
                <div className="profile-title">
                </div>
            </header>
            <div className="content-container ">
                <main className="profile-main ">
                    <section className="profile-info">
                        <div className="profile-details">
                            <p>Name: Darren Cat</p>
                            <p>Year: Year 1</p>
                            <p>Major: Software Engineering</p>
                            <p>Hobbies: Coding, Cycling, Sleeping</p>
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
                        <button className="schedule-button"><a href="/dashboard">Schedule</a></button>
                        <div className="profile-contacts">
                            <p>Email: abc.2023@scis.smu.edu.sg</p>
                            <p>Telegram: @ABcabc</p>
                        </div>
                    </section>
                </section>

            </div>
        </div>
    )
}