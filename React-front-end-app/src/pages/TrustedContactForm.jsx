
import './Pages.css';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8080/api/trusted-contacts";


function TrustedContactForm(){
const navigate = useNavigate();

const [contacts, setContacts] = useState([{ id: 1, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 2, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 3, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 4, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 5, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, }]);
    // Update individual contact details

    const changeHandler = (id, ev) => { 
        
        const updatedContacts = contacts.map((contact) =>  
            
            (contact.id === id ? {...contact, [ev.target.name]: ev.target.value} : contact ));

        setContacts(updatedContacts);}

  const saveContact = async (id) => {
  const contact = contacts.find((item) => item.id === id);


  if ( !contact.name.trim() || !contact.mobileNumber.trim() || !contact.relationship.trim()) {
       alert("Please fill Name, Mobile Number, and Relationship");
       return;
    }

      try { const isExistingContact = contact.databaseId !== null && contact.databaseId !== undefined;

        console.log("Contact before saving:", contact);
        console.log("Request:", isExistingContact ? "PUT" : "POST", isExistingContact ? `${API_URL}/${contact.databaseId}`
                  : API_URL);

           const response = await fetch(isExistingContact ? `${API_URL}/${contact.databaseId}` : API_URL,{
                   
               method: isExistingContact ? "PUT" : "POST",
                   
              headers: { "Content-Type": "application/json"},

                        body: JSON.stringify({name: contact.name,
                                              mobileNumber: contact.mobileNumber,
                                              relationship: contact.relationship })});
    if (!response.ok) {
  const backendError = await response.text();

  console.error("Save failed:", {
    status: response.status,
    statusText: response.statusText,
    backendError
  });

  throw new Error(`Could not save trusted contact. Status: ${response.status}`);}

    const savedContact = await response.json();
    console.log("Saved contact from backend:", savedContact);

if (savedContact.id === null || savedContact.id === undefined) {
  console.error("Backend response has no 'id':", savedContact);

  throw new Error(
    "Contact saved, but backend did not return the database ID."
  );
}

    const updatedContacts = contacts.map((item) => item.id === id ? { ...item, databaseId: savedContact.id,
                                                                                name: savedContact.name,
                                                                                mobileNumber: savedContact.mobileNumber,
                                                                                relationship: savedContact.relationship,
                                                                                saved: true}: item);

    setContacts(updatedContacts);
  } 
  catch (error) {
    console.error("Error saving contact:", error);
    alert("Contact was not saved. Please try again.");}
};

//
     const editContact = (id) => {
           
            const updateContacts = contacts.map ((contact) => contact.id === id ? 
            
            {...contact, saved:false} : contact);

            setContacts(updateContacts);
     }


//
     const deleteContact = async (id) => {
        const contact = contacts.find((item)=>item.id === id);
        
        try{const response = await fetch(`${API_URL}/${contact.databaseId}`, {method: "DELETE"});
        console.log("Delete status:", response.status);

          if (!response.ok) {throw new Error("Could not delete trusted contact");}

            const updatedContacts = contacts.map((item) => item.id === id ? {...item, 
                                                                              databaseId: null, 
                                                                              name:'', 
                                                                              mobileNumber:'', 
                                                                              relationship:'', 
                                                                              saved:false, } : item );
            setContacts(updatedContacts); 
           }

        catch (error) { console.error("Error deleting contact:", error);
                       
                      alert("Contact was not deleted. Please try again.");
            }
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