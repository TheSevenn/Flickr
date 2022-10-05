import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import { useDispatch } from "react-redux";

import { SignUpStyled, CancelIcon } from "./SignUp.styled";
import { LogoStyled } from "../../_shared.styled/Logo.styled";
import { ButtonRound } from "../../_shared.styled/Button.styled";
import logo from "../../../assets/flickrLogo.svg";
import { fontSize } from "../../_shared.styled";
import { closeModal, sign_up, setUser } from "../../../redux/features/auth/authSlice";

export default function SignUp() {
    const dispatch = useDispatch();
    const [ doc, setDoc ] = useState( {
        name: "",
        username: ""
    } );
    function handleClose() {
        dispatch( closeModal() );
    }
    function handleName( e ) {
        setDoc( { ...doc, name: e.target.value } );
    }
    function handleUsername( e ) {
        setDoc( { ...doc, username: e.target.value } );
    }

    function handleSignUp() {
        dispatch( sign_up( doc ) );
        dispatch( setUser( doc ) );
    }

    return (
        <SignUpStyled>
            <CancelIcon onClick={handleClose} />
            <LogoStyled src={logo} size="6rem" />
            <h3>
                Sign up
            </h3>
            <input type="text" name="name" id="name" placeholder="Your name" onChange={handleName} />
            <input type="text" name="userName" id="userName" placeholder="choose a username" onChange={handleUsername} />
            <ButtonRound onClick={handleSignUp}><FaArrowRight style={{ fontSize: fontSize.subheading, horizontalAlign: "center" }} /></ButtonRound>
        </SignUpStyled>
    )
}