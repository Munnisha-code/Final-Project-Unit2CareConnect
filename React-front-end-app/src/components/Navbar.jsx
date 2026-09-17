
import {  Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar({links}){

    const navigate = useNavigate();
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userId"));

    useEffect(() =>{setIsLoggedIn(!!localStorage.getItem("userId"));}, [location]);


    const handleLogout = () => { localStorage.removeItem("userId");

        setIsLoggedIn(false);

        navigate("/login");
    }

    return(

        <nav className= "navbar">

            {links.filter((link) => {
                 
                    if (link.name === "Live Location"){
                        return isLoggedIn;
                    }
                        return link.name !== "Login" && link.name !== "Logout";
                    })
                  .map((link) => ( <Link key={link.name} to={link.path}> {link.name} </Link> ))
            }

            {isLoggedIn  ? (

                <button type="button" onClick={handleLogout}> Logout </button>
            ) : (
                <Link to="/login">  Login </Link>
            )}
            
        </nav>
    );
}

export default Navbar;