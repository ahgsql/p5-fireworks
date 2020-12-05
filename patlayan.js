function Patlayan(x, y, color, ikincil, kucuk = false) {
  let pos = createVector(x, y);
  let acc = createVector(0, 0);
  let vel;
  if (kucuk) {
    vel = createVector(random(-0.3, 0.3), random(-0.5, 1));
  } else {
    vel = createVector(random(-2, 2), random(-3, 1));
  }
  let tails = [];
  let shade = 255;
  let alive = true;
  let hareket = 0;
  this.setShade = function () {
    shade -= 2;
  };
  this.death = function () {
    if (alive) {
      alive = false;
    }
  };
  this.applyForce = function (forca) {
    acc.add(forca);
    vel.add(acc);
    acc.mult(0);
  };
  this.move = function () {
    hareket++;
    if (hareket % 2 == 0) {
      tails.push(pos.copy());
    }
    pos.add(vel);
  };
  this.sil = function () {
    tails.shift();
  };
  this.display = function () {
    if (alive) {
      // for (let t = 0; t < tails.length; t++) {
      //   const element = tails[t];
      //   push();
      //   strokeWeight(0);
      //   fill(color.r + 1, color.g + 1, color.b + 1, t * 2);
      //   translate(element.x, element.y);
      //   rectMode(CENTER);
      //   if (color.r == 255) {
      //     ellipse(0, 0, 2, 2);
      //   } else {
      //     ellipse(0, 0, 4, 4);
      //   }
      //   pop();
      // }

      push();
      strokeWeight(0);

      translate(pos.x, pos.y);
      rectMode(CENTER);

      if (kucuk) {
        if (random(3) < 2) {
          fill(0, 0, 0, shade);
        } else {
          fill(color.r, color.g, color.b, shade);
        }
        if (color.r == 255) {
          ellipse(0, 0, 0.7, 0.7);
        } else {
          ellipse(0, 0, 0.7, 0.7);
        }
      } else {
        fill(color.r, color.g, color.b, shade);
        if (color.r == 255) {
          ellipse(0, 0, 2, 2);
        } else {
          ellipse(0, 0, 6, 6);
        }
      }

      if (shade == 1) {
        if (ikincil) {
          if (random(4) < 2) {
            playCracks();
            patlayanlar.push(
              new Patlatici(pos.x, pos.y, color, 11, false, true)
            );
          }
        }
      }
      pop();
    }
  };
}
