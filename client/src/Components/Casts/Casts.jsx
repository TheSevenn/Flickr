import { CastStyled } from "./Casts.styled";
import CardAlt from "../Card/CardAlt/CardAlt";
import CardLarge from "../Card/CardLarge/CardLarge";

export default function Cast() {
    return (
        <CastStyled>
            <h2>Casts</h2>
            <section>
                <CardAlt />
                <CardAlt />
                <CardAlt />
                <CardAlt />
                <CardAlt />
                <CardAlt />
                <CardAlt />
                <CardAlt />
            </section>
            <h2>Most Recent Season</h2>
            <CardLarge />
        </CastStyled>
    )
}