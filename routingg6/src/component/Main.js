import React from "react";
import {Outlet} from "react-router-dom";

const Main = () =>{
    return(
        <div className="container">
        <div className="card">
            <Outlet/>
        </div>
        </div>

    )
}
export default Main