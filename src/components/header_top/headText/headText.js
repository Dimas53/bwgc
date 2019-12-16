import React from "react";
import '../headText/headText.sass';

const HeadText = (props) => {
    return (
        <div className="headText">
            <h6>{props.title}</h6>
            <p>
                <a href="foo" id="tel" className="headText_link">
                    {props.link}
                </a>
            </p>
            <p className="headText_link">
                {props.text}
            </p>
            <p className="headText_link">
                {props.mail}
            </p>
            { props.children }

        </div>
    )


};

export default HeadText;