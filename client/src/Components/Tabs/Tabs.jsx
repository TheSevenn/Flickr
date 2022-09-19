import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Tab from "./Tab/Tab";
import { TabContainer } from "./Tabs.styled";
import { getContentByCategoryType, getTrending, getUpcoming } from "../../redux/features/content/contentSlice";

export default function Tabs() {
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
            <Link to="/trending" onClick={handleTrending}>
                <Tab tab="Trending" />
            </Link>
            <Link to="/popular" onClick={handlePopular}>
                <Tab tab="Popular" />
            </Link>
            <Link to="/top_rated" onClick={handleTopRated}>
                <Tab tab="Top Rated" />
            </Link>

            <Link to="/upcoming" onClick={handleUpcoming}>
                <Tab tab="Upcoming" />
            </Link>

        </TabContainer>
    );
}
