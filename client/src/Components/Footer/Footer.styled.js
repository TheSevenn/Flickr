import styled from "styled-components";

import { colors, FlexCol, fontSize, gap } from "../_shared.styled";

export const FooterStyled = styled.footer`
    background-color:${colors.themeColor};
    ${FlexCol};
    justify-content: center;
    align-items: center;
    gap:${gap.l};
  
    
    &>div{
        ${FlexCol};
        justify-content: center;
        align-items: center;
        width:min(80rem,80vw);
        gap:${gap.l};
        line-height: 1.4;
        margin-block: ${gap.xl};

        & a{
            color:${colors.altColor};
        }
    }
    p{
        font-size: ${fontSize.text};
        color:${colors.mutedLightColor}
    }

    &>p{
        color:${colors.mutedBrightColor};

        a{
            color:${colors.brightColor};
        }
    }

`