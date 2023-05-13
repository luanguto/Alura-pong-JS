// Variáveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;

//Variáveis da velocidade da bolinha

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variáveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variáveis do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente; 


let colidiu = false;

//Placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto ();
  bolinhaNaoFicaPresa();
  
  
}

function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1; 
  }
}

function mostraRaquete(x,y) {
  rect(x,y,raqueteComprimento , raqueteAltura );
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
  
}

function verificaColisaoRaquete(x,y){
  colidiu= collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}
function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento , raqueteAltura );
}
function movimentaRaqueteOponente() {
     if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255)
  textSize(16);
  textAlign(CENTER);
  fill(color(255,140, 0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170,26);
  fill(color(255,140, 0))
  rect(450,10,40,20);
  fill(255);
  text(pontosDoOponente,470,26);
}
function marcaPonto (){
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1; 
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}