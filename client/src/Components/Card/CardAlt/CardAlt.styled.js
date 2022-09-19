import styled from "styled-components";

import { colors, FlexCol, fontSize, gap, radius, weight } from "../../_shared.styled";

export const CardAltStyled = styled.div`
max-width:15rem;
border-radius: 0.8rem;
${FlexCol};
box-shadow: 0 8px 8px #0000001a;
margin:${gap.l};

 & > h3{
   margin-top: ${gap.m};
   margin-bottom: ${gap.s};
   margin-left: ${gap.l};
   font-size: ${fontSize.text};
   color: ${colors.blackColor};
   font-weight: ${weight.semiBold};
}

& > h4 {
   margin-bottom: ${gap.l};
   margin-left: ${gap.l};
   font-size: ${fontSize.em};
   color: ${colors.mutedBlackColor};
   font-weight: ${weight.regular};
}
`

export const ThumbnailAlt = styled.img`
border-top-left-radius:${radius.strong};
border-top-right-radius: ${radius.strong};
max-height:25rem;
aspect-ratio: 10/14;
`