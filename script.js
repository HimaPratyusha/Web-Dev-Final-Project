let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

// ====================accordian=========================================
var dropdown = document.querySelectorAll('.exp_box');
dropdown.forEach(item =>{
    item.addEventListener('click',() =>{
        for(var i = 0; i < dropdown.length; i++){
            dropdown[i].classList.remove('trigger_drop');
        }
        item.classList.add('trigger_drop')
    })
})