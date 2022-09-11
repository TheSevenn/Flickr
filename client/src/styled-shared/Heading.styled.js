import styled from "styled-components";

import { weight, fontSize } from "../constants/styleConstants";

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || fontSize.title};
  font-weight: ${weight.semiBold};
  color: ${(props) => props.color || props.theme.colors.lightColor};
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.fontSize || fontSize.heading};
  font-weight: ${weight.semiBold};
  color: ${(props) => props.color || props.theme.colors.lightColor};
`;

export const Subheading = styled.h3`
  font-size: ${(props) => props.fontSize || fontSize.subheading};
  font-weight: ${weight.subheading};
  color: ${(props) => props.color || props.theme.colors.lightColor};
`;
