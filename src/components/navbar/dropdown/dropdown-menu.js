import React from "react";
import '../dropdown/dropdown-menu.sass';

const DropdownMenu = (props) => {
    return (
        <li className="navibar_item" onClick={props.classToggler}>
            <a href="#" className="dropdown-toggle navibar_link">
                Divisions
            </a>
            <div className={props.classes}>
                <a className="dropdown-item" href="water.html">WATER SUPPLY</a>
                <a className="dropdown-item" href="wastewater.html">Wastewater engineering</a>
                <a className="dropdown-item" href="protection.html">Environmental Protection</a>
            </div>
        </li>
    )
};

export default DropdownMenu;