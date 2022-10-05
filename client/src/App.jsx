import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./components/_shared.styled/";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Content from "./pages/content/Content";
import Seasons from "./pages/Seasons/Seasons";

export default function App() {

    return (
        <React.Fragment>
            <GlobalStyles />
            <Header />
            <section style={{ marginBottom: "auto" }}>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    {/* <Route index element={<Home />} /> */}
                    <Route path="/movie/:_id/:key" element={<Content />} />
                    <Route path="/tv/:_id/:key" element={<Content />} />
                    <Route path="/tv/:_id/:key/seasons" element={<Seasons />} />
                </Routes>
            </section>
            <Footer />
        </React.Fragment>

    )
}