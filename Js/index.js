const addingGuestSignInBtn = document.getElementById("guests");
const addingGuestSignInBar = document.getElementById("addingGuests");
const submitguestsBtn = document.getElementById("addingBtn");

addingGuestSignInBtn.addEventListener("click", () => {
  addingGuestSignInBar.classList.toggle("show");
});
submitguestsBtn.addEventListener("click", () => {
  addingGuestSignInBar.className = "";
  //   alert('hi')
});

const highLightTheBar = document.getElementById("popularheads");
const popularContentsP = document.getElementById("popularcontents");

for (let i = 0; i < 4; i++) {
  highLightTheBar.children[i].addEventListener("click", () => {
    for (let j = 0; j < 4; j++) {
      highLightTheBar.children[j].className = "";
      popularContentsP.children[j].style = `z-index:0`;
    }
    highLightTheBar.children[i].className = "highlightedbar";
    popularContentsP.children[i].style = `z-index:4; `;
  });
}

