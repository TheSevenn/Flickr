import styled from "styled-components";

import { Container } from "../../styled-shared/Contianer.styled";
import { gap } from "../../constants/styleConstants";

export const TabContainer = styled(Container)`
  margin: ${gap.xl} ${gap.ultra};
  overflow: auto;
  white-space: nowrap;
  padding-bottom:${gap.l};
`;
