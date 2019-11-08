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

    this.setListener();
  }
  drawShooter() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
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

    document.onkeydown = e => {
      console.log("es el switch");
      switch (e.keyCode) {
        case this.keys.ARROW_LEFT:
          this.posX -= 20;
          this.player.posX -= 20;
          break;
        case this.keys.TOP_KEY:
          this.player.posY -= 20;

          break;
        case this.keys.ARROW_RIGHT:
          this.posX += 20;
          this.player.posX += 20;
          break;
        case this.keys.ARROW_DOWN:
          this.player.posY += 20;

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
