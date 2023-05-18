import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Main from "./Main";
import Post from "./Post";
import Profile from "./Profile";


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route index element={<Home />} />
                <Route path="post" element={<Post/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;