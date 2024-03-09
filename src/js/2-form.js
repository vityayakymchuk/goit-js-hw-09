"use strict";

const form = document.querySelector(".feedback-form");
const mailInput = form.elements.email;
const messegeInput = form.elements.message;
const localStorageKey = "feedback-form-state";


form.addEventListener("input", (e) => {
   const text = messegeInput.value.trim();
   const mail = mailInput.value.trim();
   const data = JSON.stringify({ mail, text })
    localStorage.setItem(localStorageKey, data);
});

const userData = localStorage.getItem(localStorageKey);
const parseData = JSON.parse(userData);

console.log(parseData);

messegeInput.value = parseData.text ?? "";
mailInput.value = parseData.mail ?? "";

form.addEventListener("submit", (e) => {
    if (messegeInput.value === "" || mailInput.value === "") { alert("Fill up all fields!") } else {
         e.preventDefault();
    console.log(parseData);
    localStorage.removeItem(localStorageKey);
  form.reset();
    } 
});







