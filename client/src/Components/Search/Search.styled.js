import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { colors, gap, radius, fontSize, weight, FlexRow } from "../_shared.styled";

export const SearchBar = styled.div`
background-color: ${colors.mutedBrandColor};
    border-radius: ${radius.light};
    color:${colors.blackColor};
    font-weight:${weight.regular};
    ${FlexRow};
    align-items: center;
    width: min(60rem,80vw);
    margin: ${gap.xxl} auto;
    box-shadow: 0 4px 4px #0006;

    & input{
        padding:${gap.l};
        font-size:${fontSize.text};
        width: 100%;
    }
`

export const SearchIcon = styled( FaSearch )`
color:${colors.themeColor};
font-size: ${fontSize.strongAlt};
margin-left: ${gap.l};
margin-top:${gap.s};
`