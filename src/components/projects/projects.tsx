import { S } from "./projects.style";
import { useEffect, useState } from "react";
import { ListaProjetos } from "../dataProject/dataProject";
import { Button } from "../button/button";
import Seta from "../../assets/imagemSeta.png";


export const Projects = () => {
    const [index, setIndex] = useState(0);
    
    const back = () => {
        setIndex((current) => (current - 1 + ListaProjetos.length) % ListaProjetos.length);
    }
    const next = () => {
        setIndex((current) => (current + 1) % ListaProjetos.length);
    }
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") return next();
            if (e.key === "ArrowLeft") return back();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);
    
    const projetoAtual = ListaProjetos[index];
    return (
        <S.ContainerSlide>
            <h2>Projetos</h2>
            <S.Carrossel>
                <Button onClick={back}>
                    <S.ImgSetaVoltar src={Seta} />
                </Button>

                <S.ContainerProject>
                    <h3>{projetoAtual.titulo}</h3>
                    <S.Info>
                        <img src={projetoAtual.imagem} alt={`Imagem do projeto ${projetoAtual.titulo}`} />
                        <S.Details>
                            <p>{projetoAtual.ferramentas}</p>
                            <p>{projetoAtual.descricao}</p>

                            <S.StykedLink to={projetoAtual.repo} target="_blank" rel="noopener noreferrer">
                                <strong>🔗 Ver repositório do projeto.</strong>
                            </S.StykedLink>
                            <S.StykedLink to={projetoAtual.demo} target="_blank" rel="noopener noreferrer">
                                <strong>🔗 Ver projeto no GitHub pages.</strong></S.StykedLink>
                        </S.Details>
                    </S.Info>
                </S.ContainerProject>
                <Button onClick={next}>
                    <img src={Seta} />
                </Button>
            </S.Carrossel>
        </S.ContainerSlide>
    )
}