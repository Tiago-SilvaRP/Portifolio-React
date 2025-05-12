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

    button {
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: scale(1.2);
        }
    }
`,

    ContainerProject: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgb(179, 175, 175);;
        box-shadow: rgb(231, 27, 27) 0px 5px 15px;
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
        }
    `,
    Info: styled.div`
        display: flex;
    `,
    Details: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
        gap: 15px;
    `,

    StykedLink: styled(Link)`
        color: #1f2949;
    `,
}
