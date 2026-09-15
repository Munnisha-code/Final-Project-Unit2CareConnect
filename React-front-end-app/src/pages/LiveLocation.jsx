
import { useState } from 'react';
import  LocationData from '../mockData/locationData.json';
import './Pages.css';
import SendButton from '../components/SendButton';

function LiveLocation(){
     
    const [message, setMessage] = useState('');

    function handleSendLocation() {
        setMessage('Location Sent Successfully!😊')
    }
 

    return(

        <main className = 'live-location-container'>
           
           <h2> Location </h2>

         <section className ='location-list'>
           
           {
               LocationData.map((location, index) => (

               <article className ='location-card'
                        key ={index} >

                    <h3> Location {index+1} </h3>
                    <p> Address : {location.address} </p>
                    <p> Latitude : {location.latitude} </p>
                    <p> Longitude: {location.longitude} </p>

                    <SendButton onClick = {handleSendLocation}> Send Location </SendButton> 

                </article>
              ))
           }
            
           </section>   

           { message && (<p className = 'success-message'> {message} </p>) }

        </main>

    );
}

export default LiveLocation;