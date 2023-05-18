import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Post from "./Post";
import Profile from "./Profile";


const Routing =()=>{
    return(
        <BrowserRouter>
           <Header />
          
           <Route exact path="/" component={Home}/>
           <Route path="/post" component={Post}/>
           <Route path="/profile" component={Profile}/>
         
           <Footer />
        </BrowserRouter>
    )
}
export default Routing;