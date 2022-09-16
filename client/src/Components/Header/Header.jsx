import React from "react";
import { HeaderStyled, MenuIcon, UserStyled, FavoriteIcon, BookmarkIcon, CancelIcon } from "./Header.styled";

import logo from "../../assets/flickrLogo.svg";
import brand from "../../assets/flickr.svg";
import { LogoStyled, BrandStyled, Button, ButtonInverted } from "../_shared.styled";
import Modal from "../Modal/Modal";

export default function Header() {
    const [ auth, setAuth ] = React.useState( false );
    function handleMenu() {
        console.log( "menu" );
    }

    function handleSignIn() {
        setAuth( prev => !prev );
    }
    function handleSignOut() {
        setAuth( prev => !prev );
    }
    return (
        <HeaderStyled>
            <li>
                <LogoStyled src={ logo } size="6rem" />
                {/* <BrandStyled src={ brand } size="6rem" /> */ }
            </li>
            {
                auth ? <UserStyled>
                    <CancelIcon />
                    <BookmarkIcon /><FavoriteIcon />
                    <div>
                        <ButtonInverted onClick={ handleSignOut }>Sign out</ButtonInverted>
                    </div>
                </UserStyled> : <UserStyled>
                    <CancelIcon /><Button>Sign up</Button>
                    <ButtonInverted onClick={ handleSignIn }>Sign in</ButtonInverted>
                </UserStyled>
            }

            <Modal />
        </HeaderStyled>
    )
}