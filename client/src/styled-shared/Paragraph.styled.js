import styled from "styled-components";

import {weight,fontSize} from "../constants/styleConstants";

export const Paragraph = styled.p`
    font-size:${fontSize.text};
    font-weight:${weight.medium};
    color:${props=>props.color||props.theme.colors.mutedLightColor};
`