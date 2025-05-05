import { Link } from "react-router-dom";
import styled from "styled-components";

export const S = {
    Sobre: styled.section`
    background: #8dbce7;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        text-align: center;
        margin-top: 30px;
        animation: rightTextInput 1.5s ease-in-out;

    }
    `,

    Main: styled.main`
        display: flex;
        margin: 50px;
        max-width: 1280px;
    `,

    ImgOuter: styled.div`
        max-width: 450px;
        box-shadow: 3px 3px 3px;
        border-radius: 10px;
        margin-right: 30px;
        height: auto;

    `,

    ImgInner: styled.div`
        box-shadow: inset 3px 3px 3px;
        border-radius: 10px;
        padding: 10px;

        img {
            width: 100%;
            box-shadow: inset 3px 3px 3px, 3px 3px 3px;
            border-radius: 10px;
            background: radial-gradient(circle, #000, violet);
        }
    `,

    DivText: styled.div`
        max-width: 600px;
        animation: rightTextInput 1.5s ease-in-out;

        p{
            font-size: 19px;
        }

        @keyframes rightTextInput {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            50% {
                opacity: 1;
                transform: translateX(-20px);
            }
                to {
                opacity: 1;
                transform: translateX(0);
            }
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
        background: gray;
        box-shadow: 3px 3px 3px rgb(10, 97, 179), -3px -3px 3px rgb(90, 94, 99);

        &:hover {
        background: rgb(10, 97, 179);
        }
    `,
}