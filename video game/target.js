class Target {
  constructor(ctx, fps) {
    this.startingRadiusX = 580;
    this.endingRadiusX = 800;

    this.size = this.width * this.height;
    this.width = 50;
    this.height = 50;

    this.centerX = 600;
    this.centerY = 600;
    this.cnt = 0;
    this.posX = this.radiusX + this.centerX;
    this.posY = 580;

    this.fps = fps + 20;

    this.radiusY = 580;

    this.posY = 580;

    this.radiusArr = [120, 320, 210, 550];
    let indexRandom = Math.floor(Math.random() * (4 - 0) + 0);
    this.radiusX = this.radiusArr[indexRandom];

    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "../imagenes/dwarf and fireworks/dward red.png";

    this.velX = undefined;
    this.velY = undefined;
  }
  drawTarg() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
  moveTarg() {
    // this.randomX =
    //   this.startingRadiusX +
    //   Math.floor(
    //     Math.random() * (this.endingRadiusX - this.startingRadiusX + 1)
    //   );

    this.posX = this.centerX + this.radiusX * Math.cos(this.ang);
    this.posY = this.centerY + this.radiusY * Math.sin(this.ang);
  }
  targetArea() {
    this.ang = Math.PI * -0.01 * this.cnt;
    this.ang == Math.PI ? (this.target = new Target()) : this.cnt++;
  }
}

class RightTarget extends Target {
  constructor(ctx) {
    super(ctx);
    this.radiusArr = [-600, -720, -675, -760];
    let indexRandom = Math.floor(Math.random() * (4 - 0) + 0);
    this.radiusX = this.radiusArr[indexRandom];
    this.radiusX = 300;
  }

  moveTarg02() {
    this.posX = this.centerX - this.radiusX * Math.sin(this.ang);
    this.posY = this.centerY - this.radiusY * Math.cos(this.ang);
  }
}
