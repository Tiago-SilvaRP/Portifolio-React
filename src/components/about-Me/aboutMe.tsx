import FotoPerfil from "../../assets/minhaFoto.png";
import CV from '../../assets/cv.pdf';
import { S } from "./aboutMe.styled";

export const AboutMe = () => {

    return (
        <S.Sobre>
            <div>
                <h2>Sobre Mim</h2>
            </div>
            <S.Main>
                <S.ImgOuter>
                    <S.ImgInner>
                        <img src={FotoPerfil} alt="Foto de perfil de Tiago Silva" />
                    </S.ImgInner>
                </S.ImgOuter>
                <S.DivText>
                    <p>
                        <strong>Olá! Me chamo Tiago Silva e sou um desenvolvedor frontend em formação, apaixonado por criar interfaces intuitivas e responsivas!</strong>
                        Atualmente, estou em transição de carreira após 10 anos atuando como motorista. Sempre fui fascinado por tecnologia e, hoje, estou realizando esse sonho por meio do curso DevQuest — uma formação reconhecida pelo MEC que oferece mentoria e suporte de qualidade.
                        Em pouco tempo, já evoluí muito, e sei que, ao conquistar uma oportunidade na área de tecnologia, meu crescimento será ainda mais acelerado. Estou determinado a me tornar um grande desenvolvedor e contribuir com soluções que façam a diferença.
                    </p>

                    <p>
                        Tenho uma forte atenção aos detalhes, priorizando acessibilidade, responsividade e um design visual atraente. Acredito que a tecnologia é uma ferramenta poderosa para resolver problemas e conectar pessoas. Estou sempre em busca de novos desafios que me ajudem a evoluir como desenvolvedor e a causar um impacto positivo através do meu trabalho.
                    </p>

                    <p>
                        Estou sempre me desafiando com novos projetos e participando de comunidades de programação, onde busco feedback de outros desenvolvedores e também compartilho o que já aprendi. Acredito que crescer em comunidade torna o aprendizado mais rico e significativo. 😁
                    </p>
                    <S.Botao>
                        <S.Link to={CV} target="_blank" rel="noopener noreferrer">Veja meu CV</S.Link>
                    </S.Botao>
                </S.DivText>
            </S.Main>
        </S.Sobre>
    )
}