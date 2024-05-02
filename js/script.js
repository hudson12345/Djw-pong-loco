let canvasPong = document.getElementById('canvas')/*varial para manipular o elemento canvas atraves do id*/
let quadro = canvasPong.getContext('2d')/*deixa o canvas pronto para receber desenhos 2D*/
let bola = canvasPong.getContext('2d')
quadro.fillStyle = "blue"/*Colocando uma cor na variavel quadro*/

let player1 = {
    px:80,
    py:260,
    tx:30,
    ty:200,
}

let player2 = {
    px:80,
    py:260,
    tx:30,
    ty:200,
}

bola.fillStyle = "Red"
let bolinha = {
    px:620,
    py:345,
    tx:30,
    ty:30,
}

quadro.font = '20px arial'
let pts1 = 0
let pts2 = 0

function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tx,player1.ty)
    quadro.fillRect(player2.px,player2.py,player2.tx,player2.ty)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
    quadro.fillText(`Pontos:  ${pts1}`,300,50)
    quadro.fillText(`Pontos:  ${pts2}`,1000,50)
}
draw()