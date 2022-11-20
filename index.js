const newName = document.getElementById("name")
const emailId = document.getElementById("email")
const mobile = document.getElementById("mobile")
const submitbutton = document.getElementById("submitbutton")
const custTable = document.querySelector("#custTable");
const warning = document.querySelector("#warning");

//preventing default effect of submit button
submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
})

submitbutton.addEventListener("click", submitCustDetails);

function submitCustDetails() {
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
    rowThree.setAttribute("class", "generatetr")
    buttonDelete.setAttribute("class", "del");

    buttonDelete.style = "width:90px; height:40px; border-radius:4px;border: 1px solid black;"
    buttonDelete.innerText = "Delete"
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

custTable.addEventListener("click", deletingButton)

function deletingButton(e) {
  if(!e.target.classList.contains("del")) {
    return;
  }
return e.target.parentElement.parentElement.remove();
}
