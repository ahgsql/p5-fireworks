function Giden(x, y, double = false, color = null) {
  let pos = createVector(x, height);
  let acc = createVector(0, 0);
  let vel = createVector(0, -5);
  getRnd(launchsfx).play();
  let exploded = false;

  if (color == null) {
    color = {
      r: random(50, 255),
      g: random(20, 255),
      b: random(10, 255),
    };
  }
  this.applyForce = function (forca) {
    acc.add(forca);
    vel.add(acc);
    acc.mult(0);
  };
  this.move = function () {
    if (!exploded) {
      pos.add(vel);
      if (pos.y < y) {
        exploded = true;
        getRnd(popsfx).play();
        patlayanlar.push(new Patlatici(pos.x, pos.y, color, 610, double));
      }
      if (pos.y - y < 300) {
        this.applyForce(gravity);
      }
    }
  };

  this.display = function () {
    if (!exploded) {
      push();
      strokeWeight(0);
      fill(color.r, color.g, color.b, 255);
      translate(pos.x, pos.y);
      rectMode(CENTER);
      ellipse(0, 0, 6, 6);
      fill(color.r + 10, color.g + 10, color.b + 10, 125);
      ellipse(0, 2, 4, 10);
      fill(color.r + 10, color.g + 10, color.b + 10, 105);
      ellipse(0, 4, 5, 12);
      fill(color.r + 10, color.g + 10, color.b + 10, 85);
      ellipse(0, 6, 4, 14);
      ellipse(0, 6, 3, 22);
      pop();
    }
  };
}
