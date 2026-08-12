let attempt = 0;

const loginbutton = document.getElementById("loginbtn");

if (loginbutton) {
  loginbutton.addEventListener("click", () => {
    attempt++
  if(attempt < 5) {
    alert("Wrong username or password. Go to DevTools to see why. Attempt " + attempt + ". Try again later!")
  } else {
    alert("You're doing this too much!");
  }
  console.error("error unique id: " + Math.random() + " please refer to the administration here");
});
}
