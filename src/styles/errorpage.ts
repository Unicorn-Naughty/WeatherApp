import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ErrorMainComponent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 15px;
    flex-grow: 1;
    min-height: calc(100vh - 170px);
    @media (max-width: 1050px){
        display: block;
    }
`
export const ErrorDiv = styled.div`
margin: 0 auto;
font-size: 50px;
position: absolute;
top: 50%;
transform: translate(0, -50%);
`

export const ErroLinkBack = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    color: red;
    padding: 0;
`