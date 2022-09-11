import styled from "styled-components";

import {FlexRow} from "../../styled-shared/Layouts/Flex.styled";
import {gap} from "../../constants/styleConstants";

export const FooterStyled = styled.footer`
    background-color:${({theme})=>theme.colors.themeColor};
    padding:${gap.xxl};
    ${FlexRow};

    p{
        margin-left:${gap.xl}
    }

`