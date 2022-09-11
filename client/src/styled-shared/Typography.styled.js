import styled from "styled-components";

import {weight,fontSize} from "../constants/styleConstants";


export const Strong = styled.strong`
font-size:${fontSize.strong};
    font-weight:${weight.semiBold};
    color:${props=>props.color||props.theme.colors.mutedLightColor};
`

export const Paragraph = styled.p`
    font-size:${fontSize.text};
    font-weight:${weight.medium};
    color:${props=>props.color||props.theme.colors.mutedLightColor};
`

export const Em = styled.em`
    font-size: ${fontSize.em};
    font-weight:${weight.medium};
    color:${props=>props.color||props.theme.colors.mutedLightColor};
`