
   let myInput = document.getElementById("psw");
   let letter = document.getElementById("letter");
   let capital = document.getElementById("capital");
   let length = document.getElementById("length");

    myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

    myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

    myInput.onkeyup = function() {

    let upperCaseLetters = /[A-Z]/;
    if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}


    if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
}
