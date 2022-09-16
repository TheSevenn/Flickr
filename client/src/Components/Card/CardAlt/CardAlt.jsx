import { CardAltStyled, ThumbnailAlt } from "./CardAlt.styled";

export default function CardAlt() {
    return (
        <CardAltStyled>
            <ThumbnailAlt loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Park_Ju-hyun.png" />
            <h3>Park ju-hyun</h3>
            <h4>as Bae Gyu-ri</h4>
        </CardAltStyled>
    )
} 