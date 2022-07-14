const profileBtn = document.getElementById("profile");
const profilesBar = document.getElementById("ProfilesBar");
profileBtn.addEventListener("click", () => {
  profilesBar.classList.toggle("show");
});
const guestEnterSignInBtn = document.getElementById("signInBtn1");
const guestEnterSignUpBtn = document.getElementById("signUpBtn1");
const guestSignInBtn =
  document.getElementById("Guest_Admin1").firstElementChild;
const adminSignInBtn = document.getElementById("Guest_Admin1").lastElementChild;
const guestSignUpBtn =
  document.getElementById("Guest_Admin2").firstElementChild;
const adminSignUpBtn = document.getElementById("Guest_Admin2").lastElementChild;

const guestSignInbar =
  document.getElementById("signIn").children[1].children[0];
const adminSignInbar =
  document.getElementById("signIn").children[1].children[1];
const signUpbtn = document
  .getElementById("signIn")
  .children[2].querySelector("button");
const signInbtn = document
  .getElementById("signUp")
  .children[2].querySelector("button");

const guestSignUpbar =
  document.getElementById("signUp").children[1].children[0];
const adminSignUpbar =
  document.getElementById("signUp").children[1].children[1];
const signUpbar = document.getElementById("signUp");
const totSignIn = document.getElementById("ProfilesBar").children[0];
const totSignUp = document.getElementById("ProfilesBar").children[1];
const profStatusBar = document.getElementById("proStatusbar");
const logOutBtn = document.getElementById("logOutBtn");
guestSignInBtn.addEventListener("click", () => {
  // alert('hiu')
  guestSignInBtn.className = "choseBtn";
  adminSignInBtn.className = "";
  guestSignInbar.style = ` z-index:15`;
  adminSignInbar.style = `z-index:14`;
  guestSignUpbar.style = `z-index:0`;
  adminSignUpbar.style = `z-index:0`;
});
adminSignInBtn.addEventListener("click", () => {
  // alert('kewiuf')
  guestSignInBtn.className = "";
  adminSignInBtn.className = "choseBtn";
  guestSignInbar.style = `z-index:14`;
  adminSignInbar.style = `z-index:15`;
  guestSignUpbar.style = `z-index:0`;
  adminSignUpbar.style = `z-index:0`;
});
signUpbtn.addEventListener("click", () => {
  totSignIn.style = `display:none`;
  totSignUp.className = "show";
  adminSignUpbar.style = `display:none`;
  // alert('hi')
});
guestSignUpBtn.addEventListener("click", () => {
  guestSignUpBtn.className = "choseBtn";
  adminSignUpBtn.className = "";
  guestSignUpbar.style = ` z-index:15`;
  adminSignUpbar.style = `display:none`;
  guestSignInbar.style = `z-index:0`;
  adminSignInbar.style = `z-index:0`;
});
adminSignUpBtn.addEventListener("click", () => {
  // alert('kewiuf')
  guestSignUpBtn.className = "";
  adminSignUpBtn.className = "choseBtn";
  guestSignUpbar.style = `display:none`;
  adminSignUpbar.style = `z-index:15`;
  guestSignInbar.style = `z-index:0`;
  adminSignInbar.style = `z-index:0`;
});
signInbtn.addEventListener("click", () => {
  totSignUp.className = "";
  totSignIn.style = `display:block`;
  adminSignInbar.style = `display:none`;
  // alert('hi')
});

guestEnterSignInBtn.addEventListener("click", () => {
  guestSignInbar.style = `display:none`;
  adminSignInbar.style = `display:none`;
  guestSignUpbar.style = `display:none`;
  adminSignUpbar.style = `dsiplay:none`;
  profStatusBar.className = "show";
});
guestEnterSignUpBtn.addEventListener("click", () => {
  guestSignInbar.style = `display:none`;
  adminSignInbar.style = `display:none`;
  guestSignUpbar.style = `display:none`;
  adminSignUpbar.style = `dsiplay:none`;
  profStatusBar.className = "show";
});
logOutBtn.addEventListener("click", () => {
  profStatusBar.className = "";
  guestSignInbar.style = `display:block`;
  adminSignInbar.style = `display:block`;
  guestSignUpbar.style = `display:block`;
  adminSignUpbar.style = `dsiplay:block`;
});