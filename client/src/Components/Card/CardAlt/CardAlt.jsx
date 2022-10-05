import { getImageURL } from "../../../utils/getImageURL";
import { CardAltStyled, ThumbnailAlt } from "./CardAlt.styled";
import { poster_size } from "../../../api/config";
import profile_placeholder from "../../../assets/profile_placeholder.svg";

export default function CardAlt( { cas } ) {

    const name = cas ? cas.name : null;
    const profile_path = cas ? cas.profile_path : null;
    const profile_url = profile_path ? getImageURL( profile_path, poster_size.w500 ) : profile_placeholder;
    const character = cas ? cas.character : null;

    return (
        <CardAltStyled>
            <ThumbnailAlt loading="lazy" src={profile_url} />
            <h3>{name}</h3>
            <h4>as {character}</h4>
        </CardAltStyled>
    )
} 