import { S } from './list-icons.style';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

export const ListIcons = () => {
    return (
        <S.UlIcons>
            <li><a href="https://www.linkedin.com/in/tiago-silva-2a0124331/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://wa.me/5516992861134" rel="noopener noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://github.com/Tiago-SilvaRP" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.instagram.com/tiago_silvarp" rel="noopener noreferrer"><FaInstagram /></a></li>
        </S.UlIcons>
    )
}