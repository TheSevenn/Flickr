import styled from "styled-components";

import {FlexCol} from "../../../styled-shared/Layouts/Flex.styled";
import {gap,radius} from "../../../constants/styleConstants";

export const CardAltStyled = styled.div`
width:18rem;
border-radius: 0.8rem;
${FlexCol};
box-shadow:0 8px 8px #0000001a;
margin:${gap.l};

p{
    margin-top:${gap.m};
    margin-bottom:${gap.s};
    margin-left:${gap.l}
}

em{
    margin-bottom: ${gap.l};
    margin-left:${gap.l};
}
`

export const ThumbnailAlt = styled.img`
border-top-left-radius:${radius.strong};
border-top-right-radius: ${radius.strong};
max-height:25rem;
`