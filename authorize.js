const loginbutton = document.getElementById("loginbtn");

if (loginbutton) {
  loginbutton.addEventListener("click", () => {
  alert("Wrong username or password. Go to DevTools to see why")
  console.error("error unique id: " + Math.random() + " please refer to the administration here");
});
}
