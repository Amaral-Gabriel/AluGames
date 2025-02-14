const jogos = [
    { Nome: "Monopoly", id: 1, disponibilidade: "disponivel" },
    { Nome: "Ticket to Ride", id: 2, disponibilidade: "disponivel" },
    { Nome: "Takenoko", id: 3, disponibilidade: "indisponivel" }
];


function alterarStatus(id) {
    let jogoEmQuestao = jogos.find(jogo => jogo.id == id);

    if (jogoEmQuestao.disponibilidade == "disponivel") {
        console.log("Disponivel")
    } else {
        console.log("indisponivel")
    }

    console.log(jogoEmQuestao)



}