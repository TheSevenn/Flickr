import { FooterStyled } from "./Footer.styled";
import { LogoStyled, BrandStyled } from "../../styled-shared/Logo.styled";
import { Container } from "../../styled-shared/Contianer.styled";
import { Paragraph } from "../../styled-shared/Typography.styled";
import logo from "../../assets/flickrLogo.svg";
import brand from "../../assets/flickr.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <LogoStyled src={logo} />
        <BrandStyled src={brand} />
      </Container>

      <Container>
        <Paragraph>Hi, user so we finally met at the bottom, you should know that</Paragraph>
        <Paragraph>All data on this website is from TMDB Api.</Paragraph>
      </Container>
    </FooterStyled>
  );
}
