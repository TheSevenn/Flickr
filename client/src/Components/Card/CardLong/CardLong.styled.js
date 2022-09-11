import styled from "styled-components";

import { FlexRow,FlexAlt } from "../../../styled-shared/Layouts/Flex.styled";
import { radius, gap } from "../../../constants/styleConstants";

export const CardLongStyled = styled.div`
   ${FlexRow};
   justify-content: flex-start;
   width:min(100rem,90vw);
   border-radius: ${radius.strong};
   margin:${gap.l};
   box-shadow:4px 8px 8px #0000001a,
              0 -1px 4px #0000001a;

   em{
    font-style: normal;
   }
`

export const ThumbnailLong = styled.img`
max-height:18rem;
border-top-left-radius:${radius.strong};
border-bottom-left-radius:${radius.strong};
`


// margin are added as per required - FlexWrap extends FlexAlt and adds margin
export const FlexWrap = styled(FlexAlt)`
strong,p{
    margin:${gap.m};
}
em{
    margin-bottom: ${gap.m};
    margin-left: ${gap.m};
}
`