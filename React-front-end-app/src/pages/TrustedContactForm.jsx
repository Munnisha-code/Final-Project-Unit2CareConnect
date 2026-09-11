
import './Pages.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const API_URL = "http://Localhost:8080/api/trusted-contacts";


function TrustedContactForm(){

    const navigate = useNavigate();

    const [contacts, setContacts] = useState([]);



    // Update individual contact details

    const changeHandler = (id, ev) => { 
        
        const updatedContacts = contacts.map((contact) =>  
            
            (contact.id === id ? {...contact, [ev.target.name]: ev.target.value} : contact ));

        setContacts(updatedContacts);


        }

     const saveContact = (id) => { 
              
        const updatedcontacts = contacts.map((contact) => contact.id === id ? 
              
             {...contact, saved:true} : contact );

             setContacts(updatedcontacts);
     } 

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

            <h3 className='trusted-title' > Add Trusted Contacts </h3> <br />



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