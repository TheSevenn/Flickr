import React from "react";
import { Link } from "react-router-dom";

import { CastStyled } from "./Casts.styled";
import CardAlt from "../Card/CardAlt/CardAlt";
import CardLarge from "../Card/CardLarge/CardLarge";
import { useAddress } from "../../customHooks/useAddress";

export default function Cast( { seasons, credits, title } ) {
    const { id, type } = useAddress();
    const casts = credits ? credits.cast : null;

    console.log( "seaasons are:", seasons, "and casts:", credits );
    return (
        <CastStyled>
            <h2>Casts</h2>
            <section>

                {
                    casts && casts.map( ( cas, index ) =>
                        index < 21 &&
                        <CardAlt cas={cas} key={cas.name + Math.floor( Math.random() * 10 )} />
                    )
                }
            </section>
            {
                type === 'tv' && seasons ?

                    <React.Fragment>
                        <h2>Most Recent Season</h2>
                        <CardLarge season={seasons[ seasons.length - 1 ]} title={title} />
                        <Link to={"/tv/" + id + "/" + Math.floor( Math.random() * 100 ) + "/seasons"}>
                            <p>see all seasons</p>
                        </Link>
                    </React.Fragment>
                    : ""}
        </CastStyled>
    )
}