import styled from "styled-components";

import { Container } from "../../styled-shared/Contianer.styled";
import {gap} from "../../constants/styleConstants";

export const HeroContainer = styled(Container)`
    background-image:linear-gradient(90deg,${props=>props.theme.colors.themeColor},${props=>props.theme.colors.uiMajorColor});
    margin:0 ${gap.huge};
    position:relative;
    isolation:isolate;
    padding:  ${gap.xxl};

    &::after{
        position:absolute;
        content:"";
        inset:0;
        background-color:#134E6F;
        mix-blend-mode:overlay;
        z-index:-1;
    }
`