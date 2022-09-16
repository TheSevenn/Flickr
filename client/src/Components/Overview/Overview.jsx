import {
    Backdrop, OverviewStyled,
    ContentOverview, Thumbnail,
    AddtoWatchListIcon, InWatchListIcon,
    FavoriteIcon, WatchTrailerIcon,
    Title, Tagline
} from "./Overview.styled";

export default function Overview() {
    const platform = "Netflix";
    const status = "ended";
    return (
        <Backdrop>
            <OverviewStyled>
                <div>
                    <Thumbnail src="https://img.fruugo.com/product/9/75/101193759_max.jpg" loading="lazy" />
                    <ContentOverview>
                        <Title>Extracurricular ({ 2020 })</Title>
                        <div>
                            <em>UA</em>
                            <em>Crime,Drama</em>
                            <em>&#8226;  55m</em>
                        </div>
                        <div>
                            <AddtoWatchListIcon />
                            <InWatchListIcon />
                            <FavoriteIcon />
                            <span><WatchTrailerIcon /></span>
                        </div>
                        <Tagline>Some mistakes can never be erased</Tagline>
                        <p>Streaming On: { platform }</p>
                        <div>
                            <h3>Overview:</h3>
                            <p>Determined to escape a dead-end life, a gifted high school student turns to a world of serious crime to ensure he can pay for college.</p>
                        </div>
                        <h4>Number of Seasons: { 1 }</h4>
                        <p>Status: { status }</p>
                    </ContentOverview>
                </div>
            </OverviewStyled>
        </Backdrop>
    )
}