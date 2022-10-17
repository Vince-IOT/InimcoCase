function ToggleDropdown() {
  document.getElementById("SkillsDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("SKillsInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("SkillsDropdown");
  a = div.getElementsByTagName("span");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function AddSkillToList(value) {
  const li = document.querySelectorAll('ul li');
  for (let i = 0; i < li.length; i++) {
    // it is the same as equal to
    if (li[i].textContent === value.innerText) {
        alert("This skill is already in the list!")
        return;
    }
  }
  var node = document.createElement('li');
  node.appendChild(document.createTextNode(value.innerText));
  node.addEventListener('click', function() {
    this.parentNode.removeChild(this);
  })
  document.querySelector('ul').appendChild(node);
}

const AddSkillBtn = document.getElementById("AddSkillBtn");

AddSkillBtn.addEventListener("click", function(){
  const SkillTxt = document.getElementById("AddSKill-Textbox")
  if (SkillTxt.value == ""){
    alert("please enter a skill to add");
    return;
  }
  const li = document.querySelectorAll('ul li');
  for (let i = 0; i < li.length; i++) {
    // it is the same as equal to
    if (li[i].textContent === SkillTxt.value) {
        alert("That skill is already in the list!")
        return;
    }
  }
  var node = document.createElement('li');
  node.appendChild(document.createTextNode(SkillTxt.value));
  node.addEventListener('click', function() {
    this.parentNode.removeChild(this);
  })
  document.querySelector('ul').appendChild(node);
})


$(document).ready(function(){
  $('#AddSKill-Textbox').keypress(function(e){
    if(e.keyCode==13)
    $('#AddSkillBtn').click();
  });
});



