import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";
import { poster_size } from "../../../api/config";
import { getImageURL } from "../../../utils/getImageURL";
import poster_placeholder from "../../../assets/poster_placeholder.svg";

export default function MovieCard( { title, poster_path, release_date } ) {

    const poster_url = poster_path ? getImageURL( poster_path, poster_size.w500 ) : poster_placeholder;
    return (
        <CardSmallStyled>
            <Thumbnail src={poster_url} loading="lazy" />
            <h3>{title}</h3>
            <h4>
                {/* <span>{genre}</span> &#8226; */}
                <span>{release_date.substr( 0, 4 )} </span>
            </h4>

        </CardSmallStyled>
    )
}