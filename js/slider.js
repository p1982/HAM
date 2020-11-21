const nextBtn = $("#sliderNext");
const previousBtn = $("#sliderPrev");
const imgBtn = $(".people-say-item-photo-small");
const slides = $(".people-say-item");
let currentSlide = 0;
nextBtn.click(goNextSlide);
previousBtn.click(goPreviousSlide);
imgBtn.click(toggleSlide);

setInterval(goNextSlide, 3000)

function goNextSlide() {
    if (currentSlide >= slides.length-1){
        currentSlide = 0;
    } else{
        currentSlide++
    }
    showSlide();
    slideUp();
}

function goPreviousSlide() {
    if (currentSlide === 0){
        currentSlide = 3;
    } else{
        currentSlide--
    }
    showSlide();
    slideUp();
}

function toggleSlide(e) {
    const li = $(e.target).closest('li').siblings('.active');
    const liImg = $(e.target.closest('li'));
            li.removeClass("active");
    $(e.target).closest("li").addClass("active");
    currentSlide = liImg.index();
    showSlide()
}

function showSlide() {
    slides.addClass("hidden");
    console.log(slides[currentSlide])
    $(slides[currentSlide]).removeClass("hidden");
}
function slideUp() {
    $(".people-say-item-photo-small.active").removeClass('active');
    $(imgBtn[currentSlide]).addClass('active');
}

//
// const nextBtn = document.getElementById("sliderNext");
// const previousBtn = document.getElementById("sliderPrev");
// const imgBtn = [...document.querySelectorAll(".people-say-item-photo-small")];
// const slides = [...document.querySelectorAll(".people-say-item")];
// let currentSlide = 0;
// nextBtn.addEventListener("click", goNextSlide);
// previousBtn.addEventListener("click", goPreviousSlide);
// imgBtn.forEach(elem => elem.addEventListener("click", toggleSlide));
//
// setInterval(goNextSlide, 3000)
//
// function goNextSlide() {
//     if (currentSlide >= slides.length-1){
//         currentSlide = 0;
//     } else{
//         currentSlide++
//     }
//     showSlide();
//     slideUp();
// }
//
// function goPreviousSlide() {
//     if (currentSlide === 0){
//         currentSlide = 3;
//     } else{
//         currentSlide--
//     }
//     showSlide();
//     slideUp();
// }
//
// function toggleSlide(e) {
//     e.target.closest("ul").querySelector(".active").classList.remove("active");
//     e.target.closest("li").classList.add("active");
//     currentSlide = imgBtn.findIndex(elem => elem.classList.contains("active"));
//     showSlide()
// }
//
// function showSlide() {
//     slides.forEach(elem => elem.classList.add("hidden"));
//     slides[currentSlide].classList.remove("hidden");
// }
//
// function slideUp() {
//     document.querySelector(".people-say-item-photo-small.active").classList.remove('active');
//     imgBtn[currentSlide].classList.add('active');
// }