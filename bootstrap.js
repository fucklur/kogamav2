let tris = 0;
let pLoad = 0;

const gameBootstrapper = document.getElementById("playbtn");

if (gameBootstrapper) {
  gameBootstrapper.addEventListener("click", () => {
      const newSpan = document.createElement("span");
      while (pload < 100) {

      pLoad++
      newSpan.classList.add("loadGame");
      newSpan.innerText = "Loading game " + pLoad + "%";

      gameBootstrapper.replaceWith(newSpan);
    }
  });
}
