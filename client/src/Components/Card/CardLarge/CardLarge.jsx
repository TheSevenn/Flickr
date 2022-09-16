import { CardLargeStyled, ThumbnailLarge } from "./CardLarge.styled";

export default function CardLarge() {
    return (
        <CardLargeStyled>
            <ThumbnailLarge loading="lazy" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180" />
            <div>
                <h2>Season 1</h2>
                <h3>2020 | 10 Episodes</h3>
                <p>
                    Season 1 of Extracurricular premiered on April 29, 2020.
                    Season 1 of Extracurricular premiered on April 29, 2020.
                    Season 1 of Extracurricular premiered on April 29, 2020.
                </p>
            </div>
        </CardLargeStyled>
    )
}