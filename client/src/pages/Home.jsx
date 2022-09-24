import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Tabs from "../components/Tabs/Tabs";
import Category from "../components/Category/Category";

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Search />
            <Tabs />
            <Routes>
                <Route element={<Category category="Trending" />}>
                    <Route path="/" element={<Category category="Trending" />} />
                    <Route path="/trending" />
                </Route>
                <Route path="/popular" element={<Category category="Popular" />} />
                <Route path="/top_rated" element={<Category category="Top Rated" />} />
                <Route path="/upcoming" element={<Category category="Upcoming" />} />
                <Route path="/discover/" element={<Category category="Discover" />} />
            </Routes>
        </React.Fragment>
    )
}