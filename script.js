const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voçê se depara com uma nova tecnologia",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
           ]
        },
        {
            enunciado: "Com a descoberta desta tecnologia, chamda Inteligencia Artificial",
            alternativas: [
                "utiliza uma ferramenta de busca na internet que utiliza IA para que e",
                "Escreve o trabalho com base nas conversas que teve com os colegas, alguma"
            ]
        },
        {
            enunciado: "Após a elaboração do trabalho, a professora realizou um debate",
            alternativas: [
                "Defende a ideia de que a IA pode criar novas oportunidades de emprego",
                "Me preocupo com as pessoas que perderão seus empregos para maquinas e"
            ]
        },
        {
            enunciado: "Ao final da discussão, você precisou criar uma imagem no computador",
            alternativas: [
                "Criar uma imagem utilizando uma plataforma de design como o paint.",
                "Criar uma imagem utilizando um gerador de imagem IA."
            ]
        },
        {
            enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana",
            alternativas: [
                "Escrever comandos para o chat é uma forma de contribuir com o trabalho",
                "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a"
            ]
        },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()
