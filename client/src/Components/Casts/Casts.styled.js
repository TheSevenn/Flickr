import styled from "styled-components";
import { gap, FlexRow, fontSize, colors, weight } from "../_shared.styled";

export const CastStyled = styled.div`
margin:${gap.l} min(${gap.huge},4vw);
margin-top:${gap.xxl};
   & > section {
    ${FlexRow};
    max-width:102rem;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: ${gap.xxl};
   }

   & > h2 {
    font-size:${fontSize.subheading};
    color:${colors.blackColor};
    margin:${gap.l};
    margin-top: ${gap.huge};
    font-weight: ${weight.semiBold};
   }

` 