const windowbutton = document.getElementById("newfile");
const windownew = document.createElement("div");
windownew.classList.add("window");
document.body.appendChild(windownew);

windowbutton.addEventListener("click", () => {
  if (windownew.classList.contains("hidden")) {
    windownew.classList.remove("hidden");
    windownew.innerText = "Unable to make a project, try again later!";
  } else {
    windownew.classList.add("hidden");
  }
});