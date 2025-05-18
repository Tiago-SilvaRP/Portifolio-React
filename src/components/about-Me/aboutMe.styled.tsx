import { Link } from "react-router-dom";
import styled from "styled-components";
import { LeftTextInput, RightTextInput } from "../animations/animations.style";

export const S = {
    Sobre: styled.section`
    background: #1f2949;
    color: #afb6c5;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        text-align: center;
        margin-top: 30px;
        animation: ${LeftTextInput} 1.5s ease-out;

    }
    `,

    Main: styled.main`
        display: flex;
        margin: 50px;
        max-width: 1280px;

        @media (max-width: 901px) {
            display: flex;
            flex-direction: column;
            align-items: center;
    }
    `,

    ImgOuter: styled.div`
        max-width: 450px;
        box-shadow: #6cb4ff 3px 3px 13px;
        border-radius: 10px;
        margin-right: 30px;
        height: fit-content;

        @media (max-width: 901px) {
            max-width: 240px;
            margin-bottom: 30px;
        }
    `,

    ImgInner: styled.div`
        box-shadow: #6cb4ff inset 3px 3px 8px;
        border-radius: 10px;
        padding: 10px;

        img {
            width: 100%;
            background: radial-gradient(circle, #000, #1f2949);

            
        }
    `,

    DivText: styled.div`
        max-width: 600px;
        animation: ${RightTextInput} 1.5s ease-in-out;

        p{
            font-size: 19px;
        }
    `,

    Botao: styled.div`
    margin-top: 50px;
    `,

    Link: styled(Link)`
        margin-top: 50px;
        padding: 10px 20px;
        border-radius: 20px;
        transition: all .3s ease;
        color: #afb6c5;
        background: #5a5e63;
        box-shadow: 3px 3px 3px #0a61b3, -3px -3px 3px #5a5e63;

        &:hover {
        background: #0a61b3;
        }
    `,
}