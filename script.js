const cellEls = document.querySelectorAll(".cell")
const restart = document.querySelector(".restart")
const message = document.querySelector(".message")
const xClass = "x"
const oClass = "o"

let oTurn;

function startGame() {
    oTurn = false
    cellEls.forEach(el => {
        el.addEventListener("click", handleClick)
    })
    
}

startGame()
function handleClick(e) {
    const currentCell = e.target
    //identifying className
    let currentCellTurn = oTurn ? oClass : xClass
    //placing letter
    placeLetter(currentCell, currentCellTurn)
    //swapping turns
    oTurn = !oTurn
}

function placeLetter(cell, turn) {
    oTurn ? (cell.innerText = "O") : (cell.innerText = "X")
    cell.classList.add(turn)
    cell.removeEventListener("click", handleClick)
    message.innerHTML = oTurn ? "X's turn" : "O's turn"
    
}