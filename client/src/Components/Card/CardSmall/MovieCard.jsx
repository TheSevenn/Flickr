import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";
import { image_base_url, poster_size } from "../../../api/config";

export default function MovieCard( { title, poster_path, release_date } ) {
    return (
        <CardSmallStyled>
            <Thumbnail src={`${image_base_url}/${poster_size.w500}/${poster_path}`} loading="lazy" />
            <h3>{title}</h3>
            <h4>
                {/* <span>{genre}</span> &#8226; */}
                <span>{release_date.substr( 0, 4 )} </span>
            </h4>

        </CardSmallStyled>
    )
}