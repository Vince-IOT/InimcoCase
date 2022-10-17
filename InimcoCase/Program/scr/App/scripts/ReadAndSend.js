var FirstNameText = ""
var LastNameText = ""


// Function checks if anything is left empty on submitting
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
        alert("Don't forget to add some socials, it's always handy! :D")
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

SubmitBtn.addEventListener("click", async function () {
    if (!CheckForInvalids()) {
        return;
    }

    user.FirstName = FirstNameText;
    user.LastName = LastNameText;

    // Get all skills in the list
    const li = document.querySelectorAll('ul li');
    for (let i = 0; i < li.length; i++) {
        user.SocialSkills.push(li[i].textContent)
    }

    // Cycle through all added social media accounts and store them in users information
    SocialAccountJson = {}
    for (const Site in Socials) {
        if (Socials[Site] != "") {
            TypeStr = Site;
            AddressStr = Socials[Site]
            user.SocialAccounts.push({ Type: TypeStr, Address: AddressStr })
        }
    }

    // let payload = `{
    //     "id": 0,
    //     "firstName": "Vincent",
    //     "lastName": "De Decker",
    //     "socialSkills": [
    //         "Social"
    //     ],
    //     "socialAccounts": [
    //         {
    //             "type": "Twitter",
    //             "address": "@vincent"
    //         }
    //     ]
    // }`;

    // var data = new FormData();
    // data.append("json", JSON.stringify(payload));

    console.log(user)

    const url = 'https://localhost:7247/api/Users/CreateUserJson'

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: data
    });
    console.log(response)

})

