import { HeaderStyled } from "./Header.styled";

import { Flex } from "../../styled-shared/Layouts/Flex.styled";
import { LogoStyled, BrandStyled } from "../../styled-shared/Logo.styled";
import {Button,ButtonInverted} from "./../../styled-shared/Button.styled";
import logo from "../../assets/flickrLogo.svg";
import brand from "../../assets/flickr.svg";

export default function Header() {
  function handleSignUp(){
    console.log("reigester");
  }
  function handleSignIn(){
    console.log("handleing");
  }
  return (
    <HeaderStyled>
      <Flex>
        <li>
          <Flex>
          <LogoStyled src={logo} />
          <BrandStyled src={brand} />
          </Flex>
        </li>
        <li>
          <input type="search" placeholder="search movies, shows" />
        </li>
        <li>
          <Button onClick={handleSignUp}>Sign up</Button>
          <ButtonInverted onClick={handleSignIn}>Sign in</ButtonInverted>
        </li>
      </Flex>
    </HeaderStyled>
  );
}
