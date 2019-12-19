import React from "react";
import cls from './navbar.module.sass';
import Nav from "./navbar-nav/navbar-nav";

const Navbar = () => {
    return (
        <nav className={cls.navibar + ' ' + 'd-flex align-items-center'}>
            <div className={cls.lang}>
                <a href="foo" className={cls['hvr-float-shadow']}>ru</a>
                <span>|</span>
                <a href="foo" className={`${cls['hvr-float-shadow']} ${cls['active-lang']}`}>en</a>
            </div>
            <Nav/>

        </nav>
    )
}

export default Navbar;



