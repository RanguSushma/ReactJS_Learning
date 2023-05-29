import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer>
        <hr/>
       <h5>&copy; Developer Funnel</h5>
        <div className="footdiv noBoarder">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className="footdiv">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className="footdiv">
            <ul>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer;