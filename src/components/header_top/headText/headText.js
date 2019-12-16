import React from "react";
import '../headText/headText.sass';

const HeadText = (props) => {
    return (
        <div className="headText">
            <h6>{props.title}</h6>
            <p>
                <a href="#" id="" className="headText_link">
                    {props.link}
                </a>
            </p>
            <p className="headText_link">
                {props.text}
            </p>
            <p className="headText_link">
                {props.mail}
            </p>

        </div>
    )


};

export default HeadText;