import { CardLongStyled, ThumbnailLong,FlexWrap } from "./CardLong.styled";
import { Em, Paragraph,Strong } from "../../../styled-shared/Typography.styled";

export default function CardLong() {
    return (
        <CardLongStyled>
            <ThumbnailLong src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180" loading="lazy"/>
            <FlexWrap>
                <Strong color={props=>props.theme.colors.blackColor}>Season 1</Strong>
                <Em color={props=>props.theme.colors.mutedBlackColor}>2020 | 10 Episodes</Em>
                <Paragraph color={props=>props.theme.colors.mutedBlackColor}>Season 1 of Extracurricular premiered on April 29, 2020.</Paragraph>
            </FlexWrap>
        </CardLongStyled>
    )
}