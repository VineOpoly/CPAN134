function validateTxt() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mark1 = document.getElementById("mark1").value;
    const mark2 = document.getElementById("mark2").value;
    const mark3 = document.getElementById("mark3").value;
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const mark1Error = document.getElementById("mark1Error");
    const mark2Error = document.getElementById("mark2Error");
    const mark3Error = document.getElementById("mark3Error");
  
    if (firstName === "") {
      firstNameError.textContent = "Enter first name";
    } else {
      firstNameError.textContent = "";
    }
  
    if (lastName === "") {
      lastNameError.textContent = "Enter last name";
    } else {
      lastNameError.textContent = "";
    }
  
    if (mark1 === "" || mark1 < 0 || mark1 > 100) {
      mark1Error.textContent = "Enter a valid mark 1";
    } else {
      mark1Error.textContent = "";
    }
  
    if (mark2 === "" || mark2 < 0 || mark2 > 100) {
      mark2Error.textContent = "Enter a valid mark 2";
    } else {
      mark2Error.textContent = "";
    }
  
    if (mark3 === "" || mark3 < 0 || mark3 > 100) {
      mark3Error.textContent = "Enter a valid mark 3";
    } else {
      mark3Error.textContent = "";
    }
  }