import React from "react";
import { Route, Routes, Switch } from "react-router";
import Home from "./Home";
import Contacts from "./Contacts";
import Cosmetics from "./Cosmetics";
import Price from "./Price";
import Reviews from "./Reviews";
import Masters from "./Masters";


const Main = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />}/>
            <Route path="/masters" element={<Masters />}/>
            <Route path="/cosmetics" element={<Cosmetics />}/>
            <Route path="/price" element={<Price />}/>
            <Route path="/reviews" element={<Reviews />}/>
            <Route path="/contacts" element={<Contacts />}/>
        </Routes>
    )
}

export default Main;