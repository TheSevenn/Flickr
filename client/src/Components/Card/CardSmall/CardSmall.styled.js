import styled from "styled-components";

import { colors, fontSize, gap, radius, weight } from "../../_shared.styled";

export const CardSmallStyled = styled.div`
  /* margin-left: ${gap.s};
  margin-right: ${gap.l};
  margin-bottom: ${gap.xl}; */

  h3{
    color:${colors.blackColor};
    font-size: ${fontSize.text};
    padding-top: ${gap.s};
    padding-left:${gap.s};
    font-weight: ${weight.semiBold};
    max-width:14rem;
  }

  h4{
    font-size: ${fontSize.em};
    color:${colors.mutedBlackColor};
    padding-left:${gap.s};
    padding-right: ${gap.s};
    font-weight: ${weight.medium};
    max-width:14rem;
    
    span{
      padding-right: ${gap.s};
    }
  }
`

export const Thumbnail = styled.img`
/* height: 22rem; */
width: 15rem;
border-radius: ${radius.strong};
`