import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./components/_shared.styled/";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Content from "./pages/content/Content";

export default function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <GlobalStyles />
                <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/movie/:_id" element={ <Content /> } />
                </Routes>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}