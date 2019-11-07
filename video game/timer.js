const Timerboard = {
  ctx: undefined,

  init: function(ctx) {
    this.ctx = ctx;
    this.ctx.font = "30px sans-serif";
  },

  update: function(time) {
    this.ctx.fillStyle = "black";
    this.ctx.fillText(Math.floor(time), 50, 50);
  }
};
