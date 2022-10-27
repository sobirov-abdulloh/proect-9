"use strict";
let ismInput = document.getElementById("ismInput"),
  emailInput = document.getElementById("emailInput"),
  parolInput = document.getElementById("parolInput"),
  submitBtn = document.getElementById("btnSubmit"),
  closeBtn = document.querySelector("#closeBtn"),
  ismText = document.querySelector(".ismText"),
  infoContainer = document.querySelector(".info"),
  emailText = document.querySelector(".emailText"),
  eyesOn = document.getElementById("eyesOn"),
  eyesOff = document.getElementById("eyesOff");
 
function Submit(event) {
  event.preventDefault();

  if (ismInput.value === "") {
    alert("ism kiritmadingiz");
  } else if (emailInput.value === "") {
    alert("email kiritmadingiz");
  } else if (parolInput.value === "") {
    alert("parol kiritmadingiz");
  } else if (parolInput.value.length < 6) {
    alert("parol 6ta harfdan kop bolishi kerak");
  } else {
    ismText.textContent = ismInput.value;
    emailText.textContent = emailInput.value;
    infoContainer.style.display = "block";
    infoContainer.style.top = "50%";
    ismInput.value=""
    emailInput.value=""
    parolInput.value=""

  }
}
submitBtn.onclick = Submit;
closeBtn.onclick = function () {
    infoContainer.style.top = "-130px";
};





