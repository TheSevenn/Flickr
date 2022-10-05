import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";
import { poster_size } from "../../../api/config";
import { getImageURL } from "../../../utils/getImageURL";
import poster_placeholder from "../../../assets/poster_placeholder.svg";

export default function TvShowCard( { name, poster_path, first_air_date } ) {
    const poster_url = poster_path ? getImageURL( poster_path, poster_size.w500 ) : poster_placeholder;
    // `${image_base_url}/${poster_size.w500}/${poster_path}`
    return (
        <CardSmallStyled>
            <Thumbnail src={poster_url} loading="lazy" />
            <h3>{name}</h3>
            <h4>
                {/* <span>{genre}</span> */}
                <span>{first_air_date.substr( 0, 4 )} </span>
            </h4>

        </CardSmallStyled>
    )
}