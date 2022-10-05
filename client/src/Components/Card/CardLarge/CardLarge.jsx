import { CardLargeStyled, ThumbnailLarge } from "./CardLarge.styled";
import { getImageURL } from "../../../utils/getImageURL";
import { poster_size } from "../../../api/config";
import poster_placeholder from "../../../assets/poster_placeholder.svg";

export default function CardLarge( { season, title } ) {

    const poster_url = season && season.poster_path ? getImageURL( season && season.poster_path, poster_size.w500 ) : poster_placeholder;

    const air_date = season.air_date && season.air_date.substr( 0, 4 );
    const name = season.name;
    const episodes = season.episode_count;
    const season_overview = season.overview.split( '.' )[ 0 ] || `Season ${season.season_number} of ${title} premiered on ${season.air_date || "unknown"}`;

    return (
        <CardLargeStyled>
            <ThumbnailLarge loading="lazy" src={poster_url} />
            <div>
                <h2>{name}</h2>
                <h3>{air_date || "unknown"} | {episodes} Episodes</h3>
                <p>
                    {season_overview}.
                </p>
            </div>
        </CardLargeStyled>
    )
}