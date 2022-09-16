import styled from "styled-components";

import { gap, colors, fontSize, weight, FlexCol } from "../_shared.styled";
export const HeroBackdrop = styled.section`
   background-image: url(https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgxMjk2NzkzNTI3NDIx/moonlight--cast-amp-crew-hometown-premiere-in-miami.webp),
    linear-gradient(90deg,${colors.themeColor},${colors.brightColor});
    background-repeat: no-repeat;
    background-position:center center;
    background-size: cover;
    margin:0 min(${gap.huge},6vw);
    isolation:isolate;
    /* padding: ${gap.xxl}; */
    height:30rem;
    mix-blend-mode: color-burn;
    `

export const HeroContainer = styled.div`
    position:relative;
    width: 100%;
    height:100%;
    ${FlexCol};
    align-items: flex-start;
    justify-content: center;
    padding:${gap.xxl};
    &::after{
        position: absolute;
        background-color:#000;
        content:"";
        inset:0;
        mix-blend-mode:color-dodge;
        z-index:-1;
    }

    & > h2{
            font-size: ${fontSize.title};
            color:${colors.brightColor};
            font-weight: ${weight.bold};
        }

    & > h3{
        font-size: ${fontSize.heading};
        color:${colors.brandColor};
        font-weight: ${weight.bold};
    }
    `