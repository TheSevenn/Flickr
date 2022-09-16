import styled from "styled-components";

import { gap } from "../_shared.styled";

export const TabContainer = styled.div`
  margin: ${gap.xl} min(${gap.ultra},8vw);
  overflow: auto;
  white-space: nowrap;
  padding-bottom:${gap.l};
`;
