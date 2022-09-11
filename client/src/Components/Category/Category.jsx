import React from "react";
import { fontSize } from "../../constants/styleConstants";

import { CategoryContainer } from "./Category.styled";
import { Subheading } from "../../styled-shared/Heading.styled";

export default function Category({topic,color,bgColor}){
    return (
            <CategoryContainer bgColor={bgColor} >
                <Subheading fontSize={fontSize.strong} color={color}>{topic}</Subheading>
            </CategoryContainer>
    )
}