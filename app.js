const jogos = [
    { Nome: "Monopoly", id: 1, disponibilidade: "disponivel" },
    { Nome: "Ticket to Ride", id: 2, disponibilidade: "disponivel" },
    { Nome: "Takenoko", id: 3, disponibilidade: "indisponivel" }
];


function alterarStatus(id) {
    let jogoEmQuestao = jogos.find(jogo => jogo.id == id);

// Falta resolver o problema da imagem e do botao na hora da troca de classe
    

    if (jogoEmQuestao.disponibilidade == "disponivel") {
        
        elementoDaLista = document.getElementById(`game-${id}`);
        
        imagem = elementoDaLista.querySelector(".dashboard__item__img");
        botao = elementoDaLista.querySelector(".dashboard__item__button");
        botao.innerText = "Devolver"

        if (imagem) {
            imagem.classList.remove("dashboard__item__img");
            imagem.classList.add("dashboard__item__img", "dashboard__item__img--rented");
        }
        if (botao) {
            botao.classList.remove("dashboard__item__button");
            botao.classList.add("dashboard__item__button", "dashboard__item__button--return");
        }
        jogoEmQuestao.disponibilidade = "indisponivel";
        
    } else {
        
        elementoDaLista = document.getElementById(`game-${id}`);
        
        imagem = elementoDaLista.querySelector(".dashboard__item__img");
        botao = elementoDaLista.querySelector(".dashboard__item__button");
        botao.innerText = "Alugar"

        if (imagem) {
            imagem.classList.remove("dashboard__item__img--rented");
            imagem.classList.add("dashboard__item__img");
        }
        if (botao) {
            botao.classList.remove("dashboard__item__button--return");
            botao.classList.add("dashboard__item__img");
        }
        jogoEmQuestao.disponibilidade = "disponivel";
    }
    console.log(jogoEmQuestao)
}