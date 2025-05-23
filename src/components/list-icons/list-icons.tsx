import { S } from './list-icons.style';

export const ListIcons = () => {
    return (
        <S.UlIcons>
            <li>
                <S.IconLink to="mailto:tiagosilva_developerweb@outlook.com" target="_blanck" rel="noopener noreferrer"><S.TfiEmail /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://wa.me/5516992861134" rel="noopener noreferrer" target="_blank"><S.FaWhatsapp /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://www.linkedin.com/in/tiagosilva-dev/" target="_blank" rel="noopener noreferrer"><S.FaLinkedin /></S.IconLink>
            </li>
            <li>
                <S.IconLink to="https://github.com/Tiago-SilvaRP" rel="noopener noreferrer" target="_blank"><S.FaGithub /></S.IconLink>
            </li>
        </S.UlIcons>
    )
}