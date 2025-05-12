import { Link } from "react-router-dom";
import styled from "styled-components";

export const S = {
    ImgSetaVoltar: styled.img`
        transform: rotate(180deg);
    `,

    ContainerSlide: styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #1f2949;
        color: #1f2949;

        h2 {
            margin: 20px 0;
            color: #6cb4ff;
        }

        h3 {
            margin: 30px;
        }
    `,

    Carrossel: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;;
    position: relative;

    button {
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

        @media (max-width: 786px) {
            flex-direction: column;
            gap: 10px;

            button:first-of-type {
                position: absolute;
                bottom: 0;
                left: 20%;
                margin-bottom: 10px;
            } 

            button:last-of-type {
                margin-left: 40%;
                margin-bottom: 10px;
            }
        }

`,

    ContainerProject: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #b3afaf;;
        box-shadow: #e71b1b 0px 5px 15px;
        border-radius: 15px;
        margin-bottom: 30px;

        img {
            max-width: 250px;
            min-height: 300px;
            margin: 0 0 30px 20px;
            border-radius: 5px;
        }

        p {
            max-width: 280px;
            font-size: 14px;
        }

        @media (max-width: 400px) {
            margin: 0 20px 20px;
        }
    `,
    Info: styled.div`
        display: flex;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                margin: 0;
                max-width: 200px;
            }
        }
    `,
    
    Details: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:  0 30px 30px;
        gap: 15px;
    `,

    StykedLink: styled(Link)`
        color: #1f2949;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #e71b1b;
        }
    `,
}
