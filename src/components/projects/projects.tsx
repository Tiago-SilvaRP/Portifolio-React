import { Link } from "react-router-dom";
import { S } from "./projects.style";
import { useState } from "react";
import { ListaProjetos } from "../dataProject/dataProject";
import { Button } from "../button/button";
import Seta from "../../assets/imagemSeta.png";


export const Projects = () => {
    const [index, setIndex] = useState(0);

    const back = () => {
        setIndex((current) => (current - 1 + ListaProjetos.length) % ListaProjetos.length)
    }
    const next = () => {
        setIndex((current) => (current + 1) % ListaProjetos.length)
    }

    const projetoAtual = ListaProjetos[index];
    return (
        <S.ContainerSlide>
            <h2>Projetos</h2>
            <S.Carrossel>
            <Button onClick={back}>
                <S.ImgSetaVoltar src={Seta}/>
            </Button>

                <S.ContainerProject>
                    <h3>{projetoAtual.titulo}</h3>
                    <S.Info>
                        <img src={projetoAtual.imagem} alt={`Imagem do projeto ${projetoAtual.titulo}`} />
                        <S.Details>
                            <p>{projetoAtual.ferramentas}</p>
                            <p>{projetoAtual.descricao}</p>

                            <Link to={projetoAtual.repo} target="_blank" rel="noopener noreferrer">
                                🔗 Ver repositório do projeto.
                            </Link>
                            <Link to={projetoAtual.demo} target="_blank" rel="noopener noreferrer">
                                🔗 Ver projeto no GitHub pages.</Link>
                        </S.Details>
                    </S.Info>
                </S.ContainerProject>
                <Button onClick={next}>
                    <img src={Seta}/>
                </Button>
            </S.Carrossel>
        </S.ContainerSlide>
    )
}