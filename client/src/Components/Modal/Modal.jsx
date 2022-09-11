import ReactDom from "react-dom";
import { FaArrowRight,FaTimes } from "react-icons/fa"

import { ModalContainer, ModalStyled } from "./Modal.styled";
import { LogoStyled } from "../../styled-shared/Logo.styled";
import { ButtonRound } from "../../styled-shared/Button.styled";
import { Subheading } from "../../styled-shared/Heading.styled";
import logo from "../../assets/flickrLogo.svg";
import { fontSize } from "../../constants/styleConstants";

export default function Modal() {
    return ReactDom.createPortal(
        <ModalContainer>
            <ModalStyled>
                <FaTimes fontSize={fontSize.subheading} style={{position:"absolute",right:"4%",top:"4%"}}/>
                <LogoStyled src={logo} size="6rem" />
                <Subheading color={props => props.theme.colors.uiMajorColor} fontSize={fontSize.strong}>
                    Sign up
                </Subheading>
                <input type="text" name="nickName" id="nickName" placeholder="Your Nickname" />
                <input type="text" name="userName" id="userName" placeholder="choose a username" />
                <ButtonRound><FaArrowRight style={{ fontSize:fontSize.subheading, horizontalAlign: "center" }} /></ButtonRound>
            </ModalStyled>
        </ModalContainer>,
        document.getElementById("portal")
    )
}