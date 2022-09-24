import { useEffect } from "react";
import { CardLargeStyled, ThumbnailLarge } from "./CardLarge.styled";
import { getImageURL } from "../../../utils/getImageURL";
import { poster_size } from "../../../api/config";

export default function CardLarge( { season } ) {


    const poster_url = getImageURL( season && season.poster_path, poster_size.w500 );

    const air_date = season && season.first_air_date;
    const name = "fg";
    const episodes = "f";
    const season_overview = "fefe";

    return (
        <CardLargeStyled>
            <ThumbnailLarge loading="lazy" src={poster_url} />
            <div>
                <h2>{name}</h2>
                <h3>{air_date} | {episodes} Episodes</h3>
                <p>
                    {season_overview}
                </p>
            </div>
        </CardLargeStyled>
    )
}