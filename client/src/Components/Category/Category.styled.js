import styled from "styled-components";

import { fontSize, gap, radius, weight } from "../_shared.styled";

export const CategoryContainer = styled.div`
  background-color:${props => props.bgcolor};
  margin:${gap.xl} min(4vw,${gap.huge});
  border-radius:${radius.strong};
  padding:${gap.xl};
  min-width: auto;

  & > h3 {
    font-size: ${fontSize.subheading};
    font-weight: ${weight.bold};
    color:${props => props.color};
    margin-bottom: ${gap.l};
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${gap.xl};
  }
`;
