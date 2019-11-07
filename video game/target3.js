class Target03 {
  constructor(ctx, canvasW) {
    this.size = this.width * this.height;
    this.width = 50;
    this.height = 50;

    this.centerX = undefined;
    this.centerY = undefined;

    this.posX = canvasW - this.width;

    this.posyYCollect = [120, 230, 370, 450];
    let posYRandom = Math.floor(Math.random() * (4 - 0) + 0);

    this.posY = this.posyYCollect[posYRandom];

    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "../imagenes/dwarf and fireworks/dward blue.png";

    this.velX = 4;
    this.velY = 4;
  }
  drawTarget03() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
  moveTarget03() {
    this.posX -= this.velX;
  }
}
