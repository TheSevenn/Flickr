import React from "react";

import { CardSmallStyled, Thumbnail } from "./CardSmall.styled";

export default function CardSmall() {

    const genre = "Fantasy,Reomace";
    const year = "2018";
    return (
        <CardSmallStyled>
            <Thumbnail src="https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg" loading="lazy" />

            <h3>Aladin</h3>
            <h4>
                <span>{ genre }</span>
                <span>&#8226; { year }</span>
            </h4>

        </CardSmallStyled>
    )
}