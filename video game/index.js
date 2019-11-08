window.onload = () => {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("start-button").onclick = () => {
    document.getElementById("bgscreen").style.display = "none";
    document.getElementById("canvas").style.display = "block";
    Game.init();
  };
};
