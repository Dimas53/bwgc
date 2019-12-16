import React from "react";
import '../social/social.sass';

const Social = () => {
    return (
        <ul className="d-flex justify-content-center">
            <li>
                <a href="foo" target="_blank"><span className="fab fa-facebook-f"/></a>
            </li>
            <li>
                <a href="foo" target="_blank"><span className="fab fa-twitter"/></a>
            </li>
            <li>
                <a href="foo" target="_blank"><span className="fab fa-linkedin"/></a>
            </li>
        </ul>
    )
}

export default Social;