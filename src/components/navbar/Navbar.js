import React from "react";
import '../navbar/navbar.sass';
import Nav from "./navbar-nav/navbar-nav";

const Navbar = () => {
    return (
        <nav className="navibar d-flex align-items-center">
            <div className="lang">en | ru</div>
            <Nav/>

        </nav>
    )
}

export default Navbar;