import styled from "styled-components";

import { FlexRow,FlexCol } from "../../styled-shared/Layouts/Flex.styled";
import {gap,radius,fontSize} from "../../constants/styleConstants";

export const ModalContainer = styled.div`
  position:fixed;
  inset:0;
  ${FlexRow};
  backdrop-filter: blur(9px);
  background-color: rgba(0,0,0,0.89);
  z-index: 1;
  display: none;

  h3{
    margin-bottom: ${gap.l};
   }
`;

export const ModalStyled = styled.div`
background-color:${props=>props.theme.colors.mutedUiMajorColor};
${FlexCol};
align-items: center;
padding: ${gap.l} max(${gap.m},3vw);
border-radius: ${radius.strong};
box-shadow:4px 4px 6px #000000f1;
position: relative;
color:${props=>props.theme.colors.uiMajorColor};

input{
  background-color: ${props=>props.theme.colors.mutedUiMajorColor};
  /* color:${props=>props.theme.colors.blackColor}; */
  border:1px solid ${props=>props.theme.colors.uiMajorColor};
  margin:${gap.m} ${gap.s};
  width:min(80vw,35rem);
  padding:${gap.m} ${gap.m};
  border-radius:${radius.light};
  font-size:${fontSize.other};
  color:${props=>props.theme.colors.mutedBlackColor};

  &:hover{
    background-color: #ffffffaf;
  }

  &:focus,&:active{
    border-color: ${props=>props.theme.colors.alternateColor};
    filter:drop-shadow(2px 2px 4px ${props=>props.theme.colors.alternateColor});
    background-color: ${props=>props.theme.colors.mutedUiMajorColor};
   }
}
`;
