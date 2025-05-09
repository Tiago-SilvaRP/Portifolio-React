import AppTempo from "../../assets/app.png";
import Pokemon from "../../assets/gif.gif";
import Formulario from "../../assets/formulario.png";
import FetchGitHub from "../../assets/gif.projeto-Fetch-GitHub.gif";

export const ListaProjetos = [
    {
        titulo: "Previsão do tempo",
        descricao: "Projeto feito com HTML, CSS, JavaScript e com consumo de API",
        informacao: "Projeto simples em que o usuário digita o nome de uma cidade e faz a busca clicando no ícone de lupa. A aplicação retorna o nome da cidade, temperatura em graus Celsius, ícone representando a condição climática, além de exibir a umidade do ar e a velocidade do vento em km/h.",
        imagem: AppTempo,
        repo: "https://github.com/Tiago-SilvaRP/App-previsao-do-tempo",
        demo: "https://tiago-silvarp.github.io/App-previsao-do-tempo/",
    },
    {
        titulo: "Pokemon",
        descricao: "Projeto feito com HTML, CSS, JS, consumo de API, React, Vite e Context-api.",
        informacao: "O usuário pode carregar mais Pokémons clicando no botão ao fim da lista. Ao clicar em um card de Pokémon, é redirecionado para uma página de detalhes. Nessa view, é possível voltar para a home clicando no ícone ou no texto 'Home'. Também há suporte à troca de tema (claro/escuro).",
        imagem: Pokemon,
        repo: "https://github.com/Tiago-SilvaRP/pokemon-react",
        demo: "https://pokemon-react-snowy-omega.vercel.app/",
    },
    {
        titulo: "Formulário de validação",
        descricao: "Projeto feito com HTML, CSS e JavaScript.",
        imagem: Formulario,
        repo: "https://github.com/Tiago-SilvaRP/formularioDeValidacao",
        demo: "https://tiago-silvarp.github.io/formularioDeValidacao/",
    },
    {
        titulo: "API Fetch GitHub",
        descricao: "Projeto feito com HTML, CSS, JavaScript e consumo de API",
        imagem: FetchGitHub,
        repo: "https://github.com/Tiago-SilvaRP/Projeto--Fetch-GitHub",
        demo: "https://tiago-silvarp.github.io/Projeto--Fetch-GitHub/",
    },
];