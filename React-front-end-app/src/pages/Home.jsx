



function Home(){
    return(
  <main className = 'home-container'>
        <section className = "hero-section">
            <h2>Welcome to Family safety App</h2>
            <p>
                 CareConnect is a Family Safety App designed to help users stay connected with their loved ones during daily activities, travel, and emergency situations. 
                The app allows users to quickly share their safety status with trusted contacts through simple one-click updates. With features like trusted contacts, emergency alerts, and safety notifications, CareConnect helps families stay informed and provides a faster way to communicate when support is needed.
            </p>
        </section>

        <section className="features-section">
           <h2> Features : </h2>
            
            <ol>
                <li> Save upto 5 trusted contacts</li>
                <li> Send One Click messages and write message </li>
                <li> Send Live Location</li>
                <li> Emergency button</li>
                <li> Update History</li>
            </ol>
           
        </section>

        <section className="works-section">
            <h2> How it works</h2>
            <p>
                CareConnect works by providing a simple and fast way for users to share their safety status with trusted contacts. First, users create an account and complete their profile details. 
                They can then add family members or friends as trusted contacts. When the user needs to share an update, they can select a safety status such as “Safe Reached Home,” “Travelling,” or “Need Help” with one click. The selected update, along with the date and time, is shared with their trusted contacts so they can stay informed.
                 Users can also add a custom message and view their previous safety updates in the history section. 
            </p>
         </section>
  </main>
    );
}


export default Home;