class Bullets {
  constructor(ctx, posX, player) {
    this.ctx = ctx;

    this.posX = posX;
    this.posY = 580;
    this.size = this.width * this.height;
    this.width = 20;
    this.height = 20;
    this.player = player;
    // this.bullet = [];
  }
  drawBullets() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
  updateBullets() {
    if (this.posY < this.player.posX) {
      console.log(`holaaa ${this.posX}`);
      if (
        // this.posX + this.width >= this.player.posX ||
        this.posX >= this.player.posX + this.player.width * 2 || //el this.target.width**2 es el area de la foto de target que es cuadrada, si fuera rectangular de with * height
        this.posY <= this.player.posY + this.player.height / 2
        // this.posY + this.height >= this.player.posY
      ) {
        return; //crear array de bullest y limpiarlo desde alli?
      }
    }
    // this.clearBullets()
    this.posY -= 22;
    this.posX += 0.65;
    this.width -= 0.5;
    this.height -= 0.5;
    this.clearBullets();
  }

  clearBullets() {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
  }
  //   isCollision() {
  //     return this.target.some(
  //       elm =>
  //         this.posX > elm.posX - this.size &&
  //         this.posX < elm.posY + elm.size &&
  //         this.posY < elm.posX - this.size &&
  //         this.posY < elm.posY + elmm.size
  //     );
  //   }
}

// if (
//     this.posX > this.target.posX - this.size &&
//     this.posX < this.target.posX + this.target.width * this.height && //el this.target.width**2 es el area de la foto de target que es cuadrada, si fuera rectangular de with * height
//     this.posY < this.target.posY - this.size &&
//     this.posY < this.target.posY + this.target.width * this.height
// ) {

// this.posX + this.width >= elm.posX &&
//     this.posY + this.height >= elm.posY &&
//     this.posX <= this.target.posX + elm.width
