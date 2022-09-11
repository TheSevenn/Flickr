import styled from "styled-components";

import { gap,radius } from "../../../constants/styleConstants";

export const CardSmallStyled = styled.div`
  margin:${gap.xl} ${gap.s};
`

export const Thumbnail = styled.div`
background-image: url(https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg);
height:24rem;
width:16rem;
background-position: center;
background-size: cover;
border-radius:${radius.strong};
`