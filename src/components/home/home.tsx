import FotoPerfil from "../../assets/minhaFoto.png"
import { ListIcons } from "../list-icons/list-icons"
import { S } from "./home.style"

export const Home = () => {
    return (
        <S.Section>
            <S.TextoHome>
                <p>Olá, seja bem-vindo(a) ao meu portfólio! 👋</p>
                <h1>Sou Tiago Silva</h1>
                <h2>Desenvolvedor Frontend</h2>
                <p>Aqui você encontra informações sobre mim, minhas habilidades, projetos e formas de contato.</p>
                <p>Use o menu acima para navegar pelas seções do portfólio.</p>

                <S.UlOption>
                    <li>Home</li>
                    <li>Sobre Mim</li>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </S.UlOption>

                <ListIcons />

            </S.TextoHome>

            <S.divImag>
                <S.Img src={FotoPerfil} alt="Foto de perfil de Tiago Silva" />
            </S.divImag>
        </S.Section >
    )
}