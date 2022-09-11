import styled from "styled-components";

import {gap} from "../../constants/styleConstants";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
`;

export const FlexAlt = styled(Flex)`
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding:${gap.m};
`

export const FlexRow = {
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center"
}
export const FlexCol = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
}
