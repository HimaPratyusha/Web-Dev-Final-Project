const hamMenuIcon = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-bar");
const navLinks = [...navBar.querySelectorAll("li")];

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

// ====================accordian=========================================
const dropdowns = document.querySelectorAll(".exp_box");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("trigger_drop");
    });
    dropdown.classList.add("trigger_drop");
  });
});

// ========================form===========================

const form = document.querySelector(".contact_sec");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value: name } = document.getElementById("name");
  const { value: email } = document.getElementById("email");
  const { value: message } = document.getElementById("message");
  if (!name.trim() && !email.trim()) {
    console.warn("You must enter some data to submit this form");
  } else {
    const formattedName = name.trim() || "no submission";
    const formattedEmail = email.trim() || "no submission";
    const formattedMessage = message.trim() || "no submission";
    console.log("======== Form Submission =========");
    console.log(`   Username: ${formattedName}`);
    console.log(`   Email: ${formattedEmail}`);
    console.log(`   Message: ${formattedMessage}`);
  }
});
