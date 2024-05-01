// Side menu
const sideIco = document.querySelector(".side__items"),
    sideMenu = document.querySelector(".side__hover"),
    arrowElem = document.querySelectorAll(".menu__link.arr");

sideIco.addEventListener("mouseenter", () => {
    sideMenu.classList.add("active");
});

sideMenu.addEventListener("mouseleave", () => {
    sideMenu.classList.remove("active");
});

arrowElem.forEach(item => {
    const arrow = item.querySelector(".arr-more");

    item.addEventListener('mouseenter', () => {
        arrow.src = 'img/arr-red.png';
    });

    item.addEventListener('mouseleave', () => {
        arrow.src = 'img/arr-more.png';
    });
});

// Slider
const slides = document.querySelectorAll(".slide"),
      prev = document.querySelectorAll(".prev__btn"),
      next = document.querySelectorAll(".next__btn");
let slideIndex = 0;

showSlides(slideIndex)

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(item => item.style.display = "none");

    slides[slideIndex].style.display = "flex"
}

function plusSlides(n) {
    showSlides(slideIndex += n)
}

prev.forEach(item => {
    item.addEventListener("click", () => {
        plusSlides(-1);
    })
})

next.forEach(item => {
    item.addEventListener("click", () => {
        plusSlides(1);
    })
})

// School
const school = document.querySelectorAll(".school__item"),
      eur = document.querySelectorAll(".eur")

function removeBg() {
    school.forEach(item => {
        item.classList.remove("choosen");
        item.classList.remove("choosen__text");
    });
}

school.forEach(item => {
    item.addEventListener("click", () => {
        removeBg()
        item.classList.add("choosen");
        item.classList.add("choosen__text");
    });
});
