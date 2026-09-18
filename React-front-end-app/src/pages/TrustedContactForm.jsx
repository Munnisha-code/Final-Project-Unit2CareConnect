
import './Pages.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function TrustedContactForm(){
const navigate = useNavigate();

const userId = localStorage.getItem("userId");

const API_URL = `http://localhost:8080/api/trusted-contacts/user/${userId}`;

const [contacts, setContacts] = useState([{ id: 1, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 2, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 3, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 4, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, },
                                          { id: 5, databaseId:null, name: "", mobileNumber: "", relationship: "", saved: false, }]);
const [errorMessage, setErrorMessage] = useState('');

   const getContacts = async () => {
    
    try {const response = await fetch(API_URL);

    if (!response.ok) {

      throw new Error(`Could not load trusted contacts. Status: ${response.status}`);
    }

    const savedContacts = await response.json();

    setContacts((currentContacts) => currentContacts.map((card, index) => {
        const savedContact = savedContacts[index];

        if (!savedContact) {
          return {...card, databaseId: null,
                           name: "",
                           mobileNumber: "",
                           relationship: "",
                           saved: false }}

        return {...card, databaseId: savedContact.id,
                         name: savedContact.name,
                         mobileNumber: savedContact.mobileNumber,
                         relationship: savedContact.relationship,
                         saved: true}}));
                        } 
           catch (error) {
                     setErrorMessage("Could not load trusted contacts. Please try again.");
            }
}

      useEffect(() => { if (userId) { getContacts();
    } 
      
    else {
        setErrorMessage("User ID not found. Please log in again.");
    }
}, []);

// Update individual contact details

    const changeHandler = (id, ev) => { 
        
        const updatedContacts = contacts.map((contact) =>  
            
            (contact.id === id ? {...contact, [ev.target.name]: ev.target.value} : contact ));

        setContacts(updatedContacts);}

  const saveContact = async (id) => {
  const contact = contacts.find((item) => item.id === id);


  if ( !contact.name.trim() || !contact.mobileNumber.trim() || !contact.relationship.trim()) {
       setErrorMessage("Please fill Name, Mobile Number, and Relationship");
       return;
    }

      try { const isExistingContact = contact.databaseId !== null && contact.databaseId !== undefined;
 
            const response = await fetch(isExistingContact ? `${API_URL}/${contact.databaseId}` : API_URL,{
                   
               method: isExistingContact ? "PUT" : "POST",
                   
               headers: { "Content-Type": "application/json"},

               body: JSON.stringify({name: contact.name,
                                     mobileNumber: contact.mobileNumber,
                                     relationship: contact.relationship })});
    if (!response.ok) {
         throw new Error(`Could not save trusted contact. Status: ${response.status}`);
        }

    const savedContact = await response.json();

if (savedContact.id === null || savedContact.id === undefined) {
  throw new Error("Contact saved, but backend did not return the database ID.");
}

    const updatedContacts = contacts.map((item) => item.id === id ? { ...item, databaseId: savedContact.id,
                                                                                name: savedContact.name,
                                                                                mobileNumber: savedContact.mobileNumber,
                                                                                relationship: savedContact.relationship,
                                                                                saved: true}: item);

    setContacts(updatedContacts);
  } 
     catch (error) {
        setErrorMessage("Contact was not saved. Please try again.");}
     }

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

          if (!response.ok) {throw new Error("Could not delete trusted contact");}

            const updatedContacts = contacts.map((item) => item.id === id ? {...item, 
                                                                              databaseId: null, 
                                                                              name:'', 
                                                                              mobileNumber:'', 
                                                                              relationship:'', 
                                                                              saved:false, } : item );
            setContacts(updatedContacts); 
           }

             catch (error) {
                       setErrorMessage("Contact was not deleted. Please try again.");
             }
        }
 
       

    return(

        <div className="trusted-contact-container" >

          <h3 className='trusted-title' > Add Trusted Contacts </h3> 
          
          {errorMessage && ( <p className="error-message">{errorMessage}</p>)}

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

            </div> 


              <button className ='tc-save-button' type='button' onClick={ () => navigate('/thank-you')} > 
                      
                      Save Contacts 

              </button>

            
        </div>
    );
}

export default TrustedContactForm;