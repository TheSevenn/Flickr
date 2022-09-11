import styled from "styled-components";
import { fontSize,weight,gap,radius } from "../constants/styleConstants";


export const Button = styled.button`
font-size:${fontSize.strong};
color:${props=>props.theme.colors.alternateColor};
font-weight:${weight.semiBold};
margin:${gap.xs};
`
export const ButtonInverted = styled(Button)`
background-color:${props=>props.theme.colors.alternateColor};
color:${props=>props.theme.colors.themeColor};
border-radius:${radius.light};
padding:${gap.m} ${gap.l};

&:hover{
    box-shadow:1px 1px 4px rgba(0,0,0,0.7);
    transform:scale(0.99);
    opacity:0.9;
}
`

export const ButtonRound = styled(Button)`
height:6rem;
width:6rem;
border-radius: 50%;
background-color: ${props=>props.theme.colors.alternateColor};
color: ${props=>props.theme.colors.themeColor};
margin-top:${gap.l};
`
