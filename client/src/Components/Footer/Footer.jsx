import { FooterStyled } from "./Footer.styled";
import { LogoStyled } from "../_shared.styled";
import logo from "../../assets/flickrLogo.svg";

export default function Footer() {
    const user = "jutsu";
    return (
        <FooterStyled>
            <div>
                <LogoStyled src={ logo } size="7rem" />
                <p>Hi, { user } so we finally met at the bottom, first of all thanks for using the <strong>FLICKR</strong>. And you should know that all the information related to movies and shows on our app is sourced from <a href="https://www.themoviedb.org/" target="_tmbd" ><strong>TMBD</strong></a> api.
                </p>
                <p>designed and developed by <a href="https://linkedin.com/in/thesevenn/" target=""> <strong>Sevenn</strong></a></p>
            </div>
        </FooterStyled>
    );
}
