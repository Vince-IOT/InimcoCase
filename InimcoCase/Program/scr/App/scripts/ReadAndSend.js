const SubmitBtn = document.getElementById("Submit-Btn");
const SkillList = document.getElementById("SkillList");


SubmitBtn.addEventListener("click", function () {
    CheckForInvalids()
})


function CheckForInvalids() {
    var FirstName = document.getElementById("FirstNameTextbox").value;
    var LastName = document.getElementById("LastNameTextbox").value;
    if (FirstName == "" || LastName == "") {
        alert("Please make sure you entered your first and last name");
    }
    if (SkillList.innerHTML.trim() == ""){
        alert("Don't forget to put in some skills! surely you have some :D");
    }


}