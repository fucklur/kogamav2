let tries = 0;

const slideoutBtn = document.getElementById("slideoutBtn");
const closeSlideout = document.getElementById("closeSlideout");
const slideoutPanel = document.getElementById("slideoutPanel");
const slideoutOverlay = document.getElementById("slideoutOverlay");

if (slideoutBtn && closeSlideout && slideoutPanel && slideoutOverlay) {
  function openMenu() {
    slideoutPanel.classList.add("active");
    slideoutOverlay.classList.add("active");
  }

  function closeMenu() {
    slideoutPanel.classList.remove("active");
    slideoutOverlay.classList.remove("active");
  }

  slideoutBtn.addEventListener("click", openMenu);
  closeSlideout.addEventListener("click", closeMenu);
  slideoutOverlay.addEventListener("click", closeMenu);
}

const windowbutton = document.getElementById("newfile");

if (windowbutton) {
  const windownew = document.getElementById("cannot");
  windownew.classList.add("window", "hidden");
  document.body.appendChild(windownew);

  windowbutton.addEventListener("click", () => { // click event listener is important
    if(tries < 5) {
    tries++
    windownew.innerHTML = "Unable to make a project, tried " + tries + " times."; // before you reach its limit
    } else {
      windownew.innerHTML = "Chill cowboy!"; // after you reach its limit
    }
    console.error("game-creator, window not found, tries: " + tries);
  });
}
