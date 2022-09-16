import React from "react";

import CardSmall from "../Card/CardSmall/CardSmall";
import { CategoryContainer } from "./Category.styled";

export default function Category( { category, color, bgcolor } ) {
    return (
        <CategoryContainer bgcolor={ bgcolor } color={ color }>
            <h3>{ category }</h3>
            <div>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </div>
        </CategoryContainer>
    )
}