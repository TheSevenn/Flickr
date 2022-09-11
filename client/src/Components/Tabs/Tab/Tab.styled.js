import styled from "styled-components";

import {fontSize,weight,gap,radius} from "../../../constants/styleConstants"

export const TabStyled = styled.button`
    font-size:${fontSize.text};
    font-weight:${weight.semiBold};
    color:${props=>props.active?props.theme.colors.mutedUiMajorColor:props.theme.colors.uiMajorColor};
    background-color:${props=>!props.active?"transparent":props.theme.colors.uiMajorColor};;
    margin:${gap.s};
    padding:${gap.m} ${gap.l};
    border-radius:${radius.light};
`