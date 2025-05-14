import styled from "styled-components";
import { Button } from "../button/button";
import { Link } from "react-router-dom";

interface NavProps{
    $ativo: boolean;
}

interface ToogleProps {
    $open: boolean;
}

export const styleHover = `
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #2b3a6b;
        color: #80d1ff;
        box-shadow: 0 0 10px #6cb4ff;
    }
`;

export const S = {
    HeaderContainer: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: gray;
        padding: 15px;
        position: relative;
        padding: 15px 8%;
        background: #141b30;
    `,

    Logo: styled(Link)`
        border: solid 1px;
        border-radius: 50%;
        padding: 5px;
        color: #6cb4ff;
        ${styleHover}
        }
    `,

    Nav: styled.nav<NavProps>`
        @media (max-width: 768px) {
            opacity: ${({ $ativo }) => ($ativo ? 1 : 0)};
            visibility: ${({ $ativo }) => ($ativo ? "visible" : "hidden")};
            pointer-events: ${({ $ativo }) => ($ativo ? "auto" : "none")};
            position: absolute;
            width: 200px;
            top: 100%;
            right: 15px;
            padding: 15px;
            border-radius: 0 0 8px 8px;
            background: #141b30;
            transition: visibility 0.3s;
            z-index: 999;
        }
    `,

    Ul: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 15px;

        @media(min-width: 769px){
            flex-direction: row;
        }
    `,

    Ancora: styled(Link)`
        color: #6cb4ff;
        display: flex;

        &:hover {
            transition: 0.3s ease-in-out;
            ${styleHover}
        }
    `,

    Btn: styled(Button)<ToogleProps>`
        display: ${({ $open }) => ($open ? "flex" : "none")};
        flex-direction: column;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        gap: 5px;
        cursor: pointer;

        @media (max-width: 768px) {
            display: flex;
        }
    `,

    Span: styled.span<ToogleProps>`
        width: 100%;
        height: 3px;
        background-color: #6cb4ff;
        border-radius: 2px;
        transition: 0.3s ease-in-out;

        &:nth-child(1) {
            transform: ${({ $open }) => (
                $open ? "rotate(45deg) translate(5px, 6px)" : "none")
            }
        }

        &:nth-child(2) {
            opacity: ${({ $open }) => ($open ? 0 : 1)} 
        } 

        &:nth-child(3) {
            transform: ${({ $open }) => (
                $open ? "rotate(-45deg) translate(5px, -6px)" : "none")
            }
        }
    `
}