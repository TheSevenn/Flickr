import styled from "styled-components";

import { colors, fontSize, gap } from "../../components/_shared.styled";

export const SeasonsStyled = styled.section`

padding-left:min(4vw,${gap.ultra});
  &>h2{
      font-size:${fontSize.subheading};
      color: ${colors.mutedBlackColor};
      margin-block: ${gap.huge};
      margin-block-end:${gap.xxl};
      margin-left: ${gap.l};
  }
`