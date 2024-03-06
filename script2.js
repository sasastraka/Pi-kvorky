let player = true

let gameActive = true

let statusText = document.getElementById('status')
let winnerMessage = document.getElementById('winnerMessage')
let resetBtn = document.getElementById('resetBtn')
let cells = document.getElementsByClassName('cell')

startGame()

function resetBtnClick() {
    player = true
    gameActive = true
    startGame()
}

function startGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
    }
    statusText.textContent = 'Hraje: X'
    winnerMessage.textContent = ''
    resetBtn.innerText = 'Reset'
}

console.log(cells)

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        if (cells[i].innerHTML === '' && gameActive) {
            cells[i].innerHTML = player ? 'X' : 'O'
            statusText.textContent = player ? 'Hraje: O' : 'Hraje: X'
            player = !player
            checkWinner()
            if ([...cells].every(c => c.innerHTML !== '')) {
                winnerMessage.textContent = 'Remíza'
                gameActive = false
            }
            if (!gameActive) {
                resetBtn.innerText = 'Nová hra'
            }
        }
    })
}

function checkWinner() {
    if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[0].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[0].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML && cells[3].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[3].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[6].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[6].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML && cells[0].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[0].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML && cells[1].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[1].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML && cells[2].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[2].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[0].innerHTML} vyhrál!`
        gameActive = false
    }
    if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML !== '') {
        winnerMessage.textContent = `Hrač ${cells[2].innerHTML} vyhrál!`
        gameActive = false
    }
}