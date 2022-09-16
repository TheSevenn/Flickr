import styled from "styled-components";
import { gap } from "./designConstants";

export const LogoStyled = styled.img`
    height:${props => props.size || "4rem"};
    width:${props => props.size || "4rem"};
    margin:${gap.s};
`

export const BrandStyled = styled.img`
    width:6rem;
    height:6rem;
`