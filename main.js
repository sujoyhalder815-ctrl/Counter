let count = 1;

    const countDisplay = document.getElementById("count");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");
    const incrementBtn = document.getElementById("increment");

    const updateDisplay = () =>
      (countDisplay.textContent = count);

    const decrement = () => {
      count--;
      updateDisplay();
    };

    const increment = () => {
      count++;
      updateDisplay();
    };

    const reset = () => {
      count = 0;
      updateDisplay();
    };


    decrementBtn.addEventListener("click", decrement);
    incrementBtn.addEventListener("click", increment);
    resetBtn.addEventListener("click", reset);

