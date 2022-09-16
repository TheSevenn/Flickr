import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { FlexRow, FlexCol, gap, radius, fontSize, colors } from "../_shared.styled";

export const ModalContainer = styled.div`
  position:fixed;
  inset:0;
  ${FlexRow};
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(9px);
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  display: none;


  h3{
    color:${colors.brightColor};
    font-size:${fontSize.strong};
    margin-bottom: ${gap.l};
   }
`

export const ModalStyled = styled.div`
background-color:${colors.mutedBrightColor};
${FlexCol};
justify-content: center;
align-items: center;
padding: ${gap.l} max(${gap.m},3vw);
border-radius: ${radius.strong};
box-shadow:0 4px 4px #00000041;
position: relative;
color:${colors.brightColor};

input{
  background-color: ${colors.mutedBrightColor};
  border:1px solid ${colors.brightColor};
  margin:${gap.m} ${gap.s};
  width:min(80vw,35rem);
  padding:${gap.m} ${gap.m};
  border-radius:${radius.light};
  font-size:${fontSize.other};
  color:${colors.mutedBlackColor};

  &:hover{
    background-color: #ffffffaf;
  }

  &:focus,&:active{
    border-color: ${colors.altColor};
    filter:drop-shadow(2px 2px 4px ${colors.altColor});
    background-color: ${colors.mutedBrightColor};
   }
}
`

export const CancelIcon = styled( FaTimes )`
font-size:${fontSize.subheading};
position: absolute; 
right: 4%;
top: 4%;
cursor:pointer;
` 