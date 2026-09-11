
import './Pages.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8080/api/trusted-contacts";


function TrustedContactForm(){
const navigate = useNavigate();

    const [contacts, setContacts] = useState([
        { id: 1, name: "", mobileNumber: "", relationship: "", saved: false },
  { id: 2, name: "", mobileNumber: "", relationship: "", saved: false },
  { id: 3, name: "", mobileNumber: "", relationship: "", saved: false },
  { id: 4, name: "", mobileNumber: "", relationship: "", saved: false },
  { id: 5, name: "", mobileNumber: "", relationship: "", saved: false } 
    ]);

  


    // Update individual contact details

    const changeHandler = (id, ev) => { 
        
        const updatedContacts = contacts.map((contact) =>  
            
            (contact.id === id ? {...contact, [ev.target.name]: ev.target.value} : contact ));

        setContacts(updatedContacts);


        }

     const saveContact = async (id) => {
  const contact = contacts.find((item) => item.id === id);

  if (
    !contact.name.trim() || !contact.mobileNumber.trim() || !contact.relationship.trim()) {
    alert("Please fill Name, Mobile Number, and Relationship");
    return;
  }

  try {
    const response = await fetch(API_URL, {method: "POST", headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: contact.name, mobileNumber: contact.mobileNumber, relationship: contact.relationship })
    });

    if (!response.ok) {
      throw new Error("Could not save trusted contact");
    }

    const savedContact = await response.json();

    const updatedContacts = contacts.map((item) => item.id === id ? {...savedContact, saved: true}: item);

    setContacts(updatedContacts);
  } 
  catch (error) {
    console.error("Error saving contact:", error);
    alert("Contact was not saved. Please try again.");}
};

     const editContact = (id) => {
           
            const updateContacts = contacts.map ((contact) => contact.id === id ? 
            
            {...contact, saved:false} : contact);

            setContacts(updateContacts);
     }



     const deleteContact = (id) => { const updatedContacts = contacts.map((contact) => contact.id === id ?

            {...contact, name:'', mobileNumber:'', relationship:'', saved:false } : contact );

           setContacts(updatedContacts); 
        }
 
       

    return(

        <div className="trusted-contact-container" >

            <h3 className='trusted-title' > Add Trusted Contacts </h3> 



            <div className ='contact-list' >
                     
                     {contacts.map((contact) => (

                                <div className='contact-card'  key = {contact.id}>

                                    <h4> contact {contact.id} </h4>

                                    { contact.saved ?

                                    (
                                    <>

                                    <p> Name: {contact.name} </p>
                                    <p> Mobile: {contact.mobileNumber} </p>
                                    <p> Relationship: {contact.relationship} </p>

                                <div className = 'contact-actions'>

                                    <button type ='button' onClick= { () => editContact(contact.id)} > Edit </button>

                                    <button type='button' onClick= { () => deleteContact(contact.id)} > Delete </button>

                                </div>
                                 </>
                                 )
                                :
                                (
                                <>

                                <label>Name</label>

                                <input type='text' name='name' value={contact.name} 
                                       onChange={(ev)=>changeHandler(contact.id,ev)} />

                                <label> Mobile Number </label>

                                <input type='tel' name='mobileNumber' value={contact.mobileNumber} 
                                       onChange={(ev)=>changeHandler(contact.id,ev)} />

                                <label> Relationship </label>

                                <input type='text' name='relationship' value={contact.relationship} 
                                       onChange={(ev)=>changeHandler(contact.id,ev)} />

                                    
                                <button className='trusted-save-button' type ='button' 
                                        onClick = {() => saveContact(contact.id)}> 

                                        Save 
                                        
                                </button> 
                              
                                </>   
                                    )                                
                                }
                                </div>
                    ))}

            </div> < br />

              <button className ='tc-save-button' type='button' onClick={ () => navigate('/thank-you')} > 
                      
                      Save Contacts 

              </button>

            
        </div>
    );
}

export default TrustedContactForm;