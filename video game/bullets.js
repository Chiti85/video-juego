class Bullets {
  constructor(ctx, posX, player) {
    this.ctx = ctx;

    this.posX = posX;
    this.posY = 580;
    this.size = this.width * this.height;
    this.width = 20;
    this.height = 20;
    this.player = player;
  }
  drawBullets() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
  updateBullets() {
    if (this.posY < this.player.posX) {
      console.log(`holaaa ${this.posX}`);
      if (
        this.posX >= this.player.posX + this.player.width * 2 ||
        this.posY <= this.player.posY + this.player.height / 2
      ) {
        return;
      }
    }

    this.posY -= 22;
    this.posX += 0.65;
    this.width -= 0.5;
    this.height -= 0.5;
    this.clearBullets();
  }

  clearBullets() {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
  }
}
