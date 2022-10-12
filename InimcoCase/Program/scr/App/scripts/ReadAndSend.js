var FirstName = ""
var LastName = ""

const SubmitBtn = document.getElementById("Submit-Btn");

SubmitBtn.addEventListener("click", function () {
    if (!CheckForInvalids()){
        return;
    }

})

function CheckForInvalids() {
    
    FirstName = document.getElementById("FirstNameTextbox").value;
    LastName = document.getElementById("LastNameTextbox").value;
    const SkillList = document.getElementById("SkillList");
    if (FirstName == "" || LastName == "") {
        alert("Please make sure you entered your first and last name");
        return false;
    }
    if (SkillList.innerHTML.trim() == ""){
        alert("Don't forget to put in some skills! surely you have some :D");
        return false;
    }

    var SocialCount = 0
    for (const Usernames in Socials){
        if (Socials[Usernames] != ""){
            SocialCount = SocialCount +1;
        }
    }
    if (SocialCount == 0){
        alert("Don't forget to add some socials, it's not required but always handy! :D")
        return false;
    }
    return true;
}