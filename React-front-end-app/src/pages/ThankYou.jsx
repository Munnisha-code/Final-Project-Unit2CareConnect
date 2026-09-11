
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function ThankYou(){

    const navigate = useNavigate();

    return(
       
        <div className=' thankyou-container'> 
           <h3> Thank You for Registering! </h3>

           <h4> Your Account has been created. </h4>

         <button className='thankyou-button' type='button' onClick = {() => navigate('/login')} > Go to Login </button>  

         </div>
    );
}

export default ThankYou;