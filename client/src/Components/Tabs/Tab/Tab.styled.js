import styled from "styled-components";

import { fontSize, weight, gap, radius, colors } from "../../_shared.styled";

export const TabStyled = styled.button`
    font-size:${fontSize.text};
    font-weight:${weight.semiBold};
    color:${props => props.active ? colors.mutedBrightColor : colors.brightColor};
    /* background-color:${props => !props.active ? "transparent" : colors.brightColor}; */
    margin:${gap.s};
    padding:${gap.m} ${gap.l};
    border-radius:${radius.light};
`