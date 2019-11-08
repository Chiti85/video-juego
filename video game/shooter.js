class Shooter {
  constructor(ctx, keys, player, bullets) {
    this.ctx = ctx;

    this.posX = 650;
    this.posY = 580;

    this.width = 30;
    this.height = 30;

    this.actionDetected = false;
    this.keys = keys;
    this.player = player;

    // this.bullets = bullets;

    this.setListener();
  }
  drawShooter() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height); //quiero cambiar el imagen de esto!
  }
  shooterClear() {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
    this.ctx.clearRect(
      (this.player.posX -= 60),
      (this.player.posY -= 60),
      120,
      120
    );
  }
  shooter() {
    this.bullets = new Bullets(this.ctx, this.posX, this.player);
    console.log(this.bullets);
    this.bullets.drawBullets();
    this.shootingInterval = setInterval(() => {
      this.bullets.updateBullets();
    }, 10);
    // this.bullets.clearBullets();
  }
  moveShooter(event) {
    if (!this.actionDetected) {
      this.actionDetected = true;
      this.movingInterval = setInterval(() => {
        this.setListener(event);
      }, 10);
    }
  }
  stopShooter() {
    this.actionDetected = false;
    clearInterval(this.movingInterval);
  }
  setListener() {
    console.log("son lAS KEYS");
    // if (
    //   (e.keys === this.keys.ARROW_LEFT && this.posX > 0) ||
    //   (e.keys === this.keys.TOP_KEY && this.posY > 0) || //para que no se salga de la pantalla el puntero(shooter) //this.player.posY > 0
    //   (e.keys === this.keys.ARROW_RIGHT && this.posX < 1180) ||
    //   (e.keys === this.keys.ARROW_DOWN && this.posY < 300) //this.player.posY < 300
    //   //|| e.keys === this.keys.SPACE
    // ) {
    //this.shooterClear();
    document.onkeydown = e => {
      console.log("es el switch"); //quiero cambiar la velocidad de la imagen
      switch (e.keyCode) {
        case this.keys.ARROW_LEFT:
          this.posX -= 10;
          this.player.posX -= 10;
          break;
        case this.keys.TOP_KEY:
          this.player.posY -= 10;

          break;
        case this.keys.ARROW_RIGHT:
          this.posX += 10;
          this.player.posX += 10;
          break;
        case this.keys.ARROW_DOWN:
          this.player.posY += 10;

          break;
        case this.keys.SPACE:
          this.shooter();
          this.stopShooter();
          break;
      }
      this.drawShooter();
    };
    {
      this.stopShooter();
    }
  }
}
