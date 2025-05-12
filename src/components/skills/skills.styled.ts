import styled from "styled-components"
import { LeftTextInput, RightTextInput } from "../animations/animations.style" 

export const S = {
    Section: styled.section`
        flex: 1;
        display: flex;
        justify-content: center;
        background-color: #1f2949;
        color: #6cb4ff;
    `,

    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 1100px;

        span {
            display: flex;
            align-items: center;
            font-size: 14px;
            margin: 10px 30px 30px;
            animation: ${LeftTextInput} 1.8s ease-in-out;
        }

        h2 {
            text-align: center;
            margin: 30px 0;
            animation: ${LeftTextInput} 1.8s ease-in-out;
        }
    `,

    UlIcons: styled.ul`
        display: flex;
        padding: 20px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 15px;
        max-width: 700px;
        max-height: 800px;
        gap: 20px;
        background:rgb(179, 175, 175);
        box-shadow: rgb(231, 27, 27) 0px 5px 15px;

        @media (max-width: 768px) {
            margin: 0 20px;
            padding: 10px;
        }

        li {
            display:flex;
            padding: 8px;
            margin: 20px;
            font-size: 50px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 10px;
            background-color: #fff;
            animation: ${RightTextInput} 1.8s ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.3);
                transition: transform 0.3s ease-in-out;
            }

            @media (max-width: 543px) {
                margin: 8px;
            }

            @media (max-width: 360px) {
                font-size: 35px;
                margin: 8px;
                padding: 10px;
            }
        }

    `,
}