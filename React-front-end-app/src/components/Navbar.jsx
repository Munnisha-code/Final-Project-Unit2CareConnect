
import {  Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar({links}){

    const navigate = useNavigate();
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userId"));
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() =>{setIsLoggedIn(!!localStorage.getItem("userId"));}, [location]);


    const handleLogout = () => { localStorage.removeItem("userId");

        setIsLoggedIn(false);

        navigate("/login");
    }

    return(

        <nav className= "navbar">

            <button type="button" className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>

        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>

            {links.filter((link) => {
                 
                    if (link.name === "Live Location"){
                        return isLoggedIn;
                    }
                        return link.name !== "Login" && link.name !== "Logout";
                    })
                  .map((link) => ( <Link key={link.name} to={link.path}> {link.name} </Link> ))
            }

            {isLoggedIn  ? (

                <button className="logout-button" type="button" onClick={handleLogout}> Logout </button>
            ) : (
                <Link to="/login">  Login </Link>
            )}

          </div>  

        </nav>

    );
}

export default Navbar;
