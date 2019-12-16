import React from 'react'
import Banner from "../assets/Rectangle 2.png"

const Sample = () => {
    
    return (
        <div className="sample">
            <img className="sample_bg" src={Banner} alt="baner" />
            <container className="sample_container">
                <navbar className="sample_nav">
                    <logo>
                        design by Ds
                    </logo>
                    <burger>burger-menu</burger>
                    <burger>burger-menu</burger>
                    <burger>burger-menu</burger>
                </navbar>
            </container>
        </div>
    );
}

export default Sample;