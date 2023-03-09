let playTime, player1, player2
let resultado1 = 0
let resultado2 = 0
let empates = 0
let gameOver = true

document.getElementById("play").addEventListener("click",function(){
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  playTime = player1;

  if (player1.length != 0 && player1 != player2 && player2.length != 0) {
    const input = document.getElementById("input");
    input.style.display = "none";
    const placar = document.querySelector("div#placar>p");
    placar.innerText = `${player1} : ${resultado1}\n${player2} : ${resultado2}\nempates : ${empates}`;
    document.body.children[6].style.display = 'grid'
    const area = document.getElementsByClassName("area");
    for (let i = 0; i < area.length; i++) {
      area[i].addEventListener("click", jogada);
    }
  } else {
    alert("ERRO: verifique os nomes dos jogadores");
  }
})

function jogada (){
 if(gameOver){
   if(playTime == player1){
      this.innerText = 'X'
      this.setAttribute('jogada',player1)
      playTime = player2
    }else{
    this.innerText ='O'
    this.setAttribute('jogada',player2)
    playTime = player1
    }
    this.removeEventListener("click", jogada);
    atualizarMostrador()
  }else{alert('fim de jogo')}
}

function atualizarMostrador(){
  const a1 = document.getElementById('area-1').getAttribute('jogada')
  const a2 = document.getElementById('area-2').getAttribute('jogada')
  const a3 = document.getElementById('area-3').getAttribute('jogada')

  const b1 = document.getElementById('area-4').getAttribute('jogada')
  const b2 = document.getElementById('area-5').getAttribute('jogada')
  const b3 = document.getElementById('area-6').getAttribute('jogada')

  const c1 = document.getElementById('area-7').getAttribute('jogada')
  const c2 = document.getElementById('area-8').getAttribute('jogada')
  const c3 = document.getElementById('area-9').getAttribute('jogada')

  let mostrarVencedor = document.querySelector('div#mostrarVencedor>p')
  let vencedor = ''
  if (
    (a1 == a2 && a1 == a3 && a1 != "") ||
    (a1 == b1 && a1 == c1 && a1 != "") ||
    (a1 == b2 && a1 == c3 && a1 != "")
  ){
    vencedor = a1;
    gameOver = false;
    mostrarVencedor.innerText = `ultimo Vencedor: ${a1}`
    
    if(vencedor == player1){
      resultado1++;
    }else if(vencedor == player2) {
      resultado2++;
    }
  }else if(
    (a2 == b2 && b2 == c2 && b2 != "") ||
    (b1 == b2 && b2 == b3 && b2 != "") ||
    (a3 == b2 && b2 == c1 && b2 != "")
  ){
    vencedor = b2;
    gameOver = false
    mostrarVencedor.innerText = `ultimo Vencedor: ${b2}`

    if(vencedor == player1){
      resultado1++;
    }else if(vencedor == player2) {
      resultado2++;
    }
  }else if(
    (c3 == b3 && c3 == a3 && c3 != "") ||
    (c3 == c2 && c3 == c1 && c3 != "")
  ){
    vencedor = c3;
    gameOver = false;
    mostrarVencedor.innerText = `ultimo Vencedor: ${c3}`;

    if (vencedor == player1) {
      resultado1++;
    } else if (vencedor == player2) {
      resultado2++;
    }
   }
  if(
      (a1!=''&&a2!=''&&a3!='')&&
      (b1!=''&&b2!=''&&b3!='')&&
      (c1!=''&&c2!=''&&c3!='')&&
      (vencedor =='')
    ){
      mostrarVencedor.innerText = `ultima partida: empate`;
      gameOver = false
      empates++
     }
     const placar = document.querySelector("div#placar>p");
     placar.innerText = `${player1} : ${resultado1}\n${player2} : ${resultado2}\nempates : ${empates}`;

     if(!gameOver){reiniciar()}
}
 
function reiniciar(){
  const area = document.getElementsByClassName("area");
    for (let i = 0; i < area.length; i++) {
      area[i].addEventListener("click", jogada)
      area[i].setAttribute('jogada','')
      area[i].innerText = ''
    }
    gameOver = true
    vencedor = ''
  }
  
function switchTheme(){
  document.body.classList.toggle('is-dark')
  document.body.classList.toggle('is-light')
  document.body.children[6].classList.toggle('tabuleiro')
  document.body.children[6].classList.toggle('arena')

}



document.getElementById('tema').addEventListener('click',switchTheme)
