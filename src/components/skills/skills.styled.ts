import styled from "styled-components"
import { LeftTextInput, RightTextInput } from "../animations/animations.style" 

export const S = {
    Section: styled.section`
        flex: 1;
        display: flex;
        justify-content: center;
        background-color: #8dbce7;
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
            color: #f0f0f0;
            font-size: 14px;
            margin-top: 10px;
            animation: ${LeftTextInput} 1.8s ease-in-out;
        }

        h2 {
            text-align: center;
            color:#fff;
            margin: 30px 0;
            animation: ${LeftTextInput} 1.8s ease-in-out;
        }
    `,

    UlIcons: styled.ul`
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 15px;
        max-width: 700px;
        max-height: 800px;
        gap: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
                color: red;
                cursor: pointer;
                transform: scale(1.3);
            }
        }
    `,
}