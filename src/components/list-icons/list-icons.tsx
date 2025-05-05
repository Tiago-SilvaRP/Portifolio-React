import { S } from './list-icons.style';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

export const ListIcons = () => {
    return (
        <S.UlIcons>
            <li><S.IconLink to="https://www.linkedin.com/in/tiago-silva-2a0124331/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></S.IconLink></li>
            <li><S.IconLink to="https://wa.me/5516992861134" rel="noopener noreferrer" target="_blank"><FaWhatsapp /></S.IconLink></li>
            <li><S.IconLink to="https://github.com/Tiago-SilvaRP" rel="noopener noreferrer" target="_blank"><FaGithub /></S.IconLink></li>
            <li><S.IconLink to="https://www.instagram.com/tiago_silvarp" rel="noopener noreferrer" target="_blank"><FaInstagram /></S.IconLink></li>
        </S.UlIcons>
    )
}