import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeaderStyled, MenuIcon, UserStyled, FavoriteIcon, BookmarkIcon, CancelIcon } from "./Header.styled";
import logo from "../../assets/flickrLogo.svg";
import { LogoStyled, Button, ButtonInverted } from "../_shared.styled";
import Modal from "../Modal/Modal";
import { openModal, sign_out } from "../../redux/features/auth//authSlice";

export default function Header() {
    const dispatch = useDispatch();
    // states to implement responsive navbar menu button
    const [ navActive, setNavActive ] = React.useState( false );
    const authStatus = useSelector( store => store.auth.response );

    // opens modal with signin card
    function openSignIn() {
        dispatch( openModal( "signin" ) );
        setNavActive( false );
    }

    // opens modal with signup card
    function openSignup() {
        dispatch( openModal( "signup" ) );
        setNavActive( false );
    }


    function handleSignOut() {
        dispatch( sign_out() );
    }

    function handleNavOpen() {
        setNavActive( true );
    }
    function handleNavClose() {
        setNavActive( false );
    }

    return (
        <HeaderStyled>
            <Link to="/">
                <li>
                    <LogoStyled src={logo} size="6rem" />
                </li>
            </Link>
            <UserStyled navStatus={navActive}>
                <CancelIcon onClick={handleNavClose} navactive={navActive ? 1 : 0} />
                {
                    authStatus && authStatus.user_access_token ?
                        <React.Fragment>
                            <span>
                                <BookmarkIcon />Watchlist
                            </span>
                            <span>
                                <FavoriteIcon />Favorites
                            </span>
                            <div>
                                <ButtonInverted onClick={handleSignOut}>Sign out</ButtonInverted>
                            </div>
                        </React.Fragment> : <React.Fragment><Button onClick={openSignup}>Sign up</Button>
                            <ButtonInverted onClick={openSignIn} >Sign in</ButtonInverted></React.Fragment>
                }
            </UserStyled>
            <MenuIcon onClick={handleNavOpen} navactive={navActive ? 1 : 0} />
            <Modal />
        </HeaderStyled>
    )
}