import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Developer Funnel</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header