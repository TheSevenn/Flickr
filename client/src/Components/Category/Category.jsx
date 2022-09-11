import React from "react";

import CardSmall from "../Card/CardSmall/CardSmall";
import { fontSize } from "../../constants/styleConstants";
import { CategoryContainer } from "./Category.styled";
import { Subheading } from "../../styled-shared/Heading.styled";

export default function Category({topic,color,bgColor}){
    return (
            <CategoryContainer bgColor={bgColor} >
                <Subheading fontSize={fontSize.strongAlt} color={color}>{topic}</Subheading>

                <CardSmall/>
            </CategoryContainer>
    )
}