import styled from "styled-components";
import { FaSearch, FaBookmark, FaHeart, FaTimes } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

import { colors, gap, radius, fontSize, weight, FlexRow } from "../_shared.styled/"

export const HeaderStyled = styled.header`
background-color: ${colors.themeColor};
padding:${gap.l} min(${gap.huge},3vw);
${FlexRow};
align-items: center;
justify-content: space-between;
`

export const SearchBar = styled.div`
background-color: ${colors.lightColor};
    border-radius: ${radius.light};
    color:${colors.blackColor};
    font-weight:${weight.regular};
    ${FlexRow};
    align-items: center;

    & input{
        padding:${gap.l};
        font-size:${fontSize.text};
        width: 45vw;
    }
`

export const UserStyled = styled.div`
 /* display:none; */
 background-color: transparent;
 ${FlexRow};
 align-items: center;

 &>div{
    margin-left: min(${gap.xxl},1vw);
 }
`

// icons styles 
export const SearchIcon = styled( FaSearch )`
color:${colors.themeColor};
font-size: ${fontSize.strongAlt};
margin-left: ${gap.l};
margin-top:${gap.s};
`

export const MenuIcon = styled( HiMenuAlt3 )`
color:${colors.brightColor};
cursor:pointer;
display: none;
font-size:${fontSize.heading};
margin-block: ${gap.s};
margin-left: ${gap.xl};
`
export const FavoriteIcon = styled( FaHeart )`
font-size:${fontSize.subheading};
cursor: pointer;
margin-block: ${gap.s};
margin-right: ${gap.xl};
color:${colors.lightColor};
filter: drop-shadow(0 2px 4px #0007);
`

export const BookmarkIcon = styled( FaBookmark )`
font-size:${fontSize.subheading};
cursor: pointer;
margin-block: ${gap.s};
margin-right: ${gap.xl};
color:${colors.lightColor};
filter: drop-shadow(0 2px 4px #0007);
`
export const CancelIcon = styled( FaTimes )`
color:${colors.brightColor};
cursor:pointer;
display: none;
font-size:${fontSize.heading};
margin-block: ${gap.s};
margin-left: ${gap.xl};
`