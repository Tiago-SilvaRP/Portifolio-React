import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaQuestionCircle, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiJest, SiRedux, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { S } from "./skills.styled";

export const Abilities = () => {
    return (
        <S.Section>
            <S.Container>
                <h2>Habilidades</h2>

                <S.UlIcons>
                    <li title="HTML"><FaHtml5 color="#e34f26" /></li>
                    <li title="CSS"><FaCss3Alt color="#1572B6" /></li>
                    <li title="JavaScript"><IoLogoJavascript color="#f7df1e" /></li>
                    <li title="Git"><FaGitAlt color="#f05032" /></li>
                    <li title="GitHub"><FaGithub color="#181717" /></li>
                    <li title="React"><FaReact color="#61dafb" /></li>
                    <li title="TypeScript"><SiTypescript color="#3178c6" /></li>
                    <li title="Jest"><SiJest color="#99425b" /></li>
                    <li title="Redux"><SiRedux color="#764abc" /></li>
                    <li title="Figma"><FaFigma color="#f24e1e" /></li>
                    <li title="Styled-components"><SiStyledcomponents color="#db7093" /></li>
                </S.UlIcons>
                <span>
                    <FaQuestionCircle style={{ marginRight: "8px" }} />
                    Passe o mouse sobre os ícones para ver o nome da habilidade.
                </span>

            </S.Container>
        </S.Section>
    )
}