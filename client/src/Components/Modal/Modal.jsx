import ReactDom from "react-dom";
import { FaArrowRight } from "react-icons/fa"

import { ModalContainer, ModalStyled, CancelIcon } from "./Modal.styled";
import { LogoStyled } from "../_shared.styled/Logo.styled";
import { ButtonRound } from "../_shared.styled/Button.styled";
import logo from "../../assets/flickrLogo.svg";
import { fontSize } from "../_shared.styled";

export default function Modal() {
    return ReactDom.createPortal(
        <ModalContainer>
            <ModalStyled>
                <CancelIcon />
                <LogoStyled src={ logo } size="6rem" />
                <h3>
                    Sign up
                </h3>
                <input type="text" name="nickName" id="nickName" placeholder="Your Nickname" />
                <input type="text" name="userName" id="userName" placeholder="choose a username" />
                <ButtonRound><FaArrowRight style={ { fontSize: fontSize.subheading, horizontalAlign: "center" } } /></ButtonRound>
            </ModalStyled>
        </ModalContainer>,
        document.getElementById( "portal" )
    )
}