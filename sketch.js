let p1;
let gravity;
let patlatici;
let patlatici2;
let patlayanlar = [];
let gidenler = [];
let patlayan = 1;
let popsfx = [];
let launchsfx = [];
let cracksfx;
let itter = 240;
let minSize = 0.5;
let maxSize = 2;
let minOpacity = 50;
let maxOpacity = 200;
let bgColor;
let stars = [];
function getRnd(array) {
  return array[Math.floor(Math.random() * array.length)];
}
let cr = false;
function playCracks() {
  cracksfx.play();
}
function preload() {
  cracksfx = loadSound("sfx/cr.mp3");
  popsfx.push(loadSound("sfx/p1.mp3"));
  popsfx.push(loadSound("sfx/p2.mp3"));
  popsfx.push(loadSound("sfx/p3.mp3"));
  popsfx.push(loadSound("sfx/p4.mp3"));
  launchsfx.push(loadSound("sfx/l1.mp3"));
  launchsfx.push(loadSound("sfx/l2.mp3"));
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let y = 0; y < itter; y++) {
    let randomSize = random(minSize, maxSize);
    let randomX = random(width);
    let randomY = random(height);
    stars.push({ s: randomSize, x: randomX, y: randomY });
  }
  //patlatici = new Patlatici(350, 350);
  gravity = createVector(0, 0.041);
  giden = new Giden(50, 100);

  gidenler.push(new Giden(random(width), random(height - 300)));
  setInterval(() => {
    if (random(7) < 2) {
      gidenler.push(new Giden(random(width), random(height - 300), true));
    } else {
      gidenler.push(new Giden(random(width), random(height - 300)));
    }
  }, 7100);
  setInterval(() => {
    background(0, 0, 0, 50);
  }, 1551);
}
function mouseClicked() {
  strokeWeight(0);
  let color = {
    r: random(10, 255),
    g: random(10, 255),
    b: random(10, 255),
  };
  fill(color.r, color.g, color.b);
  ellipse(mouseX, mouseY, 15, 15, color);
  // prevent default
  gidenler.push(new Giden(mouseX, mouseY, false, color));
}
function keyPressed(value) {
  if (value.code == "Space") {
    gidenler.push(
      new Giden(random(150, width), random(height - 300), true, null, true)
    );
  }
}
function draw() {
  background(0, 0, 0, 20);
  for (let p = 0; p < patlayanlar.length; p++) {
    const element = patlayanlar[p];
    element.move();
    element.applyForce(gravity);
    element.display();
  }
  for (let g = 0; g < gidenler.length; g++) {
    const giden = gidenler[g];
    giden.move();
    giden.display();
  }
  fill("white");
  textSize(height / 40);

  text("Click to Fire Normal", 10, (height / 10) * 9.1);
  text("Space to Fire Cracky", 10, (height / 10) * 9.45);
  textSize(height / 50);

  text("Ali Haydar Gulec - www.alihaydargulec.com", 10, (height / 10) * 9.8);
}
