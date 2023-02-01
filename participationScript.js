// Show-hide hamburger-menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Hide hamburger-menu on scroll
//var prevScrollpos = window.pageYOffset;
//window.onscroll = function() {
  //var currentScrollPos = window.pageYOffset;
  //if (prevScrollpos > currentScrollPos) {
    //document.getElementById("navbar").style.top = "0";
  //} else {
    //document.getElementById("navbar").style.top = "-50px";
  //}
  //prevScrollpos = currentScrollPos;
//}

window.onload = function() {
    let button = document.getElementById('sended');
    button.addEventListener('click', function() {
        let schoolName = document.querySelector('.naam-school input').value;
        let schoolStreet = document.querySelector('.straat-nr input').value;
        let schoolCity = document.querySelector('.stad input').value;
        let schoolPostal = document.querySelector('.postcode input').value;
        let teacherName = document.querySelector('.naam-leerkracht input').value;
        let teacherEmail = document.querySelector('.email-leerkracht input').value;
        let teacherSubjects = document.querySelector('.vakken-leerkracht input').value;
        let teacherPhone = document.querySelector('.tel-leerkracht input').value;
        let participantCount = document.querySelector('.deelnemers input').value;
        let reason = document.querySelector('.waarom-deelname textarea').value;
        let slogan = document.querySelector('.slogan input').value;
        let participateInOlympiad = document.querySelector('.checkbox').checked;

        console.log('School Name:', schoolName);
        console.log('School Street:', schoolStreet);
        console.log('School City:', schoolCity);
        console.log('School Postal Code:', schoolPostal);
        console.log('Teacher Name:', teacherName);
        console.log('Teacher Email:', teacherEmail);
        console.log('Teacher Subjects:', teacherSubjects);
        console.log('Teacher Phone:', teacherPhone);
        console.log('Participant Count:', participantCount);
        console.log('Reason:', reason);
        console.log('Slogan:', slogan);
        console.log('Participate in Olympiad:', participateInOlympiad);
    });
};

// const actualBtn = document.getElementById('actual-btn');

// const fileChosen = document.getElementById('file-chosen');

// actualBtn.addEventListener('change', function(){
//     fileChosen.textContent = this.files[0].name
// });