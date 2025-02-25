function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const elements = {
    loveCalcEnterBtn: document.querySelector(".loveCalculatorEnterButton"),
    loveCalcExitBtn: document.querySelector(".loveCalculatorExitButton"),
    loveCalculatorModal: document.querySelector(".loveCalculatorModal"),
    loveCalculatorCloseBtn: document.querySelector(".loveCalculatorCloseButton"),
    loveCalculatorSubmitButton: document.querySelector(".calcButton"),
    name1: document.querySelector(".name1"),
    name2: document.querySelector(".name2"),
    loveCalcResult: document.querySelector(".loveCalculatorResult"),
  };
  
  function resetModal() {
    elements.name1.value = "";
    elements.name2.value = "";
    elements.loveCalcResult.innerHTML = "";
  }
  
  function generateRandomNumbers(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  }
  
  async function displayLovePercentage(name1, name2, randomNumbers) {
    for (let i = 0; i < randomNumbers.length; i++) {
      elements.loveCalcResult.innerHTML = `The love percentage between ${name1} and ${name2} is ${randomNumbers[i]}%`;
      await sleep(100);
    }
    const finalResult = Math.floor(Math.random() * 101);
    elements.loveCalcResult.innerHTML = `The love percentage between ${name1} and ${name2} is ${finalResult}%`;
  }
  
  elements.loveCalcEnterBtn.addEventListener("click", () => {
    resetModal();
    elements.loveCalculatorModal.showModal();
  });
  
  elements.loveCalcExitBtn.addEventListener("click", () => {
    elements.loveCalculatorModal.close();
  });
  
  elements.loveCalculatorSubmitButton.addEventListener("click", async () => {
    const name1 = elements.name1.value;
    const name2 = elements.name2.value;
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names!");
    } else {
      const randomNumbers = generateRandomNumbers(10);
      await displayLovePercentage(name1, name2, randomNumbers);
    }
  });