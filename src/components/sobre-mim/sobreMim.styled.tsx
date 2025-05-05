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

        img {
            width: 100%;
            box-shadow: inset 3px 3px 3px, 3px 3px 3px;
            border-radius: 10px;
            background: radial-gradient(circle, #000, violet);
        }
    `,

    ImgInner: styled.div`
        box-shadow: inset 3px 3px 3px;
        border-radius: 10px;
        padding: 10px;
    `,

    DivText: styled.div`
        max-width: 600px;

        p{
            font-size: 19px;
        }
    `,
}