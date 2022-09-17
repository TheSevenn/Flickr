import styled from "styled-components";
import { FaBookmark, FaHeart, FaTimes } from "react-icons/fa";
// import { BsFillBookmarkFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

import { colors, gap, fontSize, weight, FlexRow, breakpoints, FlexCol } from "../_shared.styled/"

export const HeaderStyled = styled.header`
background-color: ${colors.themeColor};
padding:${gap.l} min(${gap.huge},3vw);
${FlexRow};
align-items: center;
justify-content: space-between;
`

export const UserStyled = styled.div`
 background-color: transparent;
 ${FlexRow};
 align-items: center;
 text-align: left;

 &>div{
    margin-left: min(${gap.xxl},1vw);
 }

 @media screen and (max-width:${breakpoints.tablet}){
    & {
    position: fixed;
    transition:right 400ms ease,opacity 300ms ease-out 300ms;
    opacity:0;
    top:0;
    right:-100%;
    background-color:#111e;
    backdrop-filter: blur(12px);
    ${FlexCol};
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    z-index:3;
    
    ${props => props.navStatus === true && { "right": "0", "opacity": "1" }};
    }

    & span {
        font-size:${fontSize.subheading};
        font-weight:${weight.semiBold};
        color:${colors.lightColor};
        margin-block:${gap.xl};
        transition: transform 350ms ease;

        &:hover,&:active,&:focus {
            transform: scale(1.2);
            background-color: transparent;
            color:${colors.mutedLightColor};
            box-shadow:none;
            cursor:pointer
        }
    }

    & button {
        background-color: transparent;
        color:${colors.lightColor};
        font-size: ${fontSize.subheading};
        font-weight: ${weight.semiBold};
        margin-block:${gap.xl};
        transition: transform 350ms ease;

        &:hover,&:active,&:focus {
            transform: scale(1.2);
            background-color: transparent;
            color:${colors.mutedLightColor};
            box-shadow:none;
        }
    }
 }
`

// icons styles 

export const MenuIcon = styled( HiMenuAlt3 )`
color:${colors.brightColor};
cursor:pointer;
display: none;
font-size:${fontSize.heading};
margin-block: ${gap.s};
margin-left: ${gap.xl};

@media screen and (max-width:${breakpoints.tablet}){
    & {
        display: initial;

        ${props => props.navStatus === true && { "display": "none" }}
    }
}
`
export const FavoriteIcon = styled( FaHeart )`
font-size:${fontSize.subheading};
cursor: pointer;
margin-block: ${gap.s};
margin-right: ${gap.xl};
color:${colors.lightColor};
filter: drop-shadow(0 2px 4px #0007);

@media screen and (max-width:${breakpoints.tablet}){
    &{
        display: none;
    }
}
`

export const BookmarkIcon = styled( FaBookmark )`
font-size:${fontSize.subheading};
cursor: pointer;
margin-block: ${gap.s};
margin-right: ${gap.xl};
color:${colors.lightColor};
filter: drop-shadow(0 2px 4px #0007);

@media screen and (max-width:${breakpoints.tablet}){
    &{
        display: none;
    }
}
`

export const CancelIcon = styled( FaTimes )`
color:${colors.brightColor};
cursor:pointer;
font-size:${fontSize.heading};
margin-block: ${gap.s};
margin-left: ${gap.xl};
opacity: 0;
position: absolute;
top:3rem;
right:3rem;

@media screen and (max-width:${breakpoints.tablet}){
    & {
       ${props => props.navactive === 1 ? { "opacity": "1" } : ""}
    }
}
`



// export const SearchBar = styled.div`
// background-color: ${colors.lightColor};
//     border-radius: ${radius.light};
//     color:${colors.blackColor};
//     font-weight:${weight.regular};
//     ${FlexRow};
//     align-items: center;

//     & input{
//         padding:${gap.l};
//         font-size:${fontSize.text};
//         width: 45vw;
//     }
//     `


// export const SearchIcon = styled( FaSearch )`
// color:${colors.themeColor};
// font-size: ${fontSize.strongAlt};
// margin-left: ${gap.l};
// margin-top:${gap.s};
// `