function getRandomNumber(min, max, last) {
  let num;
  do {
      num = Math.floor(Math.random() * (max - min)); // Adjusted to fit array indexing
  } while (num === last);
  return num;
}

let lastNum = null; // To track the last index

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
  "Love, comfort, and the sweetest confessions today and always.",
];

document.getElementById("btnLoveWishes").addEventListener("click", () => {
  lastNum = getRandomNumber(0, wishes.length, lastNum); // Ensure a different index
  document.getElementById("loveWishes").innerHTML = wishes[lastNum];
});

