function getRandomNumber(min, max, last) {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min));
  } while (num === last);
  return num;
}

const equations = [
  "3 + 5", "10 - 4", "7 + 2", "8 - 3", "6 + 4", "9 - 5", "2 + 6", "5 - 1",
  "4 + 3", "7 - 2", "1 + 8", "10 - 7", "3 + 6", "8 - 4", "5 + 2"
];

const wishes = [
  "May love always shine brightly in your heart.",
  "Wishing you warmth, care, and endless happiness with your special someone.",
  "May your day be filled with romance and joy.",
  "Love, harmony, and wonderful surprises to you on this special day.",
  "May your heart sing with happiness and your soul be filled with love.",
  "Wishing you sweet hugs, true feelings, and unforgettable moments.",
  "May your life always have space for big and beautiful love.",
  "Wishing you love that lifts you up and fills your life with meaning.",
  "May romance and passion never leave your life.",
  "Love, comfort, and the sweetest confessions today and always."
];

let lastWishIndex = null;
let lastEquationIndex = null;
let hearts = 5;

const buttonLoveWishes = document.getElementById("btnLoveWishes");
const loveWishesElement = document.getElementById("loveWishes");
const heartsElement = document.getElementById("hearts");
const purchaseWindow = document.querySelector(".purchaseWindow");
const equationP = document.querySelector(".equasionP");
const equationInput = document.querySelector(".equasionInput");
const equationButton = document.querySelector(".equasionButton");

function updateHeartsDisplay() {
  heartsElement.innerHTML = "❤️".repeat(hearts) + "💔".repeat(5 - hearts);
}

function showWish() {
  lastWishIndex = getRandomNumber(0, wishes.length, lastWishIndex);
  loveWishesElement.innerHTML = wishes[lastWishIndex];
  if (hearts > 0) {
    hearts--;
    updateHeartsDisplay();
  }
  if (hearts === 0) {
    loveWishesElement.innerHTML = "You are out of hearts!";
    buttonLoveWishes.classList.add("visually-hidden");
  }
}

function showPurchaseWindow() {
  purchaseWindow.showModal();
  lastEquationIndex = getRandomNumber(0, equations.length, lastEquationIndex);
  equationP.innerHTML = equations[lastEquationIndex] + " = ?";
}

function evaluateEquation() {
  const userAnswer = parseInt(equationInput.value, 10);
  const correctAnswer = eval(equations[lastEquationIndex]);
  if (userAnswer === correctAnswer) {
    hearts = 5;
    loveWishesElement.innerHTML = null; 
    buttonLoveWishes.classList.remove("visually-hidden");
    updateHeartsDisplay();
    purchaseWindow.close();
  } else {
    alert("Incorrect answer. Try again!");
  }
}

buttonLoveWishes.addEventListener("click", showWish);
document.getElementById("buyHearts").addEventListener("click", showPurchaseWindow);
equationButton.addEventListener("click", evaluateEquation);

// Initial display of hearts
updateHeartsDisplay();