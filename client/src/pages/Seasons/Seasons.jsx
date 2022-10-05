import { useSelector } from "react-redux";

import { SeasonsStyled } from "./Season.styled";
import CardLarge from "../../components/Card/CardLarge/CardLarge";
import { useAddress } from "../../customHooks/useAddress";
export default function Seasons() {
    const { seasons, title } = useSelector( store => store.overview.overviewResponse )
    const { id, type } = useAddress();
    console.log( "id is:", id, type );
    console.log( seasons, "seaons ar here" );
    return (
        <SeasonsStyled >
            <h2>All Seasons of - {title}</h2>
            {
                seasons && seasons.map( season => <CardLarge season={season} title={title} key={season.id} /> )
            }
        </SeasonsStyled>
    )
}