//Allows side nav overlay to open and close

let rightNav = document.querySelector("#rightNav")

// Opens overlay upon hitting Menu button
document.querySelector("#menuButton").addEventListener("click", function () {
    rightNav.classList.remove("sidenav");
    rightNav.classList.add("overlay");
    document.querySelector("main").style.opacity = "15%";
})

// Closes overlay upon hitting "X" button
document.querySelector("#xButton").addEventListener("click", function () {
    rightNav.classList.remove("overlay");
    rightNav.classList.add("sidenav");
    document.querySelector("main").style.opacity = "100%";
})


// Back to top button
let backToTop = document.querySelector("#backToTop");

// Back to top button appears upon scrolling down 40 pixels
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
})

// Back to top button takes user back to the top of the page
backToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Allows for buttons to open and close publication cards
let pubCards = document.querySelectorAll(".pubCard");
let openCards = document.querySelectorAll(".opencard");
let bottomHalves = document.querySelectorAll(".bottomhalf");
let closeCards = document.querySelectorAll(".closecard");

// Open button
openCards.forEach(function (openCardBtn, index) {
    openCardBtn.addEventListener('click', function() {
      openCards[index].style.display = "none";
      bottomHalves[index].style.display = "block";
      closeCards[index].style.display = "block";
    });
})

//Close button
closeCards.forEach(function (closeCardBtn, index) {
    closeCardBtn.addEventListener('click', function() {
      closeCards[index].style.display = "none";
      bottomHalves[index].style.display = "none";
      openCards[index].style.display = "block";
    });
})