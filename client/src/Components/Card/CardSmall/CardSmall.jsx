import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";
import { Em, Strong } from "../../../styled-shared/Typography.styled";
import { FlexAlt } from "../../../styled-shared/Layouts/Flex.styled";

export default function CardSmall() {

    const genre = "Fantasy";
    const year = "2018";
    return (
        <CardSmallStyled>
            <Thumbnail></Thumbnail>
            <FlexAlt>
                <Strong color={props => props.theme.colors.themeColor}>Aladin</Strong>
                <Em color={props => props.theme.colors.mutedBlackColor}>{genre}    -{year}</Em>
            </FlexAlt>
        </CardSmallStyled>
    )
}