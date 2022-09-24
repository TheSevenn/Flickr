import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CastStyled } from "./Casts.styled";
import CardAlt from "../Card/CardAlt/CardAlt";
import CardLarge from "../Card/CardLarge/CardLarge";
import { useAddress } from "../../customHooks/useAddress";

export default function Cast( { seasons, credits } ) {
    const { id, type } = useAddress();

    console.log( "Run in Cast" );

    // const { seasons, credits } = useSelector( store => store.overview.overviewResponse );
    const casts = credits ? credits.cast : null;

    console.log( "seaasons are:", seasons, "and casts:", credits );
    return (
        <CastStyled>
            <h2>Casts</h2>
            <section>

                {
                    casts && casts.map( cas => <CardAlt cas={cas} key={cas.id} /> )
                }
            </section>
            {
                type === 'tv' && seasons ?

                    <React.Fragment>
                        <h2>Most Recent Season</h2>
                        <CardLarge season={seasons[ 0 ]} />
                        <Link to={"/tvshows/" + id + "/" + Math.floor( Math.random() ) * 100 + "/seasons"}>
                            <p>see all seasons</p>
                        </Link>
                    </React.Fragment>
                    : ""}
        </CastStyled>
    )
}