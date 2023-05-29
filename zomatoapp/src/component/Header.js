import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header> 
            <div id="head">
              Developer Funnel!
              <Link id="homebutton"type="button" class="btn btn-info" to="/">Home</Link>
            </div>
            <div id="social">
                <a href="/#"> <img src="https://i.ibb.co/mcTXBsd/facebook.png" alt="facebook" className="socialIcon"/></a> 
                <a href="/#"><img src="https://i.ibb.co/8Xr8bZK/insta.png" alt="instagram" className="socialIcon"/></a>
                <a href="/#"><img src="https://i.ibb.co/5BsMdPy/youtube1.png" alt="youtube" className="socialIcon"/></a>
            </div>
        </header>
    )
}
export default Header;