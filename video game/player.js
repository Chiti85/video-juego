class Player {
  constructor(ctx) {
    this.posX = 600;
    this.posY = 300;

    this.ctx = ctx;

    this.width = 150;
    this.height = 150;

    // this.shooter = new Shooter(this.ctx, this.keys);

    this.image = new Image();
    this.image.src = "../imagenes/target.png";

    this.actionDetected = false;
  }
  drawPlayer() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}
