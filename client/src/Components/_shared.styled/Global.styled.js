import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
   }
   
   html{
    font-size:10px;
    font-family:'Montserrat', sans-serif; 
    overflow-x:hidden;
    scroll-behavior: smooth;

   }

   a{
      text-decoration: none;
   }

   /* img{
    max-width:100%;
   } */

   li{
    list-style:none;
   }

   input{
    outline:none;
    border:none;
    background-color:transparent;
   }

   button{
      outline:none;
      border:none;
      background-color:transparent;
      cursor: pointer;
   }

   `