import { Link } from "react-router-dom";
import styled from "styled-components";
import { styleHover } from "../header/header.style";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const S = {
    UlIcons: styled.ul`
        display: flex;
        gap: 15px;
    `,

    IconLink: styled(Link)`
        font-size: 30px;
        color:#6cb4ff;
    `,

    TfiEmail: styled(TfiEmail)`
        ${styleHover};
    `,

    FaWhatsapp: styled(FaWhatsapp)`
        ${styleHover};
    `,
    
    FaLinkedin: styled(FaLinkedin)`
        ${styleHover};
    `,

    FaGithub: styled(FaGithub)`
        ${styleHover};
    `,
}

