import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaHeart, FaPlay } from "react-icons/fa";

import {
    FlexRow, radius, gap, FlexCol,
    fontSize, colors, weight, breakpoints
} from "../_shared.styled";

export const Backdrop = styled.section`
   background-image: url(${props => props.backdrop});
   background-size:cover;
   background-repeat: no-repeat;
   background-position:top;
   isolation: isolate; 

   @media screen and (max-width:${breakpoints.tablet}){
    &{
        background-size: contain;
        width:100%;
    }
   }
`
export const OverviewStyled = styled.div`
    width: 100%;
    position: relative;
    background-color: rgba(0,20,20,0.7);
    backdrop-filter: blur(0px);
    ${FlexRow};
    align-items: center;
    padding:3vw;
    padding-left: 5vw;

    @media screen and (max-width:${breakpoints.tablet}) {
        & {
        padding-block: 10vw;
        backdrop-filter: blur(2px);
        background-color: rgba(0,20,20,0.7);
        }
    }
    
    & > div {
    ${FlexRow};
    align-items: center;
    justify-content: flex-start;
    gap:${gap.xl};

    @media screen and (max-width:${breakpoints.tablet}) {
        &{
            flex-direction: column;
            align-items: flex-start;
        }
    }
   }

&::after{
    position: absolute;
    inset:0;
    content: "";
    mix-blend-mode:multiply;
    background-image: linear-gradient(to top,rgba(255,20,20,1),rgba(255,20,20,0.5));
    z-index: -1;

    @media screen and (max-width:${breakpoints.medium}){
        &{
            background-image: linear-gradient(to top,rgba(255,20,20,1),rgba(255,20,20,0.5));
        }
    }
}
`

export const ContentOverview = styled.div`
  ${FlexCol};

  & > div {
    margin-bottom:${gap.l};
  }

  /* content rating,genre,duration */
  & > div > em {
    font-size: ${fontSize.textAlt};
    color:${colors.mutedBrightColor};
    text-transform: capitalize;
    display: inline-block;
    margin-right: ${gap.l};
  }

  /* watch Trailer */
& > div > span::after {
    position: relative;
    content: "Watch Trailer";
    color:${colors.mutedLightColor};
    font-size: ${fontSize.text};
    padding:${gap.m};
    top:-0.5rem;
}

/* streaming on and status*/
  & > p{
    font-size: ${fontSize.text};
    color:${colors.mutedBrandColor};
    font-weight:${weight.regular};
    margin-block: ${gap.l};
    text-transform: capitalize;
 }

/* overview paragraph */
 & > div {
    h3{
        font-size: ${fontSize.textAlt};
        color: ${colors.mutedBrandColor};
        font-weight: ${weight.bold};
        margin-bottom: ${gap.s};
    }

    p{
        font-size:${fontSize.text};
        color:${colors.lightColor};
        font-weight: ${weight.regular};
        margin-right: 2vw;
        max-width:55ch;
    }
 }

 /* number of seasons */
 & > h4{
    font-size: ${fontSize.text};
    font-weight: ${weight.regular};
    color:${colors.mutedBrandColor};
    display: inline-block;
 }
`
export const Title = styled.h1`
font-size: ${fontSize.title};
color: ${colors.lightColor};
font-weight: ${weight.bold};

@media screen and (max-width:${breakpoints.mobile}) {
    &{
        font-size: ${fontSize.heading};
    }
}
`

export const Tagline = styled.em`
font-size:${fontSize.text};
color:${colors.mutedLightColor};
font-weight: ${weight.medium};
margin-top:${gap.m};
`

export const Thumbnail = styled.img`
width: min(30rem,50vw);
border-radius: ${radius.strong};
box-shadow: 0px 4px 8px #000a;
`

// icons styled

export const WatchListIcon = styled( BsFillBookmarkFill )`
    color:${colors.mutedLightColor};
    font-size:${fontSize.subheading} ;
    margin-right: ${gap.l};
    cursor: pointer;
    `

export const FavoriteIcon = styled( FaHeart )`
    color:${colors.mutedBrightColor};
    font-size:${fontSize.subheading} ;
    margin-right: ${gap.l};
    cursor: pointer;
    `

export const WatchTrailerIcon = styled( FaPlay )`
    color:${colors.altColor};
    font-size:${fontSize.subheading} ;
    margin-left: ${gap.xl};
    cursor: pointer;

    @media screen and (max-width:${breakpoints.mobile}) {
        margin-left: ${gap.xs};
    }
    `