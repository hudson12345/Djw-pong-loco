let canvasPong = document.getElementById('canvas')/*varial para manipular o elemento canvas atraves do id*/
let quadro = canvasPong.getContext('2d')/*deixa o canvas pronto para receber desenhos 2D*/
let placar = canvasPong.getContext('2d')
placar.fillStyle = "green"
quadro.fillStyle = "red"/*Colocando uma cor na variavel quadro*/

let player1 = {
    px:80,
    py:260,
    tx:30,
    ty:200,
}

let player2 = {
    px:1150,
    py:260,
    tx:30,
    ty:200,
}



let bolinha = {
    px:620,
    py:360,
    tx:30,
    ty:30,
    dir:8,
}

placar.font = '20px arial'
let pts1 = 0
let pts2 = 0

function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tx,player1.ty)
    quadro.fillRect(player2.px,player2.py,player2.tx,player2.ty)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
    placar.fillText(`Player 1:  ${pts1}`,300,50)
    placar.fillText(`Player 2:  ${pts2}`,900,50)
}

document.addEventListener('keydown', function () {player1.py += 10})


function moverbolinha() {
    bolinha.px += bolinha.dir

    if(bolinha.px > 1150) {
        bolinha.dir *= -1
    }
    else if(bolinha.px < 80){
        bolinha.dir *= -1
    }
}

function main() {
    quadro.clearRect(0,0,1280,720)//limpando todos os elementos e depois redesenhando
    draw()
    moverbolinha()
}

setInterval(main, 10)