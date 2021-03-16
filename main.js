// Variables
const btns = document.querySelectorAll(".btnmore")
const bigWrapper = document.querySelector(".bigwrapper")
const squares = document.querySelectorAll(".squares")
const square1 = document.querySelector("#square1")
const square1Btn = square1.querySelector(".btnmore")
const square2 = document.querySelector("#square2")
const square2Btn = square2.querySelector(".btnmore")
const square3 = document.querySelector("#square3")
const square3Btn = square3.querySelector(".btnmore")
const square4 = document.querySelector("#square4")
const square4Btn = square4.querySelector(".btnmore")

//Header Variables
const header = document.getElementById("header");
const sticky = header.offsetTop;
const headerHeight = header.offsetHeight;

// Section Variables
const section1 = document.getElementById("section1");
const sec1Height = section1.offsetHeight;
const angebot = document.getElementById("Angebot");
const sec2Height = angebot.offsetHeight;
const kollektiv = document.getElementById("Kollektiv");
const sec3Height = kollektiv.offsetHeight;
const kontakt = document.getElementById("Kontakt");
const sec4Height = kontakt.offsetHeight;

const sec2Start = sec1Height - headerHeight;
const sec3Start = sec1Height + sec2Height - headerHeight;
const sec4Start = sec1Height + sec2Height + sec3Height - headerHeight;

const viewHeigth = window.innerHeight;
const navEl1 = header.querySelectorAll(".nav-link")[0]
const navEl2 = header.querySelectorAll(".nav-link")[1]
const navEl3 = header.querySelectorAll(".nav-link")[2]
const navEl1Link = navEl1.firstChild


// Functions
function hideDiv(elem) {
  if (elem.classList.contains("hide")) {
    elem.classList.toggle("hide")
    elem.classList.toggle("invisible");
  } else {
    elem.classList.toggle("invisible");
    setTimeout(function() { elem.classList.toggle("hide"); }, 500)
  }
  // add toggle visibility + settimeout für toggle hide
}

function expandDiv(elem) {
  if (elem.classList.contains("active")) {
    elem.classList.toggle("active")
    elem.querySelector(".btnmore").innerHTML = "<span>Mehr erfahren</span>"
    elem.querySelector(".show-on-click").classList.toggle("hide")
  } else {
    document.getElementById('Angebot').scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(function() {elem.classList.toggle("active"); }, 500)
    setTimeout(function() {elem.querySelector(".btnmore").innerHTML = "<span>Zurück zur Übersicht</span>"; }, 500)
    setTimeout(function() {elem.querySelector(".show-on-click").classList.toggle("hide"); }, 500)
  }
};

function hideSiblings(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for ( ; sibling; sibling = sibling.nextSibling )
       if ( sibling.nodeType == 1 && sibling != elem )
          siblings.push( sibling );
    siblings.forEach(hideDiv);
    expandDiv(elem);
    return siblings;
}

// Hide Active Divs on Click
function closeActiveDivs() {
  let activeDiv = document.querySelector('.active')
  if (activeDiv != null) {
  hideSiblings(activeDiv)
  }
}

// fix header
function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function animateNav () {
    if (window.pageYOffset < (sec2Start - (viewHeigth*0.3))) {
    navEl1.classList.remove("nav-active");
    navEl2.classList.remove("nav-active");
    navEl3.classList.remove("nav-active");
  } else if (window.pageYOffset < (sec3Start - (viewHeigth*0.3))) {
    navEl1.classList.add("nav-active");
    navEl2.classList.remove("nav-active");
    navEl3.classList.remove("nav-active");
  } else if (window.pageYOffset < (sec4Start - (viewHeigth*0.5))) {
    navEl1.classList.remove("nav-active");
    navEl2.classList.add("nav-active");
    navEl3.classList.remove("nav-active");
  }  else if (window.pageYOffset >= (sec4Start - (viewHeigth*1.9))) {
    navEl1.classList.remove("nav-active");
    navEl2.classList.remove("nav-active");
    navEl3.classList.add("nav-active");
  }
}

// Print WelcomeText
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

function showWelcomeText2() {
  setTimeout(function() {document.getElementById("welcomeText2").style.opacity = "1"; }, 5000)
}


// Event Listeners
window.onload = function() {printLetterByLetter("welcomeText1", "Was steckt hinter Like-Button, Chatbot und Co.? Wie verändern soziale Medien die Meinungsbildung in der Demokratie? Kann KI die Welt retten? Und wie kann ich mich im digitalen Raum politisch einbringen und die Welt mitgestalten?", 15); showWelcomeText2()}



window.onscroll = function() {fixHeader(); animateNav()};

square1Btn.addEventListener('click', function(){
  hideSiblings(square1)
});
square2Btn.addEventListener('click', function(){
  hideSiblings(square2)
});
square3Btn.addEventListener('click', function(){
  hideSiblings(square3)
});
square4Btn.addEventListener('click', function(){
  hideSiblings(square4)
});

navEl1Link.addEventListener('click', function(){
  closeActiveDivs()
})
