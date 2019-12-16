import React from 'react';
import HeaderTop from '../header_top/HeaderTop';
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <div className="header">
            <HeaderTop />
            <Navbar/>
        </div>
    );
}

export default Header;