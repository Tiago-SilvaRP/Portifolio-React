import FotoPerfil from "../../assets/minhaFoto.png";
import CV from '../../assets/cv.pdf';

export const SobreMim = () => {

    return (
        <section>
            <div>
                <h2>Sobre Mim</h2>
            </div>
            <div>
                <img src={FotoPerfil} alt="Foto de perfil de Tiago Silva" />
            </div>
            <div>
                <p>
                    <strong>Olá! Me chamo Tiago Silva e sou um desenvolvedor frontend em formação, apaixonado por criar interfaces intuitivas e responsivas!</strong>
                    Estou em um processo de transição profissional, trabalho como motorista a 7 anos sempre amei tecnologia atualmente estou cursando o Dev Quest que é um curso reconhecido pelo MEC e me proporcina mentoria e suporte, com isso evolui muito em pouco tempo, com um emprego dentro da area de tecnologia minha alavancagemem conhecimento será muito maior que vai me tornar um grande desenvolvedor.
                </p>

                <p>Tenho uma forte atenção aos detalhes, priorizando acessibilidade, responsividade e um design visual atraente. Acredito que a tecnologia é uma ferramenta poderosa para resolver problemas e conectar pessoas, e estou sempre em busca de novos desafios para crescer como profissional.</p>


                <p>
                    Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar
                    feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já
                    aprendi. 😁
                </p>
                <div>
                    <a href={CV} target="_blank">Veja meu CV</a>
                </div>
            </div>
        </section>
    )
}