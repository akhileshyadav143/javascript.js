 const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");

    let currentPlayer = "X";
    let gameActive = true;

    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleCellClick(cell, index));
    });

    function handleCellClick(cell, index){

      if(cell.textContent !== "" || !gameActive){
        return;
      }

      cell.textContent = currentPlayer;

      if(checkWinner()){
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
      }

      if(checkDraw()){
        statusText.textContent = "Game Draw!";
        gameActive = false;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }

    function checkWinner(){

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;

        return (
          cells[a].textContent &&
          cells[a].textContent === cells[b].textContent &&
          cells[a].textContent === cells[c].textContent
        );
      });
    }

    function checkDraw(){
      return [...cells].every(cell => cell.textContent !== "");
    }

    function resetGame(){
      cells.forEach(cell => cell.textContent = "");
      currentPlayer = "X";
      gameActive = true;
      statusText.textContent = "Player X's Turn";
    }






