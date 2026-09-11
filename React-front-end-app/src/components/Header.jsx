
import Navbar from "./Navbar";

import logo from "../assets/images/CareConnect Logo.png"; 



function Header(){

 const navLinks=[
                  {name: "Home", path: "/"},
                  {name: "About", path: "/about"},
                  {name: "Login", path: "/login"},
                  {name: "Live Location", path:"/live-location"}
                ];

    return(

        <header>

            <div className= 'brand-section'>
               
               <img src={logo} alt= 'CareConnect logo' className='logo' />
            
               <h1> Care Connect</h1>
            
            </div>

            <Navbar links={navLinks}/>
           
        </header>

    );
}

export default Header;