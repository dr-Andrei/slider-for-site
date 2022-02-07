const images = document.querySelectorAll(".img-min");
let count = 0; // переменная, которая указывает на номер активного изображения в images
let src = "";
const next = document.querySelector(".next");
next.onclick = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;

function nextFunction() {
    for (let x = 0; x < images.length; x++) {
        if (images[x].getAttribute("class") == "img-min active-img") {
            count = x;
            if (x == images.length - 1) {
                src = images[0].getAttribute("src");
            } else src = images[x + 1].getAttribute("src");
        }
    }
    for (let i of images) {
        i.classList.remove("active-img");
    }
    if (count == images.length - 1) {
        count = -1;
    }
    images[count + 1].classList.add("active-img");
    document.querySelector(".img-max").setAttribute("src", src);
}

function prevFunction() {
    for (let x = 0; x < images.length; x++) {
        if (images[x].getAttribute("class") == "img-min active-img") {
            count = x;
            if (x == 0) {
                src = images[images.length - 1].getAttribute("src");
            } else src = images[x - 1].getAttribute("src");
        }
    }
    for (let i of images) {
        i.classList.remove("active-img");
    }
    if (count == 0) {
        count = images.length;
    }
    images[count - 1].classList.add("active-img");
    document.querySelector(".img-max").setAttribute("src", src);
}

