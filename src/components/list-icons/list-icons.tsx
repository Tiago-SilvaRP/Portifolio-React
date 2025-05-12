import { TfiEmail } from 'react-icons/tfi';
import { S } from './list-icons.style';
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export const ListIcons = () => {
    return (
        <S.UlIcons>
            <li>
                <S.IconLink to="mailto:tiagosilva_live_2016@outlook.com" target="_blanck" rel="noopener noreferrer"><TfiEmail /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://wa.me/5516992861134" rel="noopener noreferrer" target="_blank"><FaWhatsapp /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://www.linkedin.com/in/tiago-silva-2a0124331/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://github.com/Tiago-SilvaRP" rel="noopener noreferrer" target="_blank"><FaGithub /></S.IconLink>
            </li>
        </S.UlIcons>
    )
}