// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
};

// *=============================== github calender ==================================
let calendar=document.getElementsByClassName("calendar")
    GitHubCalendar(calendar, "RanvijayTiwari");

    // or enable responsive functionality:
    GitHubCalendar(calendar, "RanvijayTiwari", { responsive: true });

// *=============================== resume open in new tab ==================================


    let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

    function NewTab() { 
      window.open(
        "https://drive.google.com/file/d/18-c68v8L1wKIFcmWtEhhBeIMIjtMNvWU/view?usp=sharing",
        "_blank"
      );
    }

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
    };

  });
  // *=============================== sticky navbar ==================================
   
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

// *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')

};




// project repo and live demo link
//1 ritesh
document.getElementById('codebaseButton').addEventListener('click', function() {
  window.location.href = 'https://github.com/RanvijayTiwari/silky-toothbrush-7443';
});

document.getElementById('liveDemoButton').addEventListener('click', function() {
  window.location.href = 'https://deft-caramel-e9652e.netlify.app/';
});



//2.thundertech
document.getElementById('codebaseButton2').addEventListener('click', function() {
  window.location.href = 'https://github.com/RanvijayTiwari/synonymous-nose-6503';
});

document.getElementById('liveDemoButton2').addEventListener('click', function() {
  window.location.href = 'https://thundertech.vercel.app/';
});



//3.quikrbazar
document.getElementById('githubButton').addEventListener('click', function() {
  window.location.href = 'https://github.com/RanvijayTiwari/Quikr-Bazaar';
});

document.getElementById('netlifyButton').addEventListener('click', function() {
  window.location.href = 'https://dancing-gingersnap-77a4c6.netlify.app/';
});



//4.recipehub
document.getElementById('codebaseButton3').addEventListener('click', function() {
  window.location.href = 'https://github.com/RanvijayTiwari/RecipeHub-Recipe-Sharing-Platform';
});

document.getElementById('liveDemoButton3').addEventListener('click', function() {
  window.location.href = 'https://concerned-picture-9849-frontend.vercel.app/';
});
// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left'});

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Developer', 'Backend Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})



