import styled from "styled-components";

import { Container } from "../../styled-shared/Contianer.styled";
import {gap,radius} from "../../constants/styleConstants";

export const CategoryContainer = styled(Container)`
  background-color:${props=>props.bgColor};
  margin:${gap.xl} ${gap.huge};
  border-radius:${radius.strong};
  padding:${gap.xl};
  padding-left:${gap.xl};

`;
