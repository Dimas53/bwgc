import React from "react";
import '../navbar-nav/navbar-nav.sass';

const Nav = () => {
    return (
        <div className="d-flex flex-grow-1 justify-content-center">
            <ul className="navibar_nav d-flex">
                <li className="navibar_item"><a href="foo">Home</a></li>
                <li className="navibar_item"><a href="foo">About</a></li>
                <li className="navibar_item"><a href="foo">Services</a></li>
                <li className="navibar_item"><a href="foo">Divisions</a></li>
                <li className="navibar_item"><a href="foo">Contact</a></li>
            </ul>
        </div>

    )
}

export default Nav;