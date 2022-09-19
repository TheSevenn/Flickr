import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";
import { image_base_url, poster_size } from "../../../api/config";

export default function TvShowCard( { name, poster_path, first_air_date } ) {
    return (
        <CardSmallStyled>
            <Thumbnail src={`${image_base_url}/${poster_size.w500}/${poster_path}`} loading="lazy" />
            <h3>{name}</h3>
            <h4>
                {/* <span>{genre}</span> */}
                <span>{first_air_date.substr( 0, 4 )} </span>
            </h4>

        </CardSmallStyled>
    )
}