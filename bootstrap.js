let tris = 0;

const gameBootstrapper = document.getElementById("playbtn");

gameBootstrapper.addEventListener("click", () => {
  if (tris < 5) {
    tris++
    alert("Failet to load game. You tried " + tris + " times!");
  } else {
    alert("bradar chill");
  }
});
