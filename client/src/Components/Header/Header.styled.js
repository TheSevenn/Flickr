import styled from "styled-components";

import {gap} from "../../constants/styleConstants";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.themeColor};
  padding: ${gap.l} ${gap.huge};

  & input {
    background-color: ${({ theme }) => theme.colors.lightColor};
    padding: ${({ theme: { gap } }) => gap.m} ${({ theme: { gap } }) => gap.l};
    border-radius: ${({theme})=>theme.radius.light};
    color:${({theme:{colors}})=>colors.blackColor};
    font-size:${({theme})=>theme.fontSize.text};
    font-weight:${({theme})=>theme.weight.regular};
    width:min(56rem,70vw);
  }
  position:sticky ;
    top:0 ;
    z-index:1;
`;
