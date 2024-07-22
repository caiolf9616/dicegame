let primeiroNumero = Math.floor(Math.random() * 6) + 1  
let segundoNumero = Math.floor(Math.random() * 6) + 1  

const imgPlayer1 = document.querySelector('#player1')
const imgPlayer2 = document.querySelector('#player2')

const img1 = `imagens/dice${primeiroNumero}.png`
const img2 = `imagens/dice${segundoNumero}.png`


imgPlayer1.src = img1
imgPlayer2.setAttribute('src',img2)

const h1 = document.querySelector("h1")

if(primeiroNumero > segundoNumero){
    h1.innerText = 'Player 1 Venceu! 🏆'
}
else if (primeiroNumero === segundoNumero){
    h1.innerText = 'Empate!'
}
else{
    h1.innerText = 'Player 2 Venceu! 🏆'
}