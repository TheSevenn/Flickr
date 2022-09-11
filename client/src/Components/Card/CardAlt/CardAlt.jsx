import { CardAltStyled, ThumbnailAlt } from "./CardAlt.styled";
import { Em,Paragraph } from "../../../styled-shared/Typography.styled";

export default function CardAlt() {
    return (
        <CardAltStyled>
            <ThumbnailAlt src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/online_char_avengehonor_series_ironman_v1_lg_0.jpg" />

            <Paragraph color={props=>props.theme.colors.BlackColor}>Robert Downey Junior</Paragraph>
            <Em color={props=>props.theme.colors.mutedBlackColor}>as Tony Stark</Em>
        </CardAltStyled>
    )
}

