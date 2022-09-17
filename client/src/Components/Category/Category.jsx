import React from "react";
import { Link } from "react-router-dom";

import CardSmall from "../Card/CardSmall/CardSmall";
import { CategoryContainer } from "./Category.styled";

export default function Category( { category, color, bgcolor } ) {
    return (
        <CategoryContainer bgcolor={ bgcolor } color={ color }>
            <h3>{ category }</h3>
            <div>
                <Link to={ "/movie/" + 90 }><CardSmall /></Link>
                <Link to="/movie/90"><CardSmall /></Link>
                <Link to="/movie/78"><CardSmall /></Link>
            </div>
        </CategoryContainer>
    )
}