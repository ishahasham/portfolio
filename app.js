let barsIcon = document.querySelector(".header .bars-icon");
let mobileMenu = document.querySelector(".header .mobile");
let topHeader = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 70) {
    topHeader.style.background = "#121212";
    topHeader.style.transition = ".3s";
  } else {
    topHeader.style.background = "transparent";
    topHeader.style.transition = ".3s";
  };
});

let closeMobIcon = document.querySelector(".header .close-mob");
barsIcon.addEventListener("click", showMobile);
function showMobile() {
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.opacity = "1";
  mobileMenu.style.transition = ".3s";
  closeMobIcon.style.visibility = "visible";
  closeMobIcon.style.opacity = "1";
  closeMobIcon.style.display = "flex";
  closeMobIcon.style.transition = ".3s";
  barsIcon.style.visibility = "hidden";
  barsIcon.style.opacity = "0";
  barsIcon.style.transition = ".3s";
};
closeMobIcon.addEventListener("click", hideMobile);
function hideMobile() {
  mobileMenu.style.visibility = "hidden";
  mobileMenu.style.opacity = "0";
  mobileMenu.style.transition = ".3s";
  closeMobIcon.style.visibility = "hidden";
  closeMobIcon.style.opacity = "0";
  closeMobIcon.style.display = "none";
  closeMobIcon.style.transition = ".3s";
  barsIcon.style.visibility = "visible";
  barsIcon.style.opacity = "1";
  barsIcon.style.transition = ".3s";
}

let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let skillsCont = document.querySelector(".skills .boxes-cont");
let skillBoxes = document.querySelectorAll(".skill-box");

let currentBox = 1;


rightArrow.addEventListener("click", () => {
  currentBox++;
  updateBox();
});
leftArrow.addEventListener("click", () => {
  currentBox--;
  updateBox();
});

function updateBox() {
  if (currentBox > skillBoxes.length - 2) {
    currentBox = 1;
  } else if (currentBox < 1) {
    currentBox = skillBoxes.length - 2;
  };
  skillsCont.style.transform = `translateX(-${(currentBox - 1) * 240}px)`;
};

setInterval(() => {
  updateBox();
  currentBox++;
}, 3000);



// projects

function showProjects(tab) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });

  document.getElementById(tab).style.display = 'flex';

  const tabButtons = document.querySelectorAll('.tabs span');
  tabButtons.forEach(function(tabButton) {
    tabButton.classList.remove('active');
  });

  // event.currentTarget.classList.add('active');
}

showProjects('tab1');

// contact
document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault(); 
 
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const contactInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  };

  // Retrieve existing data from local storage, or create an empty array if no data exists
  let contactList = JSON.parse(localStorage.getItem('contactList')) || [];
  contactList.push(contactInfo);
  localStorage.setItem('contactList', JSON.stringify(contactList));

  // Show a success message using SweetAlert2
  Swal.fire({
    title: "Let's Connect!",
    text: "Your contact information has been send.",
    icon: "success"
  });

  // Optionally, clear the form fields after saving
  document.getElementById('contactForm').reset();
});

