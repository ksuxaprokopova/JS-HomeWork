// Реализовать слайд-шоу из фото на javascript. Ваша задача сделать реализовать функционал переключения изображений с помощью кнопок.

// Заранее в верстке должны быть добавлены все изображения.
// При загрузке страницы - прячутся все изображения кроме первого (вы также можете спрятать их заранее).
// Под картикой должны быть оборажены 2 кнопки - Prev и Next.
// При нажатии на кнопку Next изображение должно переключиться на следующее. Соотвественно при нажатии на Prev - на предыдущее.
// ВАЖНО! Переключение должно происходить бесконечно. То есть, если в данный момент отображено последнее изображение, то при попытке переключиться на следующее, пользователю должно показаться первое изображение. То же самое наоборот, если отображено первое изображение - при переключении назад показывать последнее.
// ЕЩЕ ВАЖНО! Ваш код должен рабоать для любого количества слайдов. Верстка может измениться, при этом js код должен оставаться универсальным.
// Изображения находятся в папке /images но вы также можете взять любые. Стили так же остаются на ваше усмотрение, но помните, что вы фронтенд-разработчики, и у вас должно быть чувство прекрасного :)



const sliders = [...document.querySelectorAll(".slider")];
const buttonPrev = document.getElementById("prev");

const buttonNext = document.getElementById("next");

let sliderNumber = 0;


const hideSlidesOnLoad = () => {
    const slideToHide = sliders.slice(1);
    slideToHide.forEach((slide) => {
        slide.classList.add("hidden");
    });
};


window.addEventListener("DOMContentLoaded", hideSlidesOnLoad);


const showPrevSlide = () => {
    sliders[sliderNumber].classList.add("hidden");

    if(sliderNumber === 0){
        sliders[sliders.length - 1].classList.remove("hidden");
        sliderNumber = sliders.length - 1;
    }else{
        sliders[sliderNumber - 1].classList.remove("hidden");
        sliderNumber--;
    };
};


const showNextSlide = () => {
    sliders[sliderNumber].classList.add("hidden");

    if(sliderNumber === sliders.length - 1){
        sliders[0].classList.remove("hidden");
        sliderNumber = 0;
    }else{
        sliders[sliderNumber + 1].classList.remove("hidden");
        sliderNumber++;
    };
};

buttonPrev.addEventListener("click", showPrevSlide);
buttonNext.addEventListener("click", showNextSlide);