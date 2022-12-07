const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirm");
const formSubmit = document.getElementById("form");
const submitBtn = document.getElementById("btn")
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Working on the error messages
const userNameErrorMsg = document.getElementById("green-checked");
const redMsg = document.getElementById("rederror");
const lessthanMsg = document.getElementById("lessthan");

// Email errorMsg

const userEmailErrorMsg = document.getElementById("green-checked1");
const redEmailMsg = document.getElementById("rederror1");
const lessthanEmailMsg = document.getElementById("lessthan1");

// password error messages

const passwordErrorMsg = document.getElementById("green-checked2");
const redPasswordMsg = document.getElementById("rederror2");
const lessthanPasswordMsg = document.getElementById("lessthan2");
const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// confirm error messages

const confirmErrorMsg = document.getElementById("green-checked3");
const redConfirmMsg = document.getElementById("rederror3");
const lessthanConfirmMsg = document.getElementById("lessthan3");



const nameInputValidation = () => {
  if (userName.value === "") {
   redMsg.style.display = "flex";
   userNameErrorMsg.style.display = "none";
  }else if (userName.value.length < 3) {
    redMsg.style.display = "none";
    lessthanMsg.style.display = "flex";
  }else {
    userNameErrorMsg.style.display = "flex";
    redMsg.style.display = "none";
    lessthanMsg.style.display = "none";
  }

//  for email
  if (userEmail.value === "") {
   redEmailMsg.style.display = "flex";
   userEmailErrorMsg.style.display = "none"
  } else if (userEmail.value.match(validRegex)) {
    userEmailErrorMsg.style.display = "flex"
    redEmailMsg.style.display = "none";
} else{
    redEmailMsg.style.display = "block";
}

// for passowrd
if (userPassword.value === "") {
    redPasswordMsg.style.display = "block"
    lessthanPasswordMsg.style.display = "none";
    passwordErrorMsg.style.display = "none";
}else if (userPassword.value.length < 6) {
    lessthanPasswordMsg.style.display = "block";
    redPasswordMsg.style.display = "none"
    passwordErrorMsg.style.display = "none";
} else if (userPassword.value.match(validRegex)) {
    passwordErrorMsg.style.display = "block";
    lessthanPasswordMsg.style.display = "none";
    redPasswordMsg.style.display = "none"
}

else{
    lessthanPasswordMsg.style.display = "none";
    redPasswordMsg.style.display = "none"
    passwordErrorMsg.style.display = "block";
}

// for password 2
if(userPassword.value == userConfirmPassword.value){
    confirmErrorMsg.style.display = "block";
    redConfirmMsg.style.display = "none";
} else{
    redConfirmMsg.style.display = "block";
    confirmErrorMsg.style.display = "none";
}


}



form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault()
    nameInputValidation()
  console.log("The form was submitted");

}