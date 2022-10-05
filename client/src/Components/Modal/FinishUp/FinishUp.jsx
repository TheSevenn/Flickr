import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";

import { FinishUpStyled, CancelIcon } from "./FinishUp.styled";
import { LogoStyled } from "../../_shared.styled/Logo.styled";
import { ButtonRound } from "../../_shared.styled/Button.styled";
import logo from "../../../assets/flickrLogo.svg";
import { fontSize } from "../../_shared.styled";
import { closeModal, finish_up } from "../../../redux/features/auth/authSlice";

export default function SignUp() {
    const user = useSelector( store => store.auth.user );
    const dispatch = useDispatch();
    const [ doc, setDoc ] = useState( {
        ...user,
        email: "",
        password: ""
    } );
    function handleClose() {
        dispatch( closeModal() );
    }
    function handleEmail( e ) {
        setDoc( { ...doc, email: e.target.value } );
    }
    function handlePassword( e ) {
        setDoc( { ...doc, password: e.target.value } );
    }

    function handleFinishUp() {
        dispatch( finish_up( doc ) );
        dispatch( closeModal() );
    }
    return (
        <FinishUpStyled>
            <CancelIcon onClick={handleClose} />
            <LogoStyled src={logo} size="6rem" />
            <h3>
                Finish up
            </h3>
            <input type="text" name="email" id="email" placeholder="Your email" onChange={handleEmail} />
            <input type="text" name="password" id="password" placeholder="create a password" onChange={handlePassword} />
            <ButtonRound onClick={handleFinishUp}><FaArrowRight style={{ fontSize: fontSize.subheading, horizontalAlign: "center" }} /></ButtonRound>
        </FinishUpStyled>
    )
}