import AppTempo from "../assets/previsao-tempo.gif";
import Pokemon from "../assets/gif.gif";
import FetchGitHub from "../assets/gif.projeto-Fetch-GitHub.gif";
import Ecomerce from "../assets/e-comerce-doce.png";

export const ListaProjetos = [
    {
        titulo: "Previsão do tempo",
        ferramentas: "Projeto feito com HTML, CSS, JavaScript e com consumo de API",
        descricao: "Aplicação de clima onde o usuário busca uma cidade e recebe informações em tempo real: temperatura em °C, condição climática com ícone ilustrativo, umidade do ar e velocidade do vento.",
        imagem: AppTempo,
        repo: "https://github.com/Tiago-SilvaRP/App-previsao-do-tempo",
        demo: "https://tiago-silvarp.github.io/App-previsao-do-tempo/",
    },
    {
        titulo: "E-comerce-doce",
        ferramentas: "HTML, CSS e JavaScript",
        descricao: "Loja de sobremesas com carrinho de compras em HTML, CSS e JavaScript puro. Permite adicionar, atualizar e remover itens, finalizar compras e mantém o estado no localStorage. O site é totalmente responsivo.",
        imagem: Ecomerce,
        repo: "https://github.com/Tiago-SilvaRP/e-comerce-doces",
        demo:  "https://tiago-silvarp.github.io/e-comerce-doces/",
    },
    {
        titulo: "Pokemon",
        ferramentas: "Projeto feito com HTML, CSS, JS, consumo de API, React, Vite e Context-api.",
        descricao: "O usuário pode carregar mais Pokémons clicando no botão ao fim da lista. Ao clicar em um card de Pokémon, é redirecionado para uma página de detalhes. Nessa view, é possível voltar para a home clicando no ícone ou no texto 'Home'. Também há suporte à troca de tema (claro/escuro).",
        imagem: Pokemon,
        repo: "https://github.com/Tiago-SilvaRP/pokemon-react",
        demo: "https://pokemon-react-snowy-omega.vercel.app/",
    },
    {
        titulo: "API Fetch GitHub",
        ferramentas: "Projeto feito com HTML, CSS, JavaScript e consumo de API",
        descricao: "Exibe perfil do usuário do GitHub (imagem, nome, login, bio, seguidores e seguindo). Mostra os 10 últimos eventos públicos (PushEvent e CreateEvent). Em PushEvent, exibe repositório e mensagem do commit; em CreateEvent, mostra 'Sem mensagem de commit'. Inclui alertas para busca vazia e usuário não encontrado.",
        imagem: FetchGitHub,
        repo: "https://github.com/Tiago-SilvaRP/Projeto--Fetch-GitHub",
        demo: "https://tiago-silvarp.github.io/Projeto--Fetch-GitHub/",
    },
];