import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login";
import Header from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import Profile from "./profile";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing 