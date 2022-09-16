import React from "react";

import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Tabs from "../components/Tabs/Tabs";
import Category from "../components/Category/Category";
import { colors } from "../components/_shared.styled";

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Search />
            <Tabs />
            <Category category="Latest Movies"
                bgcolor={ colors.mutedBrandColor }
                color={ colors.brandColor } />

            <Category category="Latest TV Shows"
                bgcolor={ colors.mutedBrightColor }
                color={ colors.brightColor } />
        </React.Fragment>
    )
}