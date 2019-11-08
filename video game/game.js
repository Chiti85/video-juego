const Game = {
  cnt: 0,
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  redDwarf: [],
  redDwarf02: [],
  greenDwarf: [],
  backgroundMusic: new Audio(
    "../imagenes/Blancanieves y los Siete Enanos - Canción tonta (Doblaje 1964).mp3"
  ),
  blueDwarf: [],
  plane: [],
  purpelDwarf: [],
  framesCounter: 0,
  score: undefined,
  timer: undefined,
  keys: {
    TOP_KEY: 38,
    SPACE: 32,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37,
    ARROW_DOWN: 40
  },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth * 0.98;
    this.height = window.innerHeight * 0.98;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  },
  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
      if (this.framesCounter % 100 == 0) this.timer++;

      this.drawAll();
      this.moveAll();
      this.generateRedDr();
      this.generateBlueDr();
      this.generateGreenDr();
      this.isCollisionRed();
      this.isCollisionBlue();
      this.isCollisionGreen();
      this.playLoop();
      this.drawPlayer();
      this.clearRedDr();
      this.cleanblueDr();
      this.cleanGreenDr();
      this.isOver();
    }, 1000 / this.fps);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx);
    this.shooter = new Shooter(this.ctx, this.keys, this.player);
    this.timerboard = Timerboard;
    this.timerboard.init(this.ctx);
    this.timer = 0;

    this.scoreboard = ScoreBoard;
    this.scoreboard.init(this.ctx);
    this.score = 0;
  },
  drawAll() {
    this.background.drawBg();
    this.shooter.drawShooter();
    this.drawTimer();
    console.log("el siguiente es score");
    this.drawScore();
  },
  drawPlayer() {
    this.player.drawPlayer();
  },
  moveAll() {
    this.background.moveBg();

    this.shooter.moveShooter(event);
  },
  generateRedDr() {
    if (this.framesCounter % 200 == 0) {
      this.redDwarf.push(new Target(this.ctx, this.fps));
      console.log(this.redDwarf);
    } else if (this.framesCounter % 500 == 0) {
      this.redDwarf02.push(new RightTarget(this.ctx));
    }
    this.redDwarf.forEach(elm => elm.targetArea());
    this.redDwarf.forEach(elm => elm.drawTarg());
    this.redDwarf.forEach(elm => elm.moveTarg());
    this.redDwarf02.forEach(elm => elm.moveTarg02());
  },
  clearAll() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },
  clearRedDr() {
    if (this.redDwarf.length == 2) {
      return this.redDwarf.splice(0, 1);
    }
  },
  generateBlueDr() {
    if (this.framesCounter % 70 == 0 && this.blueDwarf.length < 3) {
      this.blueDwarf.push(new Target03(this.ctx, this.canvas.width));
    }

    this.blueDwarf.forEach(elm => elm.drawTarget03());
    this.blueDwarf.forEach(elm => elm.moveTarget03());
  },
  cleanblueDr() {
    this.blueDwarf.forEach((elm, idx) => {
      if (elm.posX <= 0) {
        this.blueDwarf.splice(idx, 1);
      }
    });
  },
  generateGreenDr() {
    if (this.framesCounter % 30 == 0) {
      this.greenDwarf.push(new Target04(this.ctx));
    }

    this.greenDwarf.forEach(elm => elm.drawTarget04());
  },
  cleanGreenDr() {
    if (this.greenDwarf.length == 4) {
      return this.greenDwarf.splice(0, 1);
    }
  },
  isCollisionRed() {
    if (this.shooter.bullets) {
      //this.shooter.bullets.posX
      console.log(this.shooter.bullets);
      this.redDwarf.some((elm, idx) => {
        if (
          this.shooter.bullets.posX + this.shooter.bullets.width >= elm.posX &&
          this.shooter.bullets.posX <= elm.posX + elm.width &&
          this.shooter.bullets.posY <= elm.posX + elm.height &&
          this.shooter.bullets.posY + this.shooter.bullets.height >= elm.posY
        ) {
          this.shooter.bullets = undefined;
          //   this.redDwarf.splice(idx, 1);
        }
      });
    }
  },
  isCollisionBlue() {
    console.log(this.blueDwarf);
    if (this.shooter.bullets) {
      this.blueDwarf.some((elm, idx) => {
        if (
          this.shooter.bullets.posX + this.shooter.bullets.width >= elm.posX &&
          this.shooter.bullets.posX <= elm.posX + elm.width &&
          this.shooter.bullets.posY <= elm.posX + elm.height &&
          this.shooter.bullets.posY + this.shooter.bullets.height >= elm.posY
        ) {
          this.score++;
          this.blueDwarf.splice(idx, 1);
          this.shooter.bullets = undefined;
        }
        console.log("blueee if");
      });
    }
    // if (this.isCollisionBlue()) this.score++;
  },
  isCollisionGreen() {
    if (this.shooter.bullets) {
      this.greenDwarf.some((elm, idx) => {
        if (
          this.shooter.bullets.posX + this.shooter.bullets.width >= elm.posX &&
          this.shooter.bullets.posX <= elm.posX + elm.width &&
          this.shooter.bullets.posY <= elm.posX + elm.height &&
          this.shooter.bullets.posY + this.shooter.bullets.height >= elm.posY
        ) {
          this.shooter.bullets = undefined;
          this.score += 2;
          this.greenDwarf.splice(idx, 1);
        }
      });
    }
    // if (this.isCollisionBlue()) this.score++;
  },
  drawTimer() {
    this.timerboard.update(this.timer);
  },
  drawScore() {
    console.log("pintas????", this.score, "este es el timer", this.timer);
    this.scoreboard.update(this.score);
  },
  playLoop() {
    this.backgroundMusic.volume = 0.3;
    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();
  },
  stopMusic() {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  },
  youWin() {
    this.image = new Image();
    this.image.src = "../imagenes/background/winner-01-01.png";
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);

    console.log(this.image, this.posX, this.posY, this.width, this.height);
    // clearInterval(this.interval);
  },

  isOver() {
    if (this.score < 3 && this.timer >= 15) {
      console.log("score < 500");
      this.gameOver();
    } else if (this.score >= 3 && this.timer <= 15) {
      console.log("score > 500");
      this.youWin();
    }
  },
  gameOver() {
    this.image = new Image();
    this.image.src = "../imagenes/background/game-over-01-01.png";
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height);

    // clearInterval(this.interval);
    // this.background.finalDraw();
    this.stopMusic();

    console.log(this.image, this.posX, this.posY, this.width, this.height);
    //clearInterval(this.interval);
  }
};
