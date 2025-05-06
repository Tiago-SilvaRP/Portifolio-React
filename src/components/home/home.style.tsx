import styled from "styled-components";

export const S = {
    Section: styled.section`
        flex: 1;
        display: flex;
        background-color: #8dbce7;
        width: 100vw;
        justify-content: center;
        align-items: center;
    `,

    TextoHome: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px;
        padding: 20px;
        text-align: center;
        animation: leftTextInput 1.5s ease-in-out;

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
        }

        h2 {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 15px;
            color: #333;
        }

        @keyframes leftTextInput {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            50% {
                opacity: 1;
                transform: translateX(20px);
            }
                to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `,

    UlOption: styled.ul`
        display: flex;
        font-weight: 600;
        gap: 10px;
        margin-bottom: 10px;
    `,

    DivImag: styled.div`
        margin: 30px;
        max-width: 450px;
        background: radial-gradient(circle, #000, violet);
        border-radius: 50%;
        box-shadow: 3px 3px 3px;
        flex: 0 0 50%;
    `,

    DivImgInner: styled.div`
        width: 450px;
        border-radius: 50%;
        box-shadow: inset 3px 3px 3px;
    `,


    Img: styled.img`
        max-width: 100%;
        border-radius: 50%;
        border: solid transparent 10px;  
        `
}