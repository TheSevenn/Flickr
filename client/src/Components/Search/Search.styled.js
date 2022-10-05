import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiTv, BiMovie } from "react-icons/bi";

import { colors, gap, radius, fontSize, weight, FlexRow } from "../_shared.styled";


export const SearchStyled = styled.section`
position: relative;
`
export const SearchBar = styled.div`
background-color: #fff;
    border-radius: ${radius.light};
    color:${colors.blackColor};
    font-weight:${weight.regular};
    ${FlexRow};
    align-items: center;
    width: min(70rem,80vw);
    margin: ${gap.xxl} auto;
    box-shadow: 0 4px 4px #0006;

    & input{
        padding:${gap.l};
        font-size:${fontSize.text};
        width: 100%;
    }
`

export const SearchResults = styled.article`
   position:absolute;
   background-color: #fff;
   top:6rem;
   left:50%;
   width: min(70rem,80vw);
   transform: translateX(-50%);
   border-radius: ${radius.light};
   box-shadow: 0 2px 4px #0003;
   max-height:70vh;
   overflow-y: scroll;

   & section{
    margin-inline:min(2vw,${gap.l}); 
    margin-block:${gap.l};
    ${FlexRow};
    align-items: center;
    border-bottom: 1px solid #ccc8;


    div{
        h4{
            font-size: ${fontSize.text};
            font-weight:${weight.medium};
            color: ${colors.blackColor};
        }
        p{
            color:${colors.mutedBlackColor};
            font-size: ${fontSize.em};
            font-weight: ${weight.regular};
            display: inline;
            margin-bottom: ${gap.l};
        }
    }

    &:hover{
        background-color:#ccc3;
    }

    img{
        height:7rem;
        width:5rem;
        background-color:#ccc3;
        margin-inline-end: ${gap.m};
    }
   }

`
// styled icons 

export const SearchIcon = styled( FaSearch )`
color:${colors.themeColor};
font-size: ${fontSize.strongAlt};
margin-right: ${gap.l};
margin-top:${gap.s};
`

export const MovieIcon = styled( BiMovie )`
color:${colors.mutedBlackColor};
font-size: ${fontSize.strong};
margin-inline: ${gap.m};
margin-top: ${gap.m};
`

export const TvIcon = styled( BiTv )`
color:${colors.mutedBlackColor};
font-size: ${fontSize.strong};
margin-inline: ${gap.m};
margin-top: ${gap.l};
`