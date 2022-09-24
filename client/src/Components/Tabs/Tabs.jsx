import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Tab from "./Tab/Tab";
import { TabContainer } from "./Tabs.styled";
import { getContentByCategoryType, getTrending, getUpcoming } from "../../redux/features/content/contentSlice";
import { colors } from "../_shared.styled";

export default function Tabs() {
    const location = useLocation();

    function setActiveTab( location, path ) {
        if( location.pathname === path )
            return true
    }
    console.log( location.pathname );

    const dispatch = useDispatch();

    function handlePopular() {
        dispatch( getContentByCategoryType( "popular" ) );
    }

    function handleTopRated() {
        dispatch( getContentByCategoryType( "top_rated" ) );
    }

    function handleTrending() {
        dispatch( getTrending( "trending" ) );
    }

    function handleUpcoming() {
        dispatch( getUpcoming() );
    }

    return (
        <TabContainer>
            <Link to="/trending" onClick={handleTrending} style={setActiveTab( location, "/trending" ) && { backgroundColor: colors.mutedBrightColor }} >
                <Tab tab="Trending" />
            </Link>
            <Link to="/popular" onClick={handlePopular} style={setActiveTab( location, "/popular" ) && { backgroundColor: colors.mutedBrightColor }}>
                <Tab tab="Popular" />
            </Link>
            <Link to="/top_rated" onClick={handleTopRated} style={setActiveTab( location, "/top_rated" ) && { backgroundColor: colors.mutedBrightColor }}>
                <Tab tab="Top Rated" />
            </Link>

            <Link to="/upcoming" onClick={handleUpcoming} style={setActiveTab( location, "/upcoming" ) && { backgroundColor: colors.mutedBrightColor }}>
                <Tab tab="Upcoming" />
            </Link>
        </TabContainer>
    );
}
