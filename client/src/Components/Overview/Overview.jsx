import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";

import {
    Backdrop, OverviewStyled, ContentOverview, Thumbnail,
    AddtoWatchListIcon, InWatchListIcon, FavoriteIcon, WatchTrailerIcon,
    Title, Tagline
} from "./Overview.styled";
import { backdrop_size, image_base_url, poster_size } from "../../api/config";
import { getOverviewById } from "../../redux/features/overview/overviewSlice";
import { useAddress } from "../../customHooks/useAddress";

export default function Overview() {
    // location and params are used to populate component with data incase of reload.
    const { id, type } = useAddress();
    const dispatch = useDispatch();

    useEffect( () => {
        const meta = { id, type };
        dispatch( getOverviewById( meta ) );
    }, [ dispatch, id, type ] );

    const overview = useSelector( store => store.overview.overviewResponse );
    const title = overview.title || overview.name;
    const year = overview.release_date || overview.first_air_date;
    const runtime = overview.runtime || overview.episode_run_time;
    const poster = `${image_base_url}${poster_size.w780}/${overview.poster_path}`;
    const backdrop = `${image_base_url}${backdrop_size.w780}/${overview.backdrop_path}`;


    return (
        <Backdrop backdrop={backdrop}>
            <OverviewStyled>
                <div>
                    <Thumbnail src={poster} loading="lazy" />
                    <ContentOverview>
                        <Title>{overview && title} ({year && year.substr( 0, 4 )})</Title>
                        <div>
                            <em>UA</em>
                            <em>{overview.genres && overview.genres[ 0 ].name}</em>
                            <em>&#8226;  {overview && runtime}m</em>
                        </div>
                        <div>
                            <AddtoWatchListIcon data-tip data-for="add-watchlist" />
                            <InWatchListIcon data-tip data-for="in-watchlist" />
                            <FavoriteIcon data-tip data-for="favorite" />
                            <span data-tip data-for="watch-trailer"><WatchTrailerIcon /></span>
                            <ReactTooltip id="favorite" place="top" effect="solid">
                                add to favorite
                            </ReactTooltip>
                            <ReactTooltip id="watch-trailer" place="top" effect="solid">
                                watch trailer
                            </ReactTooltip>
                            <ReactTooltip id="add-watchlist" place="top" effect="solid">
                                add to watchlist
                            </ReactTooltip>
                            <ReactTooltip id="in-watchlist" place="top" effect="solid">
                                in watchlist
                            </ReactTooltip>
                        </div>
                        <Tagline>{overview && overview.tagline}</Tagline>
                        <p>Streaming On: </p>
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