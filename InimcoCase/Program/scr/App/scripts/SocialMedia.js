var Socials = {}

const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

function AddSocial(variable) {
    SocialMediaSite = variable.id.split("-");
    if (document.getElementById(variable.id).classList.contains("Connected")) {
        document.getElementById(variable.id).classList.toggle("Connected");
        document.getElementById(SocialMediaSite[1] + "-Username").innerHTML = SocialMediaSite[1];
        var DisconnectedText = document.getElementById(SocialMediaSite[1] + "-disconnect-Text");
        DisconnectedText.style.visibility = "hidden";
    } else {

        let SocialsLink = prompt("Please enter your " + SocialMediaSite[1]);
        if (SocialsLink == null || SocialsLink == "") {
            return;
        } else {
            
    
            if (!isValidUrl(SocialsLink)){
                alert("Please enter a valid URL!");
                return;
            }

            if (SocialsLink.includes("linkedin")) {
                SocialMediaUsername = SocialsLink.split(".com/in/");
            } else {
                SocialMediaUsername = SocialsLink.split(".com/");
            }

            if (SocialMediaUsername.includes("/")) {
                SocialMediaUsername.split('/');
            }
            document.getElementById(SocialMediaSite[1] + "-Username").innerHTML = SocialMediaUsername[1];
            document.getElementById(variable.id).classList.toggle("Connected");
            var DisconnectedText = document.getElementById(SocialMediaSite[1] + "-disconnect-Text");
            DisconnectedText.style.visibility = "visible";

            Socials[SocialMediaSite[1]] = SocialsLink;
        }
    }
}