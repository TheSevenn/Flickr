import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";

import {
    Backdrop, OverviewStyled, ContentOverview, Thumbnail,
    WatchListIcon, FavoriteIcon, WatchTrailerIcon,
    Title, Tagline
} from "./Overview.styled";
import { backdrop_size, image_base_url, poster_size } from "../../api/config";
import { getOverviewById } from "../../redux/features/overview/overviewSlice";
import { useAddress } from "../../customHooks/useAddress";
import poster_placeholder from "../../assets/poster_placeholder.svg";
import { resetSearch } from "../../redux/features/search/searchSlice";

export default function Overview() {
    // location and params are used to populate component with data incase of reload.
    const { id, type } = useAddress();
    const dispatch = useDispatch();

    useEffect( () => {
        const meta = { id, type };
        dispatch( getOverviewById( meta ) );
        return () => dispatch( resetSearch() );
    }, [ dispatch, id, type ] );

    const overview = useSelector( store => store.overview.overviewResponse );
    // const videos = useSelector( store => store.overview.overviewResponse.videos );
    const title = overview.title || overview.name;
    const year = overview.release_date || overview.first_air_date;
    const runtime = overview.runtime || overview.episode_run_time || "-";
    const poster = overview && overview.poster_path ? `${image_base_url}${poster_size.w780}/${overview.poster_path}` : poster_placeholder;
    const backdrop = `${image_base_url}${backdrop_size.w780}/${overview.backdrop_path}`;
    const videos = overview.videos;
    const video_key = videos && videos.length > 0 && videos.results[ videos.results.length - 1 ].type === "Trailer" ? videos.results[ videos.results.length - 1 ].key : null;

    function handleWatchlist() {

    }
    function handleFavorite() {

    }

    return (
        <Backdrop backdrop={backdrop}>
            <OverviewStyled>
                <div>
                    <Thumbnail src={poster} loading="lazy" />
                    <ContentOverview>
                        <Title>{overview && title} ({year && year.substr( 0, 4 )})</Title>
                        <div>
                            <em>{overview.genres && overview.genres[ 0 ].name}</em>
                            <em>&#8226;  {overview && runtime}m</em>
                        </div>
                        <div>
                            <WatchListIcon data-tip data-for="add-watchlist" onClick={handleWatchlist} style={{}} />
                            {/* <InWatchListIcon data-tip data-for="in-watchlist" /> */}
                            <FavoriteIcon data-tip data-for="favorite" onClick={handleFavorite} />
                            {
                                video_key &&
                                <span data-tip data-for="watch-trailer">
                                    <a href={"https://www.youtube.com/watch?v=" + video_key} >

                                        <WatchTrailerIcon /></a></span>
                            }
                            <ReactTooltip id="favorite" place="top" effect="solid">
                                add to favorite
                            </ReactTooltip>
                            <ReactTooltip id="watch-trailer" place="top" effect="solid">
                                watch trailer
                            </ReactTooltip>
                            <ReactTooltip id="add-watchlist" place="top" effect="solid">
                                add to watchlist
                            </ReactTooltip>
                        </div>
                        <Tagline>{overview && overview.tagline}</Tagline>
                        <div>
                            <h3>Overview:</h3>
                            <p>{overview && overview.overview}</p>
                        </div>
                        {overview.number_of_seasons && <h4>Number of Seasons: {overview.number_of_seasons}</h4>}
                        <p>Status: {overview && overview.status}</p>
                    </ContentOverview>
                </div>
            </OverviewStyled>
        </Backdrop>
    )
}