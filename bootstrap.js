let pLoad = 0;
const gameBootstrapper = document.getElementById("playbtn");

if (gameBootstrapper) {
  gameBootstrapper.addEventListener("click", () => {
    const newSpan = document.createElement("span");
    newSpan.classList.add("loadGame");
    newSpan.innerText = "Loading game 0%";

    gameBootstrapper.replaceWith(newSpan);

    const timer = setInterval(() => {
      pLoad++;
      newSpan.innerText = "Loading game " + pLoad + "%";

      if (pLoad >= 100) {
        clearInterval(timer);
      }
    }, 30);
  });
}
