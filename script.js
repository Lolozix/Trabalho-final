let JogadorDaRodada = "X";
let empate = ["", "", "", "", "", "", "", "", ""];
let FimDeJogo = false;

  function reiniciar(){
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++){
      squares[i].textContent = "";
    }

  empate = ["", "", "", "", "", "", "", "", ""];
}
function setupGameBoard() {
  const squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      
      if (!FimDeJogo && empate[i] === "") {
        empate[i] = JogadorDaRodada;
        squares[i].innerText = JogadorDaRodada;

        if (verificarCondicaoDeVitoria()) {
          FimDeJogo = true;
          alert("O jogador " + JogadorDaRodada + " é foda, ele venceu!");
          reiniciar();
        } 

        else if (verificarCondicaoDeEmpate()) {
          FimDeJogo = true;
          alert("Vocês são péssimos, deu empate!");
          reiniciar();
        } 

        else {
          JogadorDaRodada = JogadorDaRodada === "X" ? "O" : "X";
        }
      }
    });
  }
}

function verificarCondicaoDeVitoria() {
  const condicaoDeVitoria = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 

    [0, 4, 8], 
    [2, 4, 6]
  ];

  for (const condicao of condicaoDeVitoria) {
    const [l, s, d] = condicao;

    if (empate[l] === empate[s] && empate[s] === empate[d] && empate[l] !== "") {
      return true;
    }
  }

  return false;
}

function verificarCondicaoDeEmpate() {
  for (const valor of empate) {

    if (valor === "") {
      return false;
    }
  }

  return true;
}

setupGameBoard();