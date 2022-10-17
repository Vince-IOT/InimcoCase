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

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://localhost:7247/api/Users/CreateUser");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "https://localhost:7247/api/Users/CreateUser");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    let data = `{
        "id": 0,
        "firstName": "Vincent",
        "lastName": "De Decker",
        "socialSkills": [
            "Social"
        ],
        "socialAccounts": [
            {
                "type": "Twitter",
                "address": "@vincent"
            }
        ]
    }`;

    xhr.send(data);
})

