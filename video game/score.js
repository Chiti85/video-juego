const ScoreBoard = {
  ctx: undefined,

  init: function(ctx) {
    this.ctx = ctx;
    this.ctx.font = "30px sans-serif";
  },

  update: function(score) {
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Points: " + Math.floor(score), 180, 50);
  }
};
