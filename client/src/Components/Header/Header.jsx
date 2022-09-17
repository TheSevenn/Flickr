import React from "react";
import { HeaderStyled, MenuIcon, UserStyled, FavoriteIcon, BookmarkIcon, CancelIcon } from "./Header.styled";

import logo from "../../assets/flickrLogo.svg";
// import brand from "../../assets/flickr.svg";
import { LogoStyled, Button, ButtonInverted } from "../_shared.styled";
import Modal from "../Modal/Modal";

export default function Header() {
    const [ auth, setAuth ] = React.useState( false );
    const [ navActive, setNavActive ] = React.useState( false );

    function handleSignIn() {
        setAuth( true );
    }

    function handleSignOut() {
        setAuth( false )
    }

    function handleNavOpen() {
        setNavActive( true );
    }
    function handleNavClose() {
        setNavActive( false );
    }

    return (
        <HeaderStyled>
            <li>
                <LogoStyled src={ logo } size="6rem" />
            </li>
            <UserStyled navStatus={ navActive }>
                <CancelIcon onClick={ handleNavClose } navactive={ navActive ? 1 : 0 } />
                {
                    auth ?
                        <React.Fragment>
                            <span>
                                <BookmarkIcon />Watchlist
                            </span>
                            <span>
                                <FavoriteIcon />Favorites
                            </span>
                            <div>
                                <ButtonInverted onClick={ handleSignOut }>Sign out</ButtonInverted>
                            </div>
                        </React.Fragment> : <React.Fragment><Button>Sign up</Button>
                            <ButtonInverted onClick={ handleSignIn } >Sign in</ButtonInverted></React.Fragment>
                }
            </UserStyled>
            <MenuIcon onClick={ handleNavOpen } navactive={ navActive ? 1 : 0 } />
            <Modal />
        </HeaderStyled>
    )
}