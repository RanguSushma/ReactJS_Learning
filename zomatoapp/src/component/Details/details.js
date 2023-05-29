import React, { Component } from "react";
import './details.css';

class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details:''
        }
    }
        render(){
            return (
                <>
                <div className="main">
                    <div className="titleImage">

                    </div>
                    <div className="titleContent">
                        <h3>Deatils</h3>
                    </div>
                </div>
                </>
            )
        }
}


export default Details;