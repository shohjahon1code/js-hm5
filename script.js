const violetCircle = document.querySelector(".main__circle-left");
const yellowCircle = document.querySelector(".main__circle-right");
const elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
const buttons = document.querySelectorAll(".button__items");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnTarget = Number(e.currentTarget.textContent);
    elInput.focus();
    elInput.value = "";
    elInput.value += btnTarget;

    if (elInput.value <= 10) {
      violetCircle.classList.add("border");
      yellowCircle.classList.remove("active");
    } else if (elInput.value > 10 && elInput.value < 100) {
      violetCircle.classList.remove("border");
      yellowCircle.classList.add("active");
    } else {
      alert("Enter the number under 100 digit");
    }

    if (btnTarget == 1) {
      // let elInput2 = document.querySelector(".form__input2");
      document.querySelectorAll("input").forEach((inp) => {
        inp;
      });
    }
  });
});

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elInput.value === "") {
    alert("Enter the number ?");
  }

  if (elInput.value <= 10) {
    violetCircle.classList.add("border");
    yellowCircle.classList.remove("active");
  } else if (elInput.value > 10 && elInput.value < 100) {
    violetCircle.classList.remove("border");
    yellowCircle.classList.add("active");
  } else {
    alert("Enter the number under 100 digit");
  }

  elInput.value = "";
});
