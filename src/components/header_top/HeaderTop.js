import React from 'react';
import '../header_top/headerTop.sass';
import Logo from "./logo/Logo";
import HeadText from "./headText/headText";

const HeaderTop = () => {
    return (

        <div className=" container-fluid header-top">
            <div className="row align-items-center">
                <div className="col-3 text-center">
                    <Logo/>
                </div>
                <div className="col-3 text-center">
                    <HeadText title={"Свяжись с нами"} link={"+7 926 9350513"} />
                </div>
                <div className="col-3 text-center">
                    <HeadText title={"Напиши нам"} mail={"office@bwgc.ru"} text={"pm@bwgc.ru"} />


                </div>
                <div className="col-3 text-center">

                </div>
            </div>
        </div>

    );
};

export default HeaderTop;