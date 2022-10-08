import styled from "styled-components";

import { gap, radius } from "../_shared.styled";

export const TabContainer = styled.div`
  margin: ${gap.xl} min(${gap.ultra},8vw);
  overflow: auto;
  white-space: nowrap;
  padding-bottom:${gap.l};

  & a{
    padding:${gap.l} ${gap.m};
    border-radius: ${radius.light};
  }
`;
