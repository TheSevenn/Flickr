import React from "react";

import { GlobalStyles } from "./components/_shared.styled/";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Content from "./pages/Content";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Header />
            <Home />
            <Content />
            <Footer />
        </React.Fragment>
    )
}