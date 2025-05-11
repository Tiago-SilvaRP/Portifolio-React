import AppTempo from "../../assets/previsao-tempo.gif";
import Pokemon from "../../assets/gif.gif";
import Formulario from "../../assets/formulario.png";
import FetchGitHub from "../../assets/gif.projeto-Fetch-GitHub.gif";

export const ListaProjetos = [
    {
        titulo: "Previsão do tempo",
        ferramentas: "Projeto feito com HTML, CSS, JavaScript e com consumo de API",
        descricao: "Projeto simples em que o usuário digita o nome de uma cidade e faz a busca clicando no ícone de lupa. A aplicação retorna o nome da cidade, temperatura em graus Celsius, ícone representando a condição climática, além de exibir a umidade do ar e a velocidade do vento em km/h.",
        imagem: AppTempo,
        repo: "https://github.com/Tiago-SilvaRP/App-previsao-do-tempo",
        demo: "https://tiago-silvarp.github.io/App-previsao-do-tempo/",
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
        titulo: "Formulário de validação",
        ferramentas: "Projeto feito com HTML, CSS e JavaScript.",
        descricao: "Realiza a validação do formulário, exibindo mensagens de erro quando os campos são preenchidos incorretamente e alertas de sucesso quando o preenchimento está correto.",
        imagem: Formulario,
        repo: "https://github.com/Tiago-SilvaRP/formularioDeValidacao",
        demo: "https://tiago-silvarp.github.io/formularioDeValidacao/",
    },
    {
        titulo: "API Fetch GitHub",
        ferramentas: "Projeto feito com HTML, CSS, JavaScript e consumo de API",
        descricao: "Exibe a imagem de perfil, nome completo, login, biografia, número de seguidores e de usuários seguidos. Caso o campo de busca esteja vazio, um alerta é exibido na tela. Se o usuário não for encontrado, é apresentada a mensagem: 'Usuário não encontrado'. Também apresenta uma lista com os 10 últimos eventos públicos do usuário no GitHub, dos tipos PushEvent e CreateEvent. Para cada PushEvent, são exibidos o nome do repositório e a mensagem do commit. Já para eventos do tipo CreateEvent, é exibida a mensagem: 'Sem mensagem de commit'.",
        imagem: FetchGitHub,
        repo: "https://github.com/Tiago-SilvaRP/Projeto--Fetch-GitHub",
        demo: "https://tiago-silvarp.github.io/Projeto--Fetch-GitHub/",
    },
];