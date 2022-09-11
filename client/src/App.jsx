import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styled-shared/Global.styled";
import {theme} from "./styled-shared/Theme";
import Header from "./Components/Header/Header";
import Pages from "./pages/";
import Footer from "./Components/Footer/Footer";

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyles/>
              <Header/>
                <Pages.Home/>
                <Footer/>
            </React.Fragment>
        </ThemeProvider>
    )
}