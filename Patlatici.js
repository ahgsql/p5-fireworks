class Patlatici {
  constructor(x, y, color, count, ikincil = false, kucuk = false) {
    this.hareket = 0;
    this.color = color;
    this.kucuk = kucuk;
    this.pos = createVector(x, y);
    this.patlayanlar = [];
    for (let p = 0; p < random(6, count); p++) {
      this.patlayanlar.push(new Patlayan(x, y, color, ikincil, kucuk));
      this.patlayanlar.push(
        new Patlayan(x, y, { r: 255, g: 255, b: 255 }, false, kucuk)
      );
    }
  }

  applyForce = function (forc) {
    if (this.kucuk) {
    } else {
      if (this.hareket > 78) {
        for (let p = 0; p < this.patlayanlar.length; p++) {
          this.patlayanlar[p].applyForce(forc);
        }
      }
    }
  };
  move = function () {
    this.hareket++;
    if (this.hareket > 280) {
      for (let c = 0; c < this.patlayanlar.length; c++) {
        this.patlayanlar[c].death();
      }
    }
    if (this.hareket > 10 && this.hareket < 50) {
      if (this.kucuk) {
      } else {
        background(this.color.r, this.color.g, this.color.b, 5);
      }
    }

    if (this.hareket > 90) {
      for (let c = 0; c < this.patlayanlar.length; c++) {
        this.patlayanlar[c].setShade();
        this.patlayanlar[c].sil();
      }
    }
    for (let c = 0; c < this.patlayanlar.length; c++) {
      this.patlayanlar[c].move();
    }
  };

  display = function () {
    for (let d = 0; d < this.patlayanlar.length; d++) {
      this.patlayanlar[d].display();
    }
  };
}
