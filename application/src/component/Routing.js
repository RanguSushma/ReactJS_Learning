import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Post from "./npm";
import Profile from "./Profile";
import PostDetail from "./PostDetails";


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route path='/post/:topic'component={PostDetail}/>
            <Route path="/profile" component={Profile} />
            </div>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;