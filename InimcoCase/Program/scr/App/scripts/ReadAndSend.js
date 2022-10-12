var FirstNameText = ""
var LastNameText = ""

function CheckForInvalids() {

    FirstNameText = document.getElementById("FirstNameTextbox").value;
    LastNameText = document.getElementById("LastNameTextbox").value;
    const SkillList = document.getElementById("SkillList");
    if (FirstNameText == "" || LastNameText == "") {
        alert("Please make sure you entered your first and last name");
        return false;
    }
    if (SkillList.innerHTML.trim() == "") {
        alert("Don't forget to put in some skills! surely you have some :D");
        return false;
    }

    var SocialCount = 0
    for (const Usernames in Socials) {
        if (Socials[Usernames] != "") {
            SocialCount = SocialCount + 1;
        }
    }
    if (SocialCount == 0) {
        alert("Don't forget to add some socials, it's not required but always handy! :D")
        return false;
    }
    return true;
}



var user = {
    FirstName: "",
    LastName: "",
    SocialSkills: [

    ],
    SocialAccounts: [

    ]
}

const SubmitBtn = document.getElementById("Submit-Btn");

SubmitBtn.addEventListener("click", function () {
    if (!CheckForInvalids()) {
        return;
    }

    user.FirstName = FirstNameText;
    user.LastName = LastNameText;

    const li = document.querySelectorAll('ul li');
    for (let i = 0; i < li.length; i++) {
        user.SocialSkills.push(li[i].textContent)
    }

    SocialAccountJson = {}
    for (const Site in Socials) {
        if (Socials[Site] != "") {
            TypeStr = Site;
            AddressStr = Socials[Site]
            user.SocialAccounts.push({ Type: TypeStr, Address: AddressStr })
        }
    }

    console.log(user)
})

