const roomName = document.getElementById("RoomName");

const roomsInHomePg = [];
const roomsList = document.getElementById("BotCont").querySelector("ul");
class rooms {
  constructor(img, Name, rating, Availablity, Desc, rent) {
    this.img = img;
    this.Name = Name;
    this.rating = rating;
    this.Availablity = Availablity;
    this.Desc = Desc;
    this.rent = rent;
  }
  render() {
    const roomLi = document.createElement("a");
    roomLi.href = "/HTML/hotels1.html";

    roomLi.className = "rooms";
    roomLi.innerHTML = `
   
   <img src="${this.img}" alt="" />
          <div>
            <h3>${this.Name}</h3>
            <div>${this.Desc}</div>
            <p>${this.Availablity}</p>
            <p>${this.Desc}</p>
            <p>${this.rent}</p>
          </div>
  
   `;
    roomsInHomePg.push(roomLi);
    roomsList.append(roomLi);
    roomLi.addEventListener("click", () => {
        alert(this.Name);
        roomName.innerText = this.Name;
    });
  }
}

new rooms("", "double", "5#", "Available", "good", "₹1500").render();

new rooms("", "dou", "5#", "Available", "good", "₹1500").render();
