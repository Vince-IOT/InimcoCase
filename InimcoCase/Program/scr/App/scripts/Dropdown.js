function myFunction() {
  document.getElementById("SkillsDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("SKillsInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("SkillsDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

Skill = document.getElementById("Skill").addEventListener("click", AddSkillToList)

function AddSkillToList() {
  alert("Test")
}