import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";

import { SignInStyled, CancelIcon } from "./SignIn.styled";
import { LogoStyled } from "../../_shared.styled/Logo.styled";
import { ButtonRound } from "../../_shared.styled/Button.styled";
import logo from "../../../assets/flickrLogo.svg";
import { fontSize } from "../../_shared.styled";
import { closeModal, sign_in } from "../../../redux/features/auth/authSlice";


export default function SignIn() {
    const [ credentials, setCredentials ] = useState( {
        username: null,
        password: null
    } );
    const dispatch = useDispatch();
    function handleClose() {
        dispatch( closeModal() );
    }
    function handleUsername( e ) {
        setCredentials( { ...credentials, username: e.target.value } );
    }
    function handlePassword( e ) {
        setCredentials( { ...credentials, password: e.target.value } );
    }
    function handleSign() {
        dispatch( sign_in( credentials ) );
    }

    // if user is signed in close the modal
    const user_access = useSelector( store => store.auth.response );
    if( user_access && user_access.user_access_token ) {
        dispatch( closeModal() );
    }

    return (
        <SignInStyled>
            <CancelIcon onClick={handleClose} />
            <LogoStyled src={logo} size="6rem" />
            <h3>
                Sign In
            </h3>
            <input type="text" name="username" id="username" placeholder="username" onChange={handleUsername} />
            <input type="text" name="password" id="password" placeholder="password" onChange={handlePassword} />
            <ButtonRound onClick={handleSign}><FaArrowRight style={{ fontSize: fontSize.subheading, horizontalAlign: "center" }} /></ButtonRound>
        </SignInStyled>
    )
}