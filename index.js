const newName = document.getElementById("name")
const emailId = document.getElementById("email")
const mobile = document.getElementById("mobile")
const submitbutton = document.getElementById("submitbutton")
const custTable = document.querySelector("#custTable");
const warning = document.querySelector("#warning");


function submitCustDetails(e) {
  //preventing default effect of submit button
  e.preventDefault();
  if (newName.value == "" || emailId.value == "" || mobile.value == "") {
    warning.innerText = "Please enter complete costumer details"
    setTimeout (() => {
      warning.innerText = ""
    }, 1000);
  } else {
    const rowThree = document.createElement("tr")
    const rowName = document.createElement("td")
    const rowEmail = document.createElement("td")
    const rowMobile = document.createElement("td")
    const rowAction = document.createElement("td")
    const buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("class", "del");
    
    buttonDelete.innerText = "Delete"
    buttonDelete.style = "width:90px; height:40px; border-radius:4px;border: 1px solid black;"
    
    rowAction.appendChild(buttonDelete);

      custTable.appendChild(rowThree);
      rowThree.append(rowName, rowEmail, rowMobile, rowAction);
      rowName.innerText = newName.value;
      rowEmail.innerText = emailId.value;
      rowMobile.innerText = mobile.value;
      newName.value = "";
      emailId.value = "";
      mobile.value = "";
  }
}

function deletingButton(e) {
  if(!e.target.classList.contains("del")) {
    return;
  }
return e.target.parentElement.parentElement.remove();
}

custTable.addEventListener("click", deletingButton)
submitbutton.addEventListener("click", submitCustDetails);
