
import React, { useState } from 'react';
import {  Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/login";

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

   const submitHandler = async (ev) => {
         ev.preventDefault();

    
     if (!username.trim() || !password.trim()) { setError("Please enter your email and password.");
             return;
      }

     try {const response = await fetch(API_URL, {method: "POST",
                                                 headers: {"Content-Type": "application/json"},
                                                 body: JSON.stringify({email: username,password: password})});

      if (!response.ok) {const backendError = await response.text();

      console.error("Login failed:", {status: response.status,statusText: response.statusText, backendError});

      setError("Invalid email or password.");
          return;
      }

      const loginResponse = await response.json();

        console.log("Login successful:", loginResponse);

      setError("");

       navigate("/one-click-send-message");
      } 

     catch (error) {console.error("Login error:", error);
      
      setError("Unable to connect to the server. Please try again.");
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