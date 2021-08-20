/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let sendButton = document.querySelector("#sendButton");
  let cancelButton = document.querySelector("#cancelButton");
  let form = document.querySelector("#myForm");
  let missingFields = [];
  sendButton.addEventListener("click", function(event) {
    let formControl = document.querySelectorAll(".form-control");
    console.log(document.getElementById("inputState"));
    formControl.forEach(function(input) {
      if (input.value == "") {
        input.classList.add("alert-danger");
        missingFields.push(input);
        event.preventDefault();
      }
    });
    if (missingFields.length != 0) {
      let alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-danger", "alertDiv");
      alertDiv.innerHTML = "Some fields are missing";
      let parent = document.querySelector(".parent");
      parent.append(alertDiv);
    }
    console.log(missingFields);
  });
  cancelButton.addEventListener("click", function() {
    form.reset();
    for (let element of missingFields) {
      element.classList.remove("alert-danger");
    }
    missingFields = [];
    let alertDiv = document.querySelector(".alertDiv");
    if (alertDiv != undefined) {
      alertDiv.remove();
    }
  });
};
