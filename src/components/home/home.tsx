import FotoPerfil from "../../assets/minhaFoto.png"
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
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

                <S.UlIcons>
                    <li><a href="https://www.linkedin.com/in/tiago-silva-2a0124331/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                    <li><a href="https://wa.me/5516992861134" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                    <li><a href="https://github.com/Tiago-SilvaRP" rel="noopener noreferrer"><FaGithub /></a></li>
                    <li><a href="https://www.instagram.com/tiago_silvarp" rel="noopener noreferrer"><FaInstagram /></a></li>
                </S.UlIcons>
            </S.TextoHome>

            <S.divImag>
                <S.Img src={FotoPerfil} alt="Minha foto de perfil" />
            </S.divImag>
        </S.Section >
    )
}