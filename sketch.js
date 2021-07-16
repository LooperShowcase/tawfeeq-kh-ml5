let player;
let bgimg;
let pimg1;
let pimg2;
let obsimg;
let obss = [];
let wordClassiFier;

function preload() {
  pimg1 = loadImage("tf1.jpg");
  pimg2 = loadImage("tf2.jpg");
  obsimg = loadImage("tf1.jpg");
  let options = {
    probabillityThreshold: 0.85,
  };
  wordClassiFier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(1880, 800);
  player = new Player();
  frameRate(50);
  wordClassiFier.classify(hd);
}
function hd(error, results) {
  let word = results[0].label;
  if (word === "up") {
    player.jump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background("gray");
  if (random(1) < 0.01) {
    obss.push(new Obs());
  }

  for (let obs of obss) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("Game Over");
      noLoop();
    }
  }

  player.show();
  player.move();
}
