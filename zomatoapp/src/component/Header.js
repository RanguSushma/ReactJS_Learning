import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/userinfo";

const Header = (props) => {

    const [userData, setUserData] = useState()

    useEffect(() => {
        console.log(">>>>use effect")
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUserData(data)
            })
    }, [])

    const handleLogOut = () => {
        console.log(">>>>Loout")
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('ltk');
        sessionStorage.setItem('loginStatus','LoggedOut')
        setUserData('')
        props.history.push('/')
    }

    const conditionalHandler = () => {
        console.log(">>>>>>>>conditionalhandler")
        if (userData) {
            if (userData.name) {
                sessionStorage.setItem('userInfo', JSON.stringify(userData));
                sessionStorage.setItem('loginStatus', 'LoggedIn')
                return (
                    <>
                        <Link to="/register" className="btn btn-success"><span className="glyphicon glyphicon-user"> {userData.name}</span></Link> &nbsp;
                        <Link to="/login" className="btn btn-danger"><span className="glyphicon glyphicon-log-out" onClick={handleLogOut}> Logout</span></Link>
                    </>
                )
            } else {
                return (
                    <>
                        <Link to="/register" className="btn btn-success"><span className="glyphicon glyphicon-user"> SignUp</span></Link> &nbsp;
                        <Link to="/login" className="btn btn-danger"><span className="glyphicon glyphicon-log-out"> Logout</span></Link>
                    </>
                )
            }
        }
    }

    return (
        <header>
            <div id="head">
                Developer Funnel!&nbsp;
                <Link id="homebutton" type="button" class="btn btn-info" to="/">Home</Link>
            </div>
            <div id="social">
                {conditionalHandler()}
            </div>
        </header>
    )
}
export default withRouter(Header);