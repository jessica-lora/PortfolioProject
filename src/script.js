import ScrollReveal from "scrollreveal";
import fullpage from "fullpage.js";
import Typed from "typed.js";

const sr = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: false,
});

sr.reveal(".logo", { delay: 210, origin: "left" });
sr.reveal(".navlist", { delay: 310, origin: "top" });
sr.reveal(".top-btnn", { delay: 410, origin: "right" });

sr.reveal(".main-content h4", { delay: 510, origin: "top" });
sr.reveal(".main-content h1", { delay: 610, origin: "left" });
sr.reveal(".main-content p", { delay: 710, origin: "right" });
sr.reveal(".social", { delay: 810, origin: "left" });
sr.reveal(".main-btnn", { delay: 910, origin: "top" });

sr.reveal(".bottom", { delay: 1010, origin: "bottom" });

var myFullpage = new fullpage("#fullpage", {
  sectionsColor: ["#D97E9F", "#695173", "#1d3759", "#D97E9F"],
  autoScrolling: true,
  scrollHorizontally: true,
  sectionSelector: ".section",
  slideSelector: ".slide",
  controlArrows: true,
  controlArrowsHTML: [
    '<div class="fp-arrow" style=""></div>',
    '<div class="fp-arrow"></div>',
  ],
  navigation: false,
  // navigationPosition: "bottom",
  slidesNavigation: false,
  slidesNavPosition: "bottom",
  // anchors: ['hero', 'about', 'skills', 'projects', 'contact'],
});

var typed = new Typed(".input", {
  strings: ["Jessica Lora", "Web Developer", "UX Designer"],
  typeSpeed: 70,
  backSpeed: 65,
  loop: true,
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

var body = document.getElementById("mainbody");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflow = "hidden"; // ADD THIS LINE
  body.style.height = "100%"; // ADD THIS LINE
};

btn2.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
  document.body.style.height = "auto"; // ADD THIS LINE
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
  }
};
