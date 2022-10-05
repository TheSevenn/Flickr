import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { ModalContainer } from "./Modal.styled";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import FinishUp from "./FinishUp/FinishUp";
import { closeModal } from "../../redux/features/auth/authSlice"

export default function Modal() {
    const dispatch = useDispatch();
    const { modal, modalState, message } = useSelector( store => store.auth );

    if( message && message.message === "user signed up succesfully" ) {
        dispatch( closeModal() );
    }
    return ReactDom.createPortal(
        <ModalContainer state={modalState}>
            {modal === "signin" ? <SignIn /> : ""}
            {modal === "signup" && message.message !== "continue" ? <SignUp /> : ""}
            {message.message === "continue" ? <FinishUp /> : ""}
        </ModalContainer>,
        document.getElementById( "portal" )
    )
}