import AppTempo from "../../assets/app.png";
import Pokemon from "../../assets/gif.gif";
import Formulario from "../../assets/formulario.png";
import FetchGitHUb from "../../assets/gif.projeto-Fetch-GitHub.gif"
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <div>
            <h2>Meus Projetos!</h2>

            <div>
                <h2>Previsão do tempo</h2>
                <Link to="https://github.com/Tiago-SilvaRP/App-previsao-do-tempo" target="_blanck" rel="noopener noreferrer">🔗 Ver repositório</Link>
                <img src={AppTempo} alt="Imagem da interface do projeto Previsão do tempo" />
                <div>
                    <p>Projeto feito com HTML, CSS, JavaScript e consumo de API</p>
                    <Link to="https://tiago-silvarp.github.io/App-previsao-do-tempo/" target="_blank"
                        rel="noopener noreferrer">🔗 Ver no GitHub Pages</Link>
                </div>
            </div>

            <div>
                <h2>Pokemon</h2>
                <Link to="https://github.com/Tiago-SilvaRP/pokemon-react" target="_blanck" rel="noopener noreferrer">🔗 Ver repositório</Link>
                <img src={Pokemon} alt="Gif de funcionamento da página Pokemon" />
                <div>
                    <p>Projeto feito com HTML, CSS, JavaScript, consumo de API, React, Vite e Context-api</p>
                    <Link to="https://pokemon-react-snowy-omega.vercel.app/" target="_blank" rel="noopener noreferrer">🔗 Ver
                        no GitHub Pages</Link>
                </div>
            </div>

            <div>
                <h2>Formulário de validação</h2>
                <Link to="https://github.com/Tiago-SilvaRP/formularioDeValidacao" target="_blanck" rel="noopener noreferrer">🔗 Ver repositório</Link>
                <img src={Formulario} alt="Imagem da interface do projeto de validação de formulário" />

                <div>
                    <p>Projeto feito com HTML, CSS e JavaScript.</p>
                    <Link to="https://tiago-silvarp.github.io/formularioDeValidacao/" target="_blank"
                        rel="noopener noreferrer">🔗 Ver no GitHub Pages</Link>
                </div>
            </div>

            <div>
                <h2>API Fetch GitHub</h2>
                <Link to="https://github.com/Tiago-SilvaRP/Projeto--Fetch-GitHub" target="_blanck" rel="noopener noreferrer">🔗 Ver repositório</Link>
                <img src={FetchGitHUb} alt="Gif com demonstração de funcionamento da pagina." />

                <div>
                    <p>Projeto feito com HTML, CSS, JavaScript e consumo de API</p>
                    <Link to="https://tiago-silvarp.github.io/Projeto--Fetch-GitHub/">🔗 Ver no GitHub Pages</Link>
                
                </div>
            </div>

        </div>
    )
}