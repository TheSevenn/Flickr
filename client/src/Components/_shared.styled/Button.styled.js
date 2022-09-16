import styled from "styled-components";

import { fontSize, weight, gap, radius, colors } from "./designConstants";

export const Button = styled.button`
font-size:${fontSize.strong};
color:${colors.altColor};
font-weight:${weight.semiBold};
margin:${gap.xs};
`

export const ButtonInverted = styled( Button )`
background-color:${colors.altColor};
color:${colors.themeColor};
border-radius:${radius.light};
padding:${gap.m} ${gap.l};

&:hover{
    box-shadow:1px 1px 4px rgba(0,0,0,0.7);
    transform:scale(0.99);
    opacity:0.9;
}
`
export const ButtonRound = styled( Button )`
height:6rem;
width:6rem;
border-radius: 50%;
background-color: ${colors.altColor};
color: ${colors.themeColor};
margin-top:${gap.l};
`