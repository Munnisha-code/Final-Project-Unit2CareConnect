
import careConnectTogether from '../assets/images/careconnecttogether.jpg';

import family from '../assets/images/family.jpg';

import staySafe from '../assets/images/staySafe.jpg';

import emergency from '../assets/images/emergency.jpg';


function About(){
     


    return(

         <main className="about-container">

            <section className="about-intro">

                <h2>About CareConnect</h2>

                <p>
                    CareConnect is a Family Safety Application designed to help
                    people stay connected with their loved ones and trusted
                    contacts during daily activities, travel, and emergency
                    situations. The application provides a simple way to share
                    safety updates, location information, and important messages
                    whenever support is needed.
                </p>

            </section>

            <section className="about-info-section">

                <img
                    src={emergency}
                    alt="Person needing emergency support while away from family"
                    className="about-section-image"
                />

                <div className="about-info-content">

                    <h2>Why CareConnect?</h2>

                    <p>
                        In today's busy world, people often spend time away
                        from their families because of work, travel, and daily
                        activities. During unexpected situations, loved ones
                        may not know if someone is safe or needs help.
                    </p>

                    <p>
                        CareConnect helps solve this problem by providing a
                        simple and reliable way to communicate safety updates
                        with trusted contacts.
                    </p>

                </div>

            </section>


            <section className="about-info-section">

                <img
                    src={family}
                    alt="Family members staying connected through safety communication"
                    className="about-section-image"
                />

                <div className="about-info-content">

                    <h2>Who Can Use CareConnect?</h2>

                    <p>
                        CareConnect is designed for families, students,
                        travellers, working professionals, and anyone who
                        wants to stay connected with trusted contacts.
                    </p>

                    <p>
                        It helps users feel confident knowing that their
                        important updates can be shared with people they trust.
                    </p>

                </div>

            </section>


            <section className="about-info-section">

                <img
                    src={careConnectTogether}
                    alt="People connected through CareConnect safety features"
                    className="about-section-image"
                />

                <div className="about-info-content">

                    <h2>How CareConnect Supports Users </h2>

                    <p>
                        Users can share their location, send quick safety
                        messages, and update their trusted contacts during
                        daily activities or emergency situations.
                    </p>

                    <p>
                        The application provides easy-to-use safety features
                        that make communication faster and more convenient.
                    </p>

                </div>

            </section>

            <section className="vision-section">

                <img
                    src={staySafe}
                    alt="Community connected through technology and safety support"
                    className="about-section-image"
                />

                <div className="about-info-content">

                    <h2>Our Vision</h2>

                    <p>
                        Our vision is to build a safer community where technology keeps people
                        connected, <span className="highlight-text">supported</span>, and
                        <span className="highlight-text"> protected</span>.

                    </p>

                </div>

            </section>


            <section className="why-careconnect">

                <h2>Why You have to Choose CareConnect App ?</h2>


                <h3>Simple and Reliable Safety Solution</h3>

                <p>
                    CareConnect provides an easy way for users to stay
                    connected with trusted contacts through safety updates
                    and communication tools.
                </p>


                <h3>Quick Emergency Communication</h3>

                <p>
                    Users can quickly send alerts and important messages
                    during emergency situations.
                </p>


                <h3>Location Sharing and Safety Updates</h3>

                <p>
                    The application allows users to share location details
                    and safety information during travel, work, or daily
                    activities.
                </p>


                <h3>User-Friendly Experience</h3>

                <p>
                    CareConnect is designed with simple navigation and
                    accessible safety features for everyday use.
                </p>


            </section>


        </main>      

       
    );
}


export default About;