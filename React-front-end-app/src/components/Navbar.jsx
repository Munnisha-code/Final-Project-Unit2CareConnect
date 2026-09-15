
import {  Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar({links}){

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userId"));


    const handleLogout = () => { localStorage.removeItem("userId");

        setIsLoggedIn(false);

        navigate("/login");
    }

    return(

        <nav className= "navbar">
            {links
                .filter((link) => link.name !== "Login" && link.name !== "Logout")
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