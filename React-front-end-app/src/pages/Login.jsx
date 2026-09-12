
import React, { useState } from 'react';
import {  Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080/api/users/login";

function Login(){

   const [data, setData]=useState({ username : "", password : ""});

   const [ error, setError] = useState('');
    
   // After user Login page navigate to oneclicksendmessage

   const navigate = useNavigate();

   //Destructuring the data

   const {username,password} = data;

   // onchange eventhandler for enter/change the login credentials

   const changeHandler = ev =>{
         setData({...data, [ev.target.name]: ev.target.value});
   }
   
   // login submit handler

   const submitHandler = ev => {
         ev.preventDefault();

    
    const user = userLogin.find((item) =>
                       item.email === data.username && 
                       item.password === data.password        
        );

      if (user) {
          
          setError('');

        navigate('/one-click-send-message');
      } 

      else {
        setError('invalid username or password');
      }  

    }

    
   
    return(
        <div className="login-container">
            
                <form onSubmit ={submitHandler} className="login-form" >
                    
                    <h3> Login to CC</h3>

                    <label> UserName: </label>
                    <input type="text" name="username" value={ username} placeholder='you@example.com' onChange={changeHandler}/> <br />

                    <label> Password: </label>
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br />

                    <button type="submit" className ="login-button"> Login </button>

                    { error && <p className="login-error-message"> {error}  </p>}
                </form> <br />

                <p> If you are not a member? {''}
                    <Link to='/RegisterForm'> Please register Here </Link>
                </p> <br />
            
        </div>

    );
}

export default Login;