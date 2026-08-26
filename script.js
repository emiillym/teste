const perguntas = [
    {
        pergunta: "Qual número completa a sequência? 2, 4, 8, 16, ?",
        opcoes: ["20", "24", "32", "36"],
        correta: 2
    },

    {
        pergunta: "Se todos os gatos são animais e alguns animais são pretos, podemos afirmar que:",
        opcoes: [
            "Todos os gatos são pretos",
            "Alguns gatos podem ser pretos",
            "Nenhum gato é preto",
            "Gatos não são animais"
        ],
        correta: 1
    },

    {
        pergunta: "Qual palavra não pertence ao grupo?",
        opcoes: [
            "Maçã",
            "Banana",
            "Cenoura",
            "Laranja"
        ],
        correta: 2
    },

    {
        pergunta: "Se 3 máquinas fazem 3 objetos em 3 minutos, quanto tempo 1 máquina leva para fazer 1 objeto?",
        opcoes: [
            "1 minuto",
            "3 minutos",
            "6 minutos",
            "9 minutos"
        ],
        correta: 1
    },

    {
        pergunta: "Qual número vem depois? 1, 1, 2, 3, 5, 8, ?",
        opcoes: [
            "10",
            "11",
            "13",
            "15"
        ],
        correta: 2
    }
];

let questaoAtual = 0;
let pontos = 0;


function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}


function iniciarTeste() {

    questaoAtual = 0;
    pontos = 0;

    mostrarTela("quiz");

    mostrarQuestao();
}


function mostrarQuestao() {

    const q = perguntas[questaoAtual];

    document.getElementById("numeroQuestao").textContent =
        `${questaoAtual + 1}/${perguntas.length}`;

    document.getElementById("pontuacao").textContent =
        `${pontos} pontos`;

    document.getElementById("pergunta").textContent =
        q.pergunta;

    const progresso =
        (questaoAtual / perguntas.length) * 100;

    document.getElementById("progressoQuiz").style.width =
        progresso + "%";


    const container =
        document.getElementById("opcoes");

    container.innerHTML = "";


    q.opcoes.forEach((opcao, index) => {

        const botao = document.createElement("div");

        botao.className = "opcao";

        botao.textContent = opcao;

        botao.onclick = () => responder(index);

        container.appendChild(botao);
    });
}


function responder(index) {

    if (index === perguntas[questaoAtual].correta) {
        pontos++;
    }

    questaoAtual++;

    if (questaoAtual >= perguntas.length) {

        mostrarTela("processando");

        analisar();

    } else {

        mostrarQuestao();
    }
}


function analisar() {

    let progresso = 0;

    const textos = [
        "Comparando respostas...",
        "Calculando inteligência...",
        "Consultando especialistas...",
        "Medindo capacidade cerebral...",
        "Quase terminando..."
    ];

    const intervalo = setInterval(() => {

        progresso += Math.floor(Math.random() * 15) + 8;

        if (progresso >= 100) {

            progresso = 100;

            clearInterval(intervalo);

            setTimeout(() => {

                document.getElementById("valorQI").textContent =
                    142;

                mostrarTela("resultado");

            }, 700);
        }

        document.getElementById("barraAnalise").style.width =
            progresso + "%";

        document.getElementById("porcentagemAnalise").textContent =
            progresso + "%";

        const indice =
            Math.min(
                Math.floor(progresso / 20),
                textos.length - 1
            );

        document.getElementById("textoAnalise").textContent =
            textos[indice];

    }, 450);
}


function programaEspecial() {

    mostrarTela("especial");

    setTimeout(() => {

        mostrarTela("clonagem");

        iniciarClonagem();

    }, 3000);
}


function iniciarClonagem() {

    let progresso = 0;

    const intervalo = setInterval(() => {

        progresso += Math.floor(Math.random() * 12) + 5;

        if (progresso >= 100) {

            progresso = 100;

            clearInterval(intervalo);

            setTimeout(() => {

                mostrarTela("transferencia");

                iniciarTransferencia();

            }, 700);
        }

        document.getElementById("barraClonagem").style.width =
            progresso + "%";

        document.getElementById("porcentagemClonagem").textContent =
            progresso + "%";

    }, 400);
}


function iniciarTransferencia() {

    let progresso = 0;

    const intervalo = setInterval(() => {

        progresso += 3;

        if (progresso >= 99) {

            progresso = 99;

            clearInterval(intervalo);

            document.getElementById(
                "textoTransferencia"
            ).textContent =
                "Finalizando transferência...";

            setTimeout(() => {

                mostrarTela("erro");

            }, 1800);
        }

        document.getElementById("barraDinheiro").style.width =
            progresso + "%";

        document.getElementById("porcentagemDinheiro").textContent =
            progresso + "%";

    }, 70);
          }
