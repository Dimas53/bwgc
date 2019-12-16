import React from 'react';
import '../header_top/headerTop.sass';
import LogoTop from "./logo/Logo";
import HeadText from "./headText/headText";
import Social from "./social/social";


const HeaderTop = () => {
    return (

        <div className=" container-fluid header-top">
            <div className="row align-items-center">
                <div className="col-3 text-center">
                    <LogoTop/>
                </div>
                <div className="col-3 text-center">
                    <HeadText title={"Contact Us"} link={"+7 926 9350513"} />
                </div>
                <div className="col-3 text-center">
                    <HeadText title={"Email Us"} text={"pm@bwgc.ru"} mail={"office@bwgc.ru"} />
                </div>
                <div className="col-3 text-center">
                    <HeadText title={"Follow Us"}> <Social/> </HeadText>
                </div>
            </div>
        </div>

    );
};

export default HeaderTop;