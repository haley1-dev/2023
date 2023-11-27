function diceRoll() {

const numOfDice = document.getElementById("input").value; 
const diceImages = document.getElementById("dice-images");
const images = []

for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    // console.log(value); Yay it works
    images.push(`<img src="../images-dice/dice${value}.jpg">`);
}

diceImages.innerHTML = images.join('');

}