import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <hr />
            <center><h3>&copy; Developer {props.year} {props.month}</h3></center>
        </div>
    )
}

export default Footer;