let attempt = 0;

const loginbutton = document.getElementById("loginbtn");

if (loginbutton) {
  loginbutton.addEventListener("click", () => {
    attempt++
  alert("Wrong username or password. Go to DevTools to see why. Attempt " + attempt + ". Try again later!")
  console.error("error unique id: " + Math.random() + " please refer to the administration here");
});
}
