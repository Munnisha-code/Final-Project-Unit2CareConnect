
import React, { useState } from 'react';
import './Pages.css';
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8080/api/users/register";

function RegisterForm(){

    const navigate = useNavigate();

    const [ data, setData] = useState({firstName: '',lastName: '',mobileNumber:'', email:'', password:'', confirmPassword:'' });

    const {firstName, lastName, mobileNumber, email, password, confirmPassword} = data;

    const changeHandler = ev => {
         setData({...data, [ev.target.name]: ev.target.value});
    }
    
    const submitHandler = async (ev) => {
         ev.preventDefault();

    if (!firstName.trim() || !lastName.trim() 
                          || !mobileNumber.trim() 
                          || !email.trim() 
                          || !password.trim() 
                          || !confirmPassword.trim()) {

    alert("Please fill in all Provided registration details.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password must match.");
    return;
  }

  try {const response = await fetch(API_URL, { method: "POST",
                                               headers: {"Content-Type": "application/json"}, 
                                               body: JSON.stringify({firstName, 
                                                                     lastName,
                                                                     mobileNumber, 
                                                                     email, password })});

    if (!response.ok) { const backendError = await response.text();

      console.error("Registration failed:", {
        status: response.status,
        statusText: response.statusText,
        backendError});

      throw new Error(`Registration failed. Status: ${response.status}`);
    }

    const registeredUser = await response.json();

    console.log("User registered successfully:", registeredUser);

    navigate("/trusted-contacts");
  } 
   catch (error) {
    console.error("Registration error:", error);
    alert(error.message);
  }
         
          
    }


    return(
        <div className='register-container'>
            <h3 className='register-title'> Register Form</h3>

            <form  className='register-form' onSubmit = {submitHandler}>

                <label> First Name: </label>
                <input type ='text' name = 'firstName' value = {firstName} onChange ={changeHandler} /> <br />

                <label> Last Name: </label>
                <input type ='text' name = 'lastName' value = {lastName}  onChange ={changeHandler} /> <br />

                <label> Mobile Number: </label>
                <input type ='tel' id ='mobileNumber' name = 'mobileNumber' value = {mobileNumber} onChange ={changeHandler} /> <br />

                <label> Email : </label>
                <input type ='email' name = 'email' value = {email} onChange ={changeHandler} /> <br />

                <label> Password: </label>
                <input type ='password' name = 'password' value = {password} onChange ={changeHandler} /> <br />

                <label> Confirm Password: </label>
                <input type ='confirmPassword' name = 'confirmPassword' value = {confirmPassword} onChange ={changeHandler} /> <br /> <br />

                <button className='register-button' type = 'submit'> Register </button> <br /> <br />

            </form>

        </div>
    );
}

export default RegisterForm;