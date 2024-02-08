document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function() {
        document.querySelector(".slide").classList.add("active");
    }, 500)
});

function nextSlide() {
    let currSlide = document.querySelector(".slide.active"),
        nextSlide = currSlide.nextElementSibling;

    currSlide.classList.remove("active");
    if(nextSlide) {
        nextSlide.classList.add("active");
    } else {
        document.querySelectorAll(".slide")[0].classList.add("active");
    }
}

function previousSlide() {
    let currSlide = document.querySelector(".slide.active"),
        prevSlide = currSlide.previousElementSibling,
        slideCount = document.querySelectorAll(".slide").length;

    currSlide.classList.remove("active");
    if(prevSlide) {
        prevSlide.classList.add("active");
    } else {
        document.querySelectorAll(".slide")[slideCount - 1].classList.add("active");
    }
}
document.documentElement.lang = "ru"
document.documentElement.classList.add("page")
document.body.classList.add("page__body")

const slider = document.querySelector(".slider")
const curtain = slider.querySelector(".slider__curtain")
let sliderStyles = getComputedStyle(slider)
let curtainPlaceStart
let clientX

window.addEventListener("pointerup", stopTheCurtainShifting)
curtain.addEventListener("pointerdown", startTheCurtainShifting)

function startTheCurtainShifting (event) {
	curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"))
	clientX = event.clientX
	window.addEventListener("pointermove", shiftТheСurtain)
}

function shiftТheСurtain (event) {
	let deltaX = event.clientX - clientX
	let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
	let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
	slider.style.setProperty("--curtain-place", `${curtainPlace}`)
}

function stopTheCurtainShifting () {
	window.removeEventListener("pointermove", shiftТheСurtain)
}
