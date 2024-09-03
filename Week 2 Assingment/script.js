
const fortunes = [
    { fortune: "Definitely", color: "green" },
    { fortune: "Probably", color: "lightblue" },
    { fortune: "Maybe", color: "blue" },
    { fortune: "Probably Not", color: "red" },
    { fortune: "It is certain", color: "purple" },
    { fortune: "Ask again later", color: "orange" }
  ];


const theFortunes = document.getElementById("theFortunes")

const getStuffFromButton = document.getElementById("get")

getStuffFromButton.addEventListener("click", getFortune)

function getFortune(){
    var random = Math.floor(Math.random() * fortunes.length)
    var fortune = fortunes[random]

    theFortunes.innerHTML = fortune.fortune
    theFortunes.style.color = fortune.color

}