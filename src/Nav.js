import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect( () => { 
    
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else{
             handleShow(false);
            }
            });
            return () => {
               window.removeEventListener("scroll");
           };
        }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Logo.png"
            alt="Netflix Logo"
            />
 <img
            className="nav__avatar"
            src="https://www.kindpng.com/picc/m/105-1055561_gaming-logo-avatar-png-transparent-png.png"
            alt="Netflix Logo"
            />

        </div>
    )
}

export default Nav