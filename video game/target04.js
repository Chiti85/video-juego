class Target04 {
  constructor(ctx) {
    this.size = this.width * this.height;
    this.width = 50;
    this.height = 50;

    this.centerX = undefined;
    this.centerY = undefined;

    this.posXCollect = [122, 230, 470, 550, 800];
    let posXRandom = Math.floor(Math.random() * (5 - 0) + 0);

    this.posYCollect = [120, 230, 370, 450];
    let posYRandom = Math.floor(Math.random() * (4 - 0) + 0);

    this.posY = this.posYCollect[posYRandom];
    this.posX = this.posXCollect[posXRandom];

    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "../imagenes/dwarf and fireworks/dward green.png";

    this.velX = 4;
    this.velY = 4;
  }
  drawTarget04() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
  moveTarget04() {}
}
