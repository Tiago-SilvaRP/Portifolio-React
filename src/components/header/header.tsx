import { useState } from "react"
import { S } from "./header.style"
import { useClickOutside } from "../hooks/useClickOutSide";
import  CV  from '../../assets/cv.pdf'

export const Header: React.FC = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => setMenuAberto(!menuAberto);
    const fecharMenu = () => setMenuAberto(false);
    const menuRef = useClickOutside<HTMLDivElement>(fecharMenu);

    const handleItemClick = () => {
        if (menuAberto) {
            fecharMenu();
        }
    };

    return (
        <S.HeaderContainer>
            <S.Logo target="_blank" href={CV}>
                <h2>TS</h2>
            </S.Logo>
            <div ref={menuRef}>
                <S.Nav $ativo={menuAberto} aria-expanded={menuAberto}>
                    <S.Ul onClick={handleItemClick}>
                        <li><S.Ancora href="#home">Inicio</S.Ancora></li>
                        <li><S.Ancora href="#sobre-mim">Sobre Mim</S.Ancora></li>
                        <li><S.Ancora href="#habilidades">Habilidades</S.Ancora></li>
                        <li><S.Ancora href="#projetos">Projetos</S.Ancora></li>
                        <li><S.Ancora href="#contato">Contato</S.Ancora></li>
                    </S.Ul>
                </S.Nav>

                <S.Btn onClick={toggleMenu} $open={menuAberto} aria-label="Abrir Menu">
                    <S.Span $open={menuAberto} />
                    <S.Span $open={menuAberto} />
                    <S.Span $open={menuAberto} />
                </S.Btn>
            </div>
        </S.HeaderContainer>
    )
}