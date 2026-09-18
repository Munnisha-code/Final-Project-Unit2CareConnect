
import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './Pages.css';
import SendButton from '../components/SendButton';

function LiveLocation(){
     
    const [message, setMessage] = useState('');
    const [position, setPosition] = useState(null);
    const [error, setError] = useState('');
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [locationName, setLocationName] = useState('');

    const userId = localStorage.getItem("userId");

    const CONTACTS_API_URL = `http://localhost:8080/api/trusted-contacts/user/${userId}`;

    useEffect(() => { const watchId = navigator.geolocation.watchPosition(
        (location) => {const latitude = location.coords.latitude;
                       const longitude = location.coords.longitude;
                       setPosition([ location.coords.latitude, location.coords.longitude ]);

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                    setLocationName(data.display_name);
                })
                .catch(() => {
                    setLocationName('Location name unavailable.');
                });
        },

        () => { setError('Unable to get your location.'); });

    return () => { navigator.geolocation.clearWatch(watchId); }
}, []);


    useEffect(() => {

     if (userId) {fetch(CONTACTS_API_URL)
                .then((response) => response.json())
                .then((data) => {setContacts(data);})
            .catch((error) => {
                setMessage('Error fetching trusted contacts.');
            });
     }
    }, []);

      async function handleSendLocation() {

        if (!selectedContact) {
        setMessage('Please select a trusted contact.');
        return;
        }

       if (!position) {
        setMessage('Unable to get your current location.');
        return;
        }

        const userId = localStorage.getItem("userId");

        const locationData = {userId:userId,
                              trustedContactId:selectedContact.id, 
                              latitude: position[0], 
                              longitude: position[1],
                              locationName: locationName}
        
        try {
          const response = await fetch("http://localhost:8080/api/location", { method: "POST",
                                                                               headers: {"Content-Type": "application/json"},
                                                                               body: JSON.stringify(locationData) });

        if (!response.ok) {
            throw new Error("Failed to save location");
        }

        setMessage('Location Sent Successfully!😊');

    } catch (error) {
        setMessage('Unable to send location.');
    }

    }
 

    return(

        <main className = 'live-location-container'>
           
           <h2> Location </h2>

           <div className="trusted-contacts-section">

                   <h4>Select a Trusted Contact</h4>

                 {contacts.length === 0 ? ( <p>No trusted contacts found.</p>) : 
                 
                 (<div className="trusted-contacts-list">

                     {contacts.map((contact) => (
                
                      <button key={contact.id} type="button" 
                              className={ selectedContact?.id === contact.id ? "contact-card selected": "contact-card"}
                        onClick={() => setSelectedContact(contact)}>

                       <strong>{contact.name}</strong>

                     </button> ))}

        </div>
    )}

    {selectedContact && (
        <p className="selected-contact-message">
            Selected contact: {selectedContact.name}
        </p>
    )}

</div>

           {error && <p > {error} </p>}

           {position && (

         <MapContainer className="location-map" center={position} zoom={13}
>
            <TileLayer attribution='&copy; OpenStreetMap contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={position} draggable={true}>
           
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