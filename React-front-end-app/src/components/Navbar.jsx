
import {  Link } from "react-router-dom";


function Navbar({links}){
    return(

        <nav className= "navbar">
            {links.map((link) => (
             <Link key= {link.name} to={link.path}>
                {link.name}
             </Link> 
             ))}
        </nav>
    );
}

export default Navbar;