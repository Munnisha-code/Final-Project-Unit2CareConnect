
import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './Pages.css';
import SendButton from '../components/SendButton';

function LiveLocation(){
     
    const [message, setMessage] = useState('');
    const [position, setPosition] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => { navigator.geolocation.getCurrentPosition(
        (location) => { setPosition([ location.coords.latitude,
                                      location.coords.longitude ]);

        },
        () => {setError('Unable to get your location.');}); }, []);

    function handleSendLocation() {
        setMessage('Location Sent Successfully!😊')
    }
 

    return(

        <main className = 'live-location-container'>
           
           <h2> Location </h2>

           {error && <p > {error} </p>}

           {position && (

         <MapContainer className="location-map" center={position} zoom={13}
>
            <TileLayer attribution='&copy; OpenStreetMap contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={position}>
           
              <Popup> Your current Location </Popup>

            </Marker>
         </MapContainer>
         )}

        <SendButton onClick = {handleSendLocation}> Send Location </SendButton>  

           { message && (<p className = 'success-message'> {message} </p>) }

        </main>

    );
}

export default LiveLocation;