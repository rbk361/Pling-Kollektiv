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
var header = document.getElementById("header");
var sticky = header.offsetTop;
var Angebot = document.getElementById("Angebot");
var s2position = Angebot.offsetTop;
var Kollektiv = document.getElementById("Kollektiv");
var s3position = Kollektiv.offsetTop;
var Kontakt = document.getElementById("Kontakt");
var s4position = Kontakt.offsetTop;
var viewHeigth = window.innerHeight;


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

// fix header
function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    const navElement1 = header.querySelectorAll(".nav-link")[0]
    const navElement2 = header.querySelectorAll(".nav-link")[1]
    const navElement3 = header.querySelectorAll(".nav-link")[2]
    console.log("pageYOffset " + pageYOffset);
    console.log("s3position " + s3position);
    console.log("s4position " + s4position);
    console.log("viewHeigth " + viewHeigth);
    if (window.pageYOffset > (s4position - (viewHeigth*1.5))) {
      navElement1.classList.remove("nav-active")
      navElement2.classList.remove("nav-active")
      navElement3.classList.add("nav-active")
    } else if (window.pageYOffset > (s3position - (viewHeigth))) {
      navElement1.classList.remove("nav-active")
      navElement2.classList.add("nav-active")
      navElement3.classList.remove("nav-active")
    } else if (window.pageYOffset > (s2position - (viewHeigth*0.5))) {
      navElement1.classList.add("nav-active")
      navElement2.classList.remove("nav-active")
      navElement3.classList.remove("nav-active")
    } else {
      navElement1.classList.remove("nav-active")
      navElement2.classList.remove("nav-active")
      navElement3.classList.remove("nav-active")
    }
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {fixHeader()};


// Event Listeners
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
