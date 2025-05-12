import styled, { keyframes } from "styled-components";

const LeftTextInput = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    50% {
        opacity: 1;
        transform: translateX(20px);
    }
    to {
        transform: translateX(0);
    }
`;

const boxShadow = `
    box-shadow: #6cb4ff inset 3px 3px 3px, #6cb4ff 3px 3px 3px;
`;

const commonStyles = `
    border-radius: 50%;
    ${boxShadow}
`;

export const S = {
    Section: styled.section`
        flex: 1;
        display: flex;
        background-color: #1f2949;
        width: 100vw;
        justify-content: center;
        align-items: center;
        color:  #afb6c5;
    `,

    TextoHome: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px;
        padding: 20px;
        text-align: center;
        animation: ${LeftTextInput} 1.5s ease-in-out;

        p {
            font-size: 18px;
            margin: 10px;
            text-align: center;
            max-width: 500px;
        }

        h1 {
            font-size: 32px;
            font-weight: 800;
            margin: 10px 0 5px;
            color: #d3d7e0;
        }

        h2 {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 15px;
            color: #d3d7e0;
        }
    `,

    DivImag: styled.div`
        margin: 30px;
        max-width: 350px;
        background: radial-gradient(circle, #000, #1f2949);
        ${commonStyles};
        flex: 0 0 50%;
    `,

    DivImgInner: styled.div`
        width: 350px;
    `,


    Img: styled.img`
        max-width: 100%;
        border: solid transparent 10px;
        ${commonStyles};
        `,
}