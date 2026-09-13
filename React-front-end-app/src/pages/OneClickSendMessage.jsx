
import React, {useState} from 'react';
import './Pages.css';
import SendButton from '../components/SendButton';

const MESSAGE_API_URL = "http://localhost:8080/api/messages";

function OneClickSendMessage(){
    const [ message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const messages = [

        " 🏠 I am at Home.", 
        " 🚗 I am travelling right now. I will update you when I reach my destination. ",
        " ✅ Everything is okay. I am safe. ",
        " 🆘 I need help. Please contact me as soon as possible.",
        " 🏢 I am at the office",
        " 🚨 Emergency 🚨 ",
        " 🌳 I am at the park."

    ];
      
    const sendMessageHandler = async () => { 
        if (message.trim() === ''){
            setErrorMessage('Please select or type a message 😊.');
            return;
        }
        try{const response = await fetch(MESSAGE_API_URL,{
                                          method:"POST", headers: {"Content-Type":"application/json"},
                                          body: JSON.stringify({trustedContactId:1,messageText:message.trim()})});
       
        if (!response.ok) { setErrorMessage('Message could not be sent. Please try again.');
            return;
        }

        const savedMessage = await response.json();

        console.log('Message saved successfully:', savedMessage);

        setErrorMessage('');
        setMessageSent(true);
    } 
       catch (error) {
        console.error('Message send error:', error);
        setErrorMessage('Unable to connect to the server. Please try again.');
    }

    }

    const sendAnotherMessageHandler = () =>{ 
        setMessageSent(false);
        setMessage('');
        setErrorMessage('');
    };

    return( 

     <main>  

        <div className ='message-container'>   

            { 
                messageSent ? (
                    <div className = 'success-section'> 

                         <h4> 🤩 Message sent Successfully!  </h4>
                         <p> Your message:</p>
                         <p> {message} </p>
                         <p> Your trusted contacts have been notified.</p>

                         <button 
                                className='send-button'
                                type='button'
                                onClick={sendAnotherMessageHandler}
                            >
                                Send Another Message
                            </button>
                    </div> 
           ) : (

                    <div className='message-form-section'>

                           <h4>Send a Quick Message</h4>
      
                        <div className ='message-buttons'> 

                            { messages.map((msg, index) => ( 
                                 <button className = {msg.includes("Emergency") ? "emergency-button" : "quick-message-button"} 
                                         type='button' 
                                         key={index} 
                                         onClick= {() => setMessage(msg)}> 
                                    {msg}
                                 </button>
                            ))}
                        </div> 
                
                            <textarea className ='message-textarea' 
                                      placeholder='Type new message' 
                                      value={message} 
                                      onChange = {(ev) => setMessage(ev.target.value)}/>
                    
                           {
                               errorMessage && ( <p className='error-message'> {errorMessage} </p> )
                           }

           
                            <SendButton onClick={sendMessageHandler}> Send </SendButton>

                   </div>
                )
            }  
        </div>
     </main>

    );
}
  

export default OneClickSendMessage;