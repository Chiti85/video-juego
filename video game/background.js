class Background {
  constructor(ctx, widthB, heightB) {
    this.ctx = ctx;
    this.width = widthB;
    this.height = heightB;

    this.image = new Image();
    this.image.src = "../imagenes/background/rabbits-01.png";

    this.posX = 0;
    this.posY = 0;

    this.velX = 1;
  }
  drawBg() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image,
      this.posX + this.width,
      this.posY,
      this.width,
      this.height
    );
  }
  moveBg() {
    this.posX -= this.velX;
    if (this.posX <= -this.width) {
      this.posX = 0;
    }
  }
}
