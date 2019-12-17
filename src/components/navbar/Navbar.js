import React from "react";
import '../navbar/navbar.sass';
import Nav from "./navbar-nav/navbar-nav";

const Navbar = () => {
    return (
        <nav className="navibar d-flex align-items-center">
            <div className="lang">
                <a href="foo" className="hvr-float-shadow hvr-grow">ru</a>
                <span>|</span>
                <a href="foo" className="hvr-float-shadow hvr-grow active-lang">en</a>
            </div>
            <Nav/>

        </nav>
    )
}

export default Navbar;