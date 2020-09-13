var database;
var gameState = 0;
var playerCount;
var allPlayers =[];

// variables for players
var car1,car2,car3,car4;
var cars = [];

// all objects
var form,game,player;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");
    if (playerCount===4){
        game.update(1);
    }
    if (gameState===1){
        game.play();
    }
}

