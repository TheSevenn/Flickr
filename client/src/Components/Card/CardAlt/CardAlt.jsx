import { getImageURL } from "../../../utils/getImageURL";
import { CardAltStyled, ThumbnailAlt } from "./CardAlt.styled";
import { poster_size } from "../../../api/config";
import { useEffect } from "react";
export default function CardAlt( { cas } ) {

    const name = cas ? cas.name : null;
    const profile_path = cas ? cas.profile_path : null;
    const profile_url = getImageURL( profile_path, poster_size.w500 )
    const character = cas ? cas.character : null;

    return (
        <CardAltStyled>
            <ThumbnailAlt loading="lazy" src={profile_url} />
            <h3>{name}</h3>
            <h4>as {character}</h4>
        </CardAltStyled>
    )
} 