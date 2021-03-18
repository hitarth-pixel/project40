var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players=[];
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var score1=0,score2=0,score,sco,sc1,sc2;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);

  database = firebase.database();
  getPlayerScore();
  

  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  textSize(20);
  fill("lightred");
  text("player2:  "+score2,50,50);
  text("player1: "+score1,50,80);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

}



function readPlayer1Score(data){
          score1=data.val();
         
}

function readPlayer2Score(data){
           score2=data.val();
}

 function getPlayerScore(){
           
  score=database.ref('/players/player1/score');
  score.on("value",readPlayer1Score);

  sco=database.ref('/players/player2/score');
  sco.on("value",readPlayer2Score);

}