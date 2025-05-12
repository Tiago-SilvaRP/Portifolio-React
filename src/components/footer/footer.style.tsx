import { Link } from "react-router-dom";
import styled from "styled-components";

export const S = {

    Footer: styled.footer`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px;
        background: #141b30;
        gap: 15px;
        color: #6cb4ff;


        p {
            font-size: 19px;
        }
    `,

    StyledLink: styled(Link)`
        margin-left: 10px;
        color: #d3d7e0;
    `,


}