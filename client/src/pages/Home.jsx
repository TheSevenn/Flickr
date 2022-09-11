import React from "react";

import Hero from "../Components/Hero/Hero";
import Tabs from "../Components/Tabs/Tabs";
import Category from "../Components/Category/Category";

import Modal from "../Components/Modal/Modal";
import CardLong from "../Components/Card/CardLong/CardLong";

export default function Home(){
    return (
        <React.Fragment>
        <Hero/>
        <Tabs/>
        <Category 
        topic="Latest Movies" 
        color={props=>props.theme.colors.brandSecondaryColor}
        bgColor={props=>props.theme.colors.mutedBrandSecondaryColor}
         />

        <Category
        topic="Latest TV Shows"
        color={props=>props.theme.colors.uiMajorColor}
        bgColor={props=>props.theme.colors.mutedUiMajorColor}
         />

         {/* temprary component render start here . remove later */}
         <CardLong/>
         {/*  temp. comp. ends year */}
         <Modal/>
        </React.Fragment>
    )
}