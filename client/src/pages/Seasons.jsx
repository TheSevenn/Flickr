import React from "react";
import { useSelector } from "react-redux";

import CardLarge from "../components/Card/CardLarge/CardLarge";
import { useAddress } from "../customHooks/useAddress";
export default function Seasons() {
    const seasons = useSelector( store => store.overview.overviewResponse.seasons )
    const { id, type } = useAddress();
    console.log( "id is:", id, type );
    console.log( seasons, "seaons ar here" );
    return (
        <React.Fragment>
            <h1>Seasons</h1>
            {
                seasons && seasons.map( season => <CardLarge season={season} key={season.id} /> )
            }
        </React.Fragment>
    )
}