import FotoPerfil from "../../assets/minhaFoto.png";
import { ListIcons } from "../list-icons/list-icons";
import { S } from "./home.style";

export const Home = () => {
    return (
        <S.Section>
            <S.TextoHome>
                <p>Olá, seja bem-vindo(a) ao meu portfólio! 👋</p>
                <h1>Sou Tiago Silva</h1>
                <h2>Desenvolvedor Frontend</h2>
                <p>Neste portfólio, compartilho um pouco da minha história, minhas habilidades em desenvolvimento frontend e os projetos que venho construindo.</p>
                <p>Fique à vontade para explorar o menu acima e conhecer mais sobre quem sou, minhas habilidades e projetos. Para entrar em contato, utilize os ícones no rodapé ou aqui mesmo na seção Home.</p>

                <ListIcons />

            </S.TextoHome>

            <S.DivImag>
                <S.DivImgInner>
                    <S.Img src={FotoPerfil} alt="Foto de perfil de Tiago Silva" />
                </S.DivImgInner>
            </S.DivImag>
        </S.Section >
    )
}