//Select html elements 
const form = document.querySelector(".js-form"),
  input = form.querySelector("input")
const welcome = document.querySelector(".js-welcome")

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//saving the given name to local storage 
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//Display Input(Name)
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintWelcome(currentValue);
  saveName(currentValue);
}

//Show the input(form) and wait for submition.
function askName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
} 

//remove input(form) and display welcoming text with text
function paintWelcome(text) {
  form.classList.remove(SHOWING_CN);
  welcome.classList.add(SHOWING_CN);
  welcome.innerText = `Hello ${text}.`;
}

//MAIN FUNCTION
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null ) {
    // No User
    askName();

      

  } else {
    //Yes User
    paintWelcome(currentUser);
  }
}

//execute functions
loadName();
